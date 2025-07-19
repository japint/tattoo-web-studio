import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Hero Background with Video and Image Fallback */}
      <div className="absolute inset-0">
        {/* Fallback Image - displays behind video */}
        <Image
          src="/images/img6.jpg"
          alt="Tattoo Studio Hero Background"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={85}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyejFhVvhCnO3mtuNLvtVYYmEd1dO2GQWEX5UmlYtimJhRH4uBGPhUm3oN/wA/eQQ4AJbXhxsWJPBNLJMENGaXFIDQE6AO02U8SIgWFGDN5eqCKrb5HjXgvf4qK/+CL/D"
        />

        {/* Video overlay - displays on top of image when supported */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => {
            // Hide video if it fails to load, showing the fallback image
            e.currentTarget.style.display = "none";
          }}
        >
          <source src="/images/video3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
      <div className="absolute inset-0 bg-tattoo-pattern opacity-20"></div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 text-shadow-lg">
          <span className="text-gradient animate-glow">INK REBELLION</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto text-shadow animate-slide-up">
          Premium Tattoo Studio • Custom Designs • Professional Artists
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
          <button className="btn-primary" suppressHydrationWarning>
            Book Appointment
          </button>
          <button className="btn-secondary" suppressHydrationWarning>
            View Gallery
          </button>
        </div>
      </div>

      {/* Enhanced Floating elements */}
      <div className="absolute top-20 left-10 w-16 h-16 border-2 border-gold-400 rotate-45 animate-float opacity-60 glow-effect"></div>
      <div className="absolute bottom-20 right-10 w-20 h-20 border-2 border-tattoo-500 rotate-12 animate-bounce opacity-50 glow-effect"></div>
      <div className="absolute top-1/3 right-1/4 w-12 h-12 border-2 border-red-500 rounded-full animate-pulse opacity-40"></div>
      <div className="absolute bottom-1/3 left-1/4 w-8 h-8 bg-gold-400 rounded-full animate-ping opacity-30"></div>
    </section>
  );
}
