import Image from "next/image";

export default function GallerySection() {
  const galleryImages = [
    { src: "/images/img0.jpg", alt: "Traditional tattoo artwork" },
    { src: "/images/img1.jpg", alt: "Realistic portrait tattoo" },
    { src: "/images/img2.jpg", alt: "Geometric design tattoo" },
    { src: "/images/img3.jpg", alt: "Watercolor style tattoo" },
    { src: "/images/img4.jpg", alt: "Black and grey tattoo" },
    { src: "/images/img5.jpg", alt: "Dotwork tattoo design" },
    { src: "/images/img7.jpg", alt: "Custom tattoo artwork" },
    { src: "/images/img8.jpg", alt: "Tribal style tattoo" },
  ];

  return (
    <section id="gallery" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">
            <span className="accent-text">Gallery</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our finest work and get inspired for your next tattoo.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square rounded-lg overflow-hidden card-hover"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 hover:scale-110"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                quality={85}
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-primary">View More Work</button>
        </div>
      </div>
    </section>
  );
}
