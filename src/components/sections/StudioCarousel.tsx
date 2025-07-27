"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface StudioImage {
  src: string;
  alt: string;
  title: string;
  description: string;
}

export default function StudioCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const studioImages: StudioImage[] = [
    {
      src: "/images/studio1.jpg",
      alt: "Main tattoo studio workspace",
      title: "Main Studio",
      description:
        "Our primary workspace equipped with state-of-the-art tattoo stations",
    },
    {
      src: "/images/studio2.jpg",
      alt: "Private tattoo room",
      title: "Private Room",
      description: "Intimate space for detailed work and client consultations",
    },
    {
      src: "/images/studio3.jpg",
      alt: "Consultation area",
      title: "Consultation Area",
      description: "Comfortable space for design discussions and planning",
    },
    {
      src: "/images/studio4.jpg",
      alt: "Equipment and supplies",
      title: "Professional Equipment",
      description: "Top-quality tools and sterile environment for your safety",
    },
    {
      src: "/images/studio5.jpg",
      alt: "Reception and waiting area",
      title: "Reception Area",
      description: "Welcoming space where your tattoo journey begins",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title mb-4">
            Our <span className="accent-text">Studio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Step inside our professional tattoo studio. Explore our clean,
            modern workspace designed for creativity, comfort, and the highest
            standards of hygiene and safety.
          </p>
        </motion.div>

        {/* Studio Carousel */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: ".studio-prev",
              nextEl: ".studio-next",
            }}
            pagination={{
              el: ".studio-pagination",
              clickable: true,
              bulletClass: "studio-bullet",
              bulletActiveClass: "studio-bullet-active",
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
            className="studio-swiper"
          >
            {studioImages.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  {/* Image */}
                  <div className="relative w-full h-full">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                      quality={90}
                    />
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      {image.title}
                    </h3>
                    <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                      {image.description}
                    </p>
                  </div>

                  {/* Hover Border */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold-400/60 rounded-2xl transition-all duration-300" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Arrows */}
          <button
            className="studio-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:text-gold-400 transition-all duration-300 group"
            suppressHydrationWarning
          >
            <ChevronLeft
              size={24}
              className="transition-transform group-hover:scale-110"
            />
          </button>

          <button
            className="studio-next absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:text-gold-400 transition-all duration-300 group"
            suppressHydrationWarning
          >
            <ChevronRight
              size={24}
              className="transition-transform group-hover:scale-110"
            />
          </button>

          {/* Custom Pagination */}
          <div className="studio-pagination flex justify-center mt-8 space-x-2"></div>
        </motion.div>

        {/* Current Slide Info */}
        <motion.div
          className="text-center mt-12 max-w-2xl mx-auto"
          key={currentSlide}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-white mb-3">
            {studioImages[currentSlide]?.title}
          </h3>
          <p className="text-gray-300 text-lg">
            {studioImages[currentSlide]?.description}
          </p>
        </motion.div>

        {/* Visit Studio CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <button className="btn-primary group" suppressHydrationWarning>
            <span>Schedule Studio Visit</span>
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

      {/* Custom Swiper Styles */}
      <style jsx global>{`
        .studio-swiper {
          padding-bottom: 50px;
        }

        .studio-bullet {
          width: 12px;
          height: 12px;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s ease;
          opacity: 1;
        }

        .studio-bullet:hover {
          background: rgba(212, 175, 55, 0.7);
          transform: scale(1.2);
        }

        .studio-bullet-active {
          background: #d4af37;
          transform: scale(1.3);
          box-shadow: 0 0 10px rgba(212, 175, 55, 0.5);
        }

        .studio-swiper .swiper-slide {
          transition: all 0.3s ease;
        }

        .studio-swiper .swiper-slide:not(.swiper-slide-active) {
          opacity: 0.7;
          transform: scale(0.95);
        }

        .studio-swiper .swiper-slide-active {
          opacity: 1;
          transform: scale(1);
        }
      `}</style>
    </section>
  );
}
