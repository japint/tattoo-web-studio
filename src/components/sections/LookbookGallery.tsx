"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  PanInfo,
} from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  RotateCcw,
} from "lucide-react";

interface GalleryImage {
  src: string;
  alt: string;
  title: string;
  category: string;
}

export default function LookbookGallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [imageScale, setImageScale] = useState(1);
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const [visibleImages, setVisibleImages] = useState(new Set<number>());

  // Motion values for swipe gestures
  const x = useMotionValue(0);
  const opacity = useTransform(x, [-200, 0, 200], [0.5, 1, 0.5]);

  const containerRef = useRef<HTMLDivElement>(null);
  const lastTap = useRef(0);

  const galleryImages: GalleryImage[] = [
    {
      src: "/images/img0.jpg",
      alt: "Traditional tattoo artwork",
      title: "Traditional Rose",
      category: "Traditional",
    },
    {
      src: "/images/img1.jpg",
      alt: "Realistic portrait tattoo",
      title: "Portrait Realism",
      category: "Realism",
    },
    {
      src: "/images/img2.jpg",
      alt: "Geometric design tattoo",
      title: "Sacred Geometry",
      category: "Geometric",
    },
    {
      src: "/images/img3.jpg",
      alt: "Watercolor style tattoo",
      title: "Watercolor Phoenix",
      category: "Watercolor",
    },
    {
      src: "/images/img4.jpg",
      alt: "Black and grey tattoo",
      title: "Black & Grey Portrait",
      category: "Black & Grey",
    },
    {
      src: "/images/img5.jpg",
      alt: "Dotwork tattoo design",
      title: "Mandala Dotwork",
      category: "Dotwork",
    },
    {
      src: "/images/img7.jpg",
      alt: "Custom tattoo artwork",
      title: "Custom Design",
      category: "Custom",
    },
    {
      src: "/images/img8.jpg",
      alt: "Tribal style tattoo",
      title: "Tribal Fusion",
      category: "Tribal",
    },
  ];

  // Mobile detection and intersection observer for lazy loading
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Better mobile detection for all mobile devices
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Intersection Observer for lazy loading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(
              entry.target.getAttribute("data-index") || "0"
            );
            setVisibleImages((prev) => new Set([...prev, index]));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    // Observe all gallery items
    const galleryItems = document.querySelectorAll("[data-gallery-item]");
    galleryItems.forEach((item) => observer.observe(item));

    return () => {
      window.removeEventListener("resize", checkMobile);
      observer.disconnect();
    };
  }, []);

  // Loading state management
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const openModal = (image: GalleryImage, index: number) => {
    setSelectedImage(image);
    setSelectedIndex(index);
    setImageScale(1);
    setImagePosition({ x: 0, y: 0 });
    x.set(0);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedImage(null);
    setImageScale(1);
    setImagePosition({ x: 0, y: 0 });
    x.set(0);
    document.body.style.overflow = "unset";
  };

  const navigateImage = (direction: "prev" | "next") => {
    let newIndex;
    if (direction === "next") {
      newIndex =
        selectedIndex < galleryImages.length - 1 ? selectedIndex + 1 : 0;
    } else {
      newIndex =
        selectedIndex > 0 ? selectedIndex - 1 : galleryImages.length - 1;
    }
    setSelectedIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
    setImageScale(1);
    setImagePosition({ x: 0, y: 0 });
    x.set(0);
  };

  // Touch and swipe handlers
  const handleDragEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    if (Math.abs(offset) > 100 || Math.abs(velocity) > 500) {
      if (offset > 0) {
        navigateImage("prev");
      } else {
        navigateImage("next");
      }
    } else {
      x.set(0);
    }
  };

  // Double tap to zoom
  const handleDoubleTap = () => {
    const now = Date.now();
    const timeSince = now - lastTap.current;

    if (timeSince < 300 && timeSince > 0) {
      if (imageScale === 1) {
        setImageScale(2);
      } else {
        setImageScale(1);
        setImagePosition({ x: 0, y: 0 });
      }
    }
    lastTap.current = now;
  };

  // Zoom controls
  const handleZoomIn = () => {
    setImageScale((prev) => Math.min(prev + 0.5, 3));
  };

  const handleZoomOut = () => {
    setImageScale((prev) => Math.max(prev - 0.5, 1));
  };

  const handleResetZoom = () => {
    setImageScale(1);
    setImagePosition({ x: 0, y: 0 });
  };

  // Pan handler for zoomed images
  const handlePan = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (imageScale > 1) {
      setImagePosition((prev) => ({
        x: prev.x + info.delta.x,
        y: prev.y + info.delta.y,
      }));
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2,
      },
    },
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <>
      <section
        id="gallery"
        className="scroll-snap-section py-12 sm:py-20 bg-gradient-to-b from-gray-900 to-black"
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">{/* Reduced mobile padding */}
          {/* Section Header */}
          <motion.div
            className="text-center mb-8 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title mb-4">
              <span className="accent-text">Gallery</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-2 sm:px-0">{/* Better mobile text sizing */}
              Discover our portfolio of exceptional tattoo artistry. Each piece
              tells a unique story crafted with precision and passion.
            </p>
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            className="grid gap-2 grid-cols-2 xs:gap-3 sm:gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            ref={containerRef}
          >
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="gallery-item group relative rounded-lg xs:rounded-xl overflow-hidden cursor-pointer card-hover aspect-[4/5] xs:aspect-[4/5] sm:aspect-square"
                onClick={() => openModal(image, index)}
                data-gallery-item
                data-index={index}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Image with lazy loading */}
                <div className="absolute inset-0 w-full h-full">
                  {visibleImages.has(index) || index < 4 ? (
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-all duration-500 ease-out group-hover:scale-110"
                      sizes="(max-width: 475px) 50vw, (max-width: 640px) 50vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      quality={90}
                      loading={index < 4 ? "eager" : "lazy"}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                      style={{
                        objectPosition: "center center",
                      }}
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-800 animate-pulse flex items-center justify-center">
                      <div className="text-gray-600 text-sm">Loading...</div>
                    </div>
                  )}

                  {/* Loading overlay */}
                  {isLoading && (
                    <div className="absolute inset-0 bg-gray-800 animate-pulse" />
                  )}

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 ease-out" />

                  {/* Content Overlay */}
                  <motion.div
                    className="absolute inset-0 flex flex-col justify-end p-3 sm:p-4 md:p-6 opacity-100 sm:opacity-0 sm:translate-y-4 sm:group-hover:translate-y-0 sm:group-hover:opacity-100 transition-all duration-300 ease-out"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="bg-black/80 backdrop-blur-sm rounded-lg p-2 sm:p-3 md:bg-transparent md:backdrop-blur-none">
                      <h3 className="text-white font-bold mb-1 text-sm sm:text-base md:text-lg">
                        {image.title}
                      </h3>
                      <p className="text-gold-400 font-medium text-xs sm:text-sm">
                        {image.category}
                      </p>
                    </div>
                  </motion.div>

                  {/* Hover Border Effect */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold-400/50 rounded-xl transition-all duration-300" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* View More Button */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <button className="btn-primary group" suppressHydrationWarning>
              <span>View Complete Portfolio</span>
              <svg
                className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Full-Size Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
              onClick={closeModal}
            />

            {/* Modal Content */}
            <motion.div
              className={`relative w-full ${
                isMobile ? "max-w-md max-h-[80vh]" : "max-w-4xl max-h-[90vh]"
              }`}
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              style={{ x, opacity }}
              drag={isMobile ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
            >
              {/* Close Button */}
              <button
                className={`absolute ${
                  isMobile ? "-top-8 right-0" : "-top-12 right-0"
                } text-white hover:text-gold-400 transition-colors z-20`}
                onClick={closeModal}
                aria-label="Close modal"
              >
                <X size={isMobile ? 28 : 32} />
              </button>

              {/* Zoom Controls (Mobile) */}
              {isMobile && imageScale > 1 && (
                <div className="absolute top-4 left-4 flex flex-col gap-2 z-20">
                  <button
                    className="bg-black/70 backdrop-blur-sm text-white p-2 rounded-full hover:bg-black/90 transition-colors"
                    onClick={handleZoomIn}
                    aria-label="Zoom in"
                  >
                    <ZoomIn size={16} />
                  </button>
                  <button
                    className="bg-black/70 backdrop-blur-sm text-white p-2 rounded-full hover:bg-black/90 transition-colors"
                    onClick={handleZoomOut}
                    aria-label="Zoom out"
                  >
                    <ZoomOut size={16} />
                  </button>
                  <button
                    className="bg-black/70 backdrop-blur-sm text-white p-2 rounded-full hover:bg-black/90 transition-colors"
                    onClick={handleResetZoom}
                    aria-label="Reset zoom"
                  >
                    <RotateCcw size={16} />
                  </button>
                </div>
              )}

              {/* Navigation Arrows (Desktop) */}
              {!isMobile && (
                <>
                  <button
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gold-400 transition-colors z-20 bg-black/50 rounded-full p-2"
                    onClick={() => navigateImage("prev")}
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={32} />
                  </button>
                  <button
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gold-400 transition-colors z-20 bg-black/50 rounded-full p-2"
                    onClick={() => navigateImage("next")}
                    aria-label="Next image"
                  >
                    <ChevronRight size={32} />
                  </button>
                </>
              )}

              {/* Mobile Navigation */}
              {isMobile && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                  <button
                    className="bg-black/70 backdrop-blur-sm text-white p-2 rounded-full hover:bg-black/90 transition-colors"
                    onClick={() => navigateImage("prev")}
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <div className="bg-black/70 backdrop-blur-sm text-white px-3 py-2 rounded-full text-xs">
                    {selectedIndex + 1} / {galleryImages.length}
                  </div>
                  <button
                    className="bg-black/70 backdrop-blur-sm text-white p-2 rounded-full hover:bg-black/90 transition-colors"
                    onClick={() => navigateImage("next")}
                    aria-label="Next image"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              )}

              {/* Image Container with Touch Controls */}
              <motion.div
                className={`relative overflow-hidden shadow-2xl ${
                  isMobile
                    ? "aspect-[3/4] rounded-lg"
                    : "aspect-square rounded-xl"
                }`}
                onTap={isMobile ? handleDoubleTap : undefined}
              >
                <motion.div
                  className="w-full h-full"
                  style={{
                    scale: imageScale,
                    x: imagePosition.x,
                    y: imagePosition.y,
                  }}
                  drag={imageScale > 1}
                  dragConstraints={containerRef}
                  dragElastic={0.1}
                  onPan={handlePan}
                  animate={{
                    scale: imageScale,
                    x: imagePosition.x,
                    y: imagePosition.y,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    fill
                    className="object-cover"
                    sizes={isMobile ? "90vw" : "90vw"}
                    quality={95}
                    priority
                    style={{
                      objectPosition: "center center",
                    }}
                  />
                </motion.div>

                {/* Touch Instructions */}
                {isMobile && imageScale === 1 && (
                  <motion.div
                    className="absolute top-4 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded text-xs"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{ delay: 2, duration: 1 }}
                  >
                    Double tap to zoom • Swipe to navigate
                  </motion.div>
                )}
              </motion.div>

              {/* Image Info */}
              <div
                className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent ${
                  isMobile ? "p-4 rounded-b-lg" : "p-6 rounded-b-xl"
                }`}
              >
                <h3
                  className={`text-white font-bold mb-2 ${
                    isMobile ? "text-lg" : "text-2xl"
                  }`}
                >
                  {selectedImage.title}
                </h3>
                <p
                  className={`text-gold-400 font-medium ${
                    isMobile ? "text-sm" : "text-lg"
                  }`}
                >
                  {selectedImage.category}
                </p>

                {/* Desktop Image Counter */}
                {!isMobile && (
                  <div className="text-gray-300 mt-2 text-sm">
                    {selectedIndex + 1} of {galleryImages.length}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
