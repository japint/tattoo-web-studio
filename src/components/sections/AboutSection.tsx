"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  const achievements = [
    { number: "10+", label: "Years Experience", icon: "🏆" },
    { number: "500+", label: "Happy Clients", icon: "👥" },
    { number: "1000+", label: "Tattoos Created", icon: "🎨" },
    { number: "50+", label: "Awards Won", icon: "🥇" },
  ];

  const values = [
    {
      title: "Artistry Excellence",
      description:
        "Every tattoo is crafted with meticulous attention to detail and artistic vision.",
      icon: "🎯",
    },
    {
      title: "Safety First",
      description:
        "We maintain the highest standards of hygiene and safety protocols.",
      icon: "🛡️",
    },
    {
      title: "Custom Designs",
      description:
        "Each piece is uniquely designed to reflect your personal story and style.",
      icon: "✨",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-tattoo-pattern opacity-5"></div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-gold-400 rounded-full opacity-20 animate-float"></div>
      <div
        className="absolute bottom-20 right-10 w-16 h-16 border border-gold-400 rounded-full opacity-20 animate-float"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title mb-6">
            <span className="accent-text">About</span> Our Studio
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Welcome to Ink Rebellion, where passion meets precision. We are a
            premium tattoo studio dedicated to creating exceptional art that
            tells your unique story through ink.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <motion.div 
          className="grid lg:grid-cols-2 gap-16 items-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-3xl font-bold accent-text mb-6">
              Our Philosophy
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed text-lg">
              At Ink Rebellion, we believe that every tattoo should be a
              masterpiece. Our experienced artists work closely with each client
              to create custom designs that reflect their personality, vision,
              and life journey.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Founded with a commitment to excellence, we combine traditional
              tattooing techniques with modern artistry to deliver results that
              exceed expectations. Every piece we create is a collaboration
              between artist and client.
            </p>

            {/* Core Values */}
            <div className="space-y-4">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 glass-effect rounded-lg card-hover"
                >
                  <div className="text-2xl">{value.icon}</div>
                  <div>
                    <h4 className="font-semibold text-gold-400 mb-1">
                      {value.title}
                    </h4>
                    <p className="text-gray-300 text-sm">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image Side */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="h-[500px] rounded-lg overflow-hidden card-hover relative group">
              <Image
                src="/images/img7.jpg"
                alt="Ink Rebellion Tattoo Studio Interior"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={85}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h4 className="text-white font-bold text-2xl mb-2 glow-effect">
                  Our Studio Space
                </h4>
                <p className="text-gray-200 mb-4">
                  Professional, sterile, and welcoming environment designed for
                  comfort and creativity
                </p>
                <button className="btn-secondary" suppressHydrationWarning>
                  Take Virtual Tour
                </button>
              </div>
            </div>

            {/* Decorative badge */}
            <div className="absolute -top-6 -right-6 bg-gold-400 text-black px-6 py-3 rounded-full font-bold transform rotate-12 shadow-lg">
              Premium Studio
            </div>
          </motion.div>
        </motion.div>

        {/* Statistics Section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="text-center p-6 glass-effect rounded-lg card-hover group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
            >
              <div className="text-4xl mb-3 group-hover:animate-bounce">
                {achievement.icon}
              </div>
              <h4 className="text-3xl font-bold accent-text mb-2 glow-effect">
                {achievement.number}
              </h4>
              <p className="text-gray-400 text-sm font-medium">
                {achievement.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold accent-text mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-gray-300 mb-6 text-lg">
              Book a consultation with our master artists and let&apos;s bring
              your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary" suppressHydrationWarning>
                Schedule Consultation
              </button>
              <button className="btn-secondary" suppressHydrationWarning>
                View Our Process
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
