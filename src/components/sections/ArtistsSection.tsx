import Image from "next/image";

export default function ArtistsSection() {
  const artists = [
    {
      name: "Marcus Steel",
      specialty: "Traditional & Neo-Traditional",
      experience: "12 years",
      image: "/images/img3.jpg",
      description:
        "Master of bold lines and vibrant colors with a focus on traditional American tattoo art.",
    },
    {
      name: "Luna Blackwood",
      specialty: "Realistic Portraits",
      experience: "8 years",
      image: "/images/img4.jpg",
      description:
        "Specializes in photorealistic portraits and fine detail work with exceptional precision.",
    },
    {
      name: "Alex Rivera",
      specialty: "Geometric & Abstract",
      experience: "6 years",
      image: "/images/img5.jpg",
      description:
        "Creates stunning geometric patterns and abstract designs with mathematical precision.",
    },
  ];

  return (
    <section id="artists" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Meet Our <span className="accent-text">Artists</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our talented team of artists brings years of experience and unique
            styles to create your perfect tattoo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {artists.map((artist, index) => (
            <div
              key={index}
              className="glass-effect rounded-lg overflow-hidden card-hover"
            >
              <div className="h-64 overflow-hidden relative">
                <Image
                  src={artist.image}
                  alt={artist.name}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  quality={85}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold accent-text mb-2">
                  {artist.name}
                </h3>
                <p className="text-gold-400 font-semibold mb-1">
                  {artist.specialty}
                </p>
                <p className="text-sm text-gray-400 mb-3">
                  {artist.experience} of experience
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {artist.description}
                </p>
                <button className="btn-secondary mt-4 w-full">
                  View Portfolio
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
