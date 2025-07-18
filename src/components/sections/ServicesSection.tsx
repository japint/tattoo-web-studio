export default function ServicesSection() {
  const services = [
    {
      title: "Custom Tattoos",
      description:
        "Original artwork designed specifically for you by our talented artists.",
      price: "Starting at €150",
      features: [
        "Custom design consultation",
        "Multiple revision rounds",
        "High-quality inks",
        "Lifetime touch-ups",
      ],
    },
    {
      title: "Cover-ups",
      description:
        "Transform old tattoos into stunning new artwork with our cover-up specialists.",
      price: "Starting at €200",
      features: [
        "Design assessment",
        "Color matching",
        "Layering techniques",
        "Complete transformation",
      ],
    },
    {
      title: "Piercings",
      description:
        "Professional body piercing services with premium jewelry and sterile procedures.",
      price: "Starting at €40",
      features: [
        "Sterile environment",
        "Premium jewelry",
        "Aftercare guidance",
        "Wide variety of styles",
      ],
    },
    {
      title: "Tattoo Removal Consultation",
      description:
        "Expert consultation for tattoo removal options and laser treatment referrals.",
      price: "€50 consultation",
      features: [
        "Professional assessment",
        "Treatment options",
        "Laser referrals",
        "Healing guidance",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Our <span className="accent-text">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We offer a comprehensive range of professional tattoo and body art
            services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="glass-effect rounded-lg p-6 card-hover">
              <h3 className="text-xl font-bold accent-text mb-3">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                {service.description}
              </p>
              <div className="text-gold-400 font-semibold mb-4">
                {service.price}
              </div>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="text-gray-400 text-sm flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-gold-400 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="btn-secondary w-full">Learn More</button>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="glass-effect rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold accent-text mb-4">
              Book Your Consultation
            </h3>
            <p className="text-gray-300 mb-6">
              Ready to start your tattoo journey? Schedule a free consultation
              with one of our artists today.
            </p>
            <button className="btn-primary">Schedule Consultation</button>
          </div>
        </div>
      </div>
    </section>
  );
}
