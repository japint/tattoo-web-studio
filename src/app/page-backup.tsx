import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full glass-effect z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-display font-bold accent-text glow-effect">
                GLORIOUS ART
              </h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="nav-link">
                  Home
                </a>
                <a href="#about" className="nav-link">
                  About
                </a>
                <a href="#services" className="nav-link">
                  Services
                </a>
                <a href="#gallery" className="nav-link">
                  Gallery
                </a>
                <a href="#artists" className="nav-link">
                  Artists
                </a>
                <a href="#contact" className="nav-link">
                  Contact
                </a>
              </div>
            </div>
            <div className="md:hidden">
              <button className="text-white hover:text-gold-400 transition-colors">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/img6.jpg"
            alt="Tattoo Studio Hero Background"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        <div className="absolute inset-0 bg-tattoo-pattern opacity-20"></div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 text-shadow-lg">
            <span className="text-gradient animate-glow">GLORIOUS ART</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto text-shadow animate-slide-up">
            Premium Tattoo Studio • Custom Designs • Professional Artists
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <button className="btn-primary">Book Appointment</button>
            <button className="btn-secondary">View Gallery</button>
          </div>
        </div>

        {/* Enhanced Floating elements */}
        <div className="absolute top-20 left-10 w-16 h-16 border-2 border-gold-400 rotate-45 animate-float opacity-60 glow-effect"></div>
        <div className="absolute bottom-20 right-10 w-20 h-20 border-2 border-tattoo-500 rotate-12 animate-bounce opacity-50 glow-effect"></div>
        <div className="absolute top-1/3 right-1/4 w-12 h-12 border-2 border-red-500 rounded-full animate-pulse opacity-40"></div>
        <div className="absolute bottom-1/3 left-1/4 w-8 h-8 bg-gold-400 rounded-full animate-ping opacity-30"></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900 relative">
        <div className="absolute inset-0 bg-tattoo-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="section-title">
              <span className="accent-text">About</span> Our Studio
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We are a premium tattoo studio dedicated to creating exceptional
              art that tells your unique story.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <h3 className="text-2xl font-bold accent-text mb-4">
                Our Philosophy
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                At Glorious Art, we believe that every tattoo should be a
                masterpiece. Our experienced artists work closely with each
                client to create custom designs that reflect their personality
                and vision.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-effect p-4 rounded-lg card-hover">
                  <h4 className="accent-text font-semibold mb-2">10+ Years</h4>
                  <p className="text-sm text-gray-400">Experience</p>
                </div>
                <div className="glass-effect p-4 rounded-lg card-hover">
                  <h4 className="accent-text font-semibold mb-2">500+</h4>
                  <p className="text-sm text-gray-400">Happy Clients</p>
                </div>
              </div>
            </div>
            <div className="h-96 rounded-lg overflow-hidden card-hover animate-on-scroll relative">
              <img
                src="/images/img7.jpg"
                alt="Glorious Art Tattoo Studio Interior"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end">
                <div className="p-6">
                  <h4 className="text-white font-semibold text-lg mb-1">
                    Our Studio
                  </h4>
                  <p className="text-gray-200 text-sm">
                    Professional, clean, and welcoming environment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-black relative">
        <div className="absolute inset-0 bg-gradient-radial from-gray-900 via-black to-black"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="section-title">
              <span className="accent-text">Gallery</span>
            </h2>
            <p className="text-xl text-gray-300">
              Explore our latest masterpieces
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[0, 1, 2, 3, 4, 5, 6, 7].map((item) => (
              <div key={item} className="border border-gray-500 p-4">
                <h3 className="text-lg mb-2 text-white">Image {item}</h3>
                <img
                  src={`/images/img${item}.jpg`}
                  alt={`Test image ${item}`}
                  className="w-full h-48 object-cover bg-gray-800"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Artists Section */}
      <section id="artists" className="py-20 bg-gray-900 relative">
        <div className="absolute inset-0 bg-tattoo-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="section-title">
              Our <span className="accent-text">Artists</span>
            </h2>
            <p className="text-xl text-gray-300">
              Meet the talented team behind the art
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Rodriguez",
                specialty: "Realistic Portraits",
                experience: "8 years",
                image: "/images/img3.jpg",
              },
              {
                name: "Sarah Chen",
                specialty: "Traditional & Neo-Traditional",
                experience: "6 years",
                image: "/images/img4.jpg",
              },
              {
                name: "Mike Thompson",
                specialty: "Geometric & Abstract",
                experience: "10 years",
                image: "/images/img5.jpg",
              },
            ].map((artist, index) => (
              <div
                key={index}
                className="glass-effect rounded-lg p-6 text-center card-hover animate-on-scroll"
              >
                <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden glow-effect relative">
                  <img
                    src={artist.image}
                    alt={`${artist.name} - Tattoo Artist`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold accent-text mb-2">
                  {artist.name}
                </h3>
                <p className="text-gray-300 mb-2">{artist.specialty}</p>
                <p className="text-sm text-gray-400">
                  {artist.experience} experience
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Studio Tour Section */}
      <section className="py-20 bg-gray-900 relative">
        <div className="absolute inset-0 bg-tattoo-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="section-title">
              <span className="accent-text">Studio</span> Tour
            </h2>
            <p className="text-xl text-gray-300">
              Experience our premium, sterile environment
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-on-scroll">
              <h3 className="text-2xl font-bold accent-text mb-6">
                State-of-the-Art Facility
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-gold-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-black text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      Medical-Grade Sterilization
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Autoclave sterilization and single-use needles for every
                      session
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-gold-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-black text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      Private Consultation Rooms
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Comfortable, private spaces for design discussions
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-gold-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-black text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      Premium Equipment
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Latest tattoo machines and high-quality inks
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-gold-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-black text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      Comfortable Environment
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Relaxing atmosphere with music and refreshments
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 animate-on-scroll">
              <div className="aspect-square rounded-lg overflow-hidden card-hover relative">
                <img
                  src="/images/img8.jpg"
                  alt="Studio Interior"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                  <p className="text-white text-sm p-3 font-semibold">
                    Studio Interior
                  </p>
                </div>
              </div>
              <div className="aspect-square rounded-lg overflow-hidden card-hover relative">
                <img
                  src="/images/img9.jpg"
                  alt="Tattoo Stations"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                  <p className="text-white text-sm p-3 font-semibold">
                    Tattoo Stations
                  </p>
                </div>
              </div>
              <div className="aspect-square rounded-lg overflow-hidden card-hover relative">
                <img
                  src="/images/img1.jpg"
                  alt="Sterilization Area"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                  <p className="text-white text-sm p-3 font-semibold">
                    Sterilization Area
                  </p>
                </div>
              </div>
              <div className="aspect-square rounded-lg overflow-hidden card-hover relative">
                <img
                  src="/images/img2.jpg"
                  alt="Waiting Lounge"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                  <p className="text-white text-sm p-3 font-semibold">
                    Waiting Lounge
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-black relative">
        <div className="absolute inset-0 bg-tattoo-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="section-title">
              Our <span className="accent-text">Services</span>
            </h2>
            <p className="text-xl text-gray-300">
              Professional tattoo services tailored to your vision
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🎨",
                title: "Custom Tattoo Design",
                description:
                  "Unique, personalized designs created specifically for you by our talented artists.",
                price: "Starting at $150",
              },
              {
                icon: "🖋️",
                title: "Traditional Tattoos",
                description:
                  "Classic American traditional style with bold lines and vibrant colors.",
                price: "Starting at $120",
              },
              {
                icon: "🌸",
                title: "Realistic Portraits",
                description:
                  "Photorealistic portraits and detailed artwork with incredible precision.",
                price: "Starting at $200",
              },
              {
                icon: "📐",
                title: "Geometric Designs",
                description:
                  "Modern geometric patterns and sacred geometry with perfect symmetry.",
                price: "Starting at $100",
              },
              {
                icon: "🌿",
                title: "Botanical & Nature",
                description:
                  "Beautiful flora, fauna, and nature-inspired artwork.",
                price: "Starting at $130",
              },
              {
                icon: "⚡",
                title: "Cover-Up Tattoos",
                description: "Transform old tattoos into stunning new artwork.",
                price: "Consultation Required",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="glass-effect rounded-lg p-6 text-center card-hover animate-on-scroll"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold accent-text mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="accent-text font-semibold">{service.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-900 relative">
        <div className="absolute inset-0 bg-gradient-radial from-gray-800 via-gray-900 to-black opacity-80"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="section-title">
              Our <span className="accent-text">Process</span>
            </h2>
            <p className="text-xl text-gray-300">
              From consultation to completion
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description:
                  "We discuss your vision, placement, and design preferences in detail.",
              },
              {
                step: "02",
                title: "Design Creation",
                description:
                  "Our artists create a custom design based on your consultation.",
              },
              {
                step: "03",
                title: "Approval & Booking",
                description:
                  "Review the design, make adjustments, and book your appointment.",
              },
              {
                step: "04",
                title: "Tattoo Session",
                description:
                  "Professional tattooing in our sterile, comfortable environment.",
              },
            ].map((process, index) => (
              <div key={index} className="text-center animate-on-scroll">
                <div className="w-16 h-16 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold text-lg">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold accent-text mb-3">
                  {process.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-black relative">
        <div className="absolute inset-0 bg-tattoo-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="section-title">
              Client <span className="accent-text">Testimonials</span>
            </h2>
            <p className="text-xl text-gray-300">
              What our clients say about us
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                rating: 5,
                text: "Absolutely incredible work! Alex created the most beautiful realistic portrait of my daughter. The attention to detail is mind-blowing.",
                tattoo: "Realistic Portrait",
              },
              {
                name: "Mike Rodriguez",
                rating: 5,
                text: "The geometric sleeve Sarah designed for me is pure art. Every line is perfect, and the symmetry is flawless. Best decision ever!",
                tattoo: "Geometric Sleeve",
              },
              {
                name: "Emma Thompson",
                rating: 5,
                text: "Mike transformed my old tattoo into something amazing. The cover-up work exceeded all my expectations. Highly recommend!",
                tattoo: "Cover-up Work",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="glass-effect rounded-lg p-6 card-hover animate-on-scroll"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mr-4">
                    <span className="text-lg">👤</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">
                      {testimonial.name}
                    </h4>
                    <div className="flex text-gold-400">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i}>⭐</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 mb-4 italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="text-sm accent-text">
                  Tattoo: {testimonial.tattoo}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-900 relative">
        <div className="absolute inset-0 bg-gradient-conic from-gray-800 via-gray-900 to-gray-800 opacity-60"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="section-title">
              Frequently Asked <span className="accent-text">Questions</span>
            </h2>
            <p className="text-xl text-gray-300">Everything you need to know</p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How much does a tattoo cost?",
                answer:
                  "Tattoo pricing depends on size, complexity, and placement. We offer consultations to provide accurate quotes. Our minimum is $80, with most pieces ranging from $150-$500.",
              },
              {
                question: "How do I prepare for my tattoo appointment?",
                answer:
                  "Get a good night's sleep, eat a proper meal, stay hydrated, and avoid alcohol 24 hours before. Wear comfortable clothing that allows easy access to the tattoo area.",
              },
              {
                question: "How long does the healing process take?",
                answer:
                  "Initial healing takes 2-3 weeks, with complete healing taking 4-6 weeks. We provide detailed aftercare instructions to ensure optimal healing.",
              },
              {
                question: "Can I bring my own design?",
                answer:
                  "Absolutely! We love working with client ideas. Our artists can also modify or enhance your design to work better as a tattoo.",
              },
              {
                question: "Do you offer touch-ups?",
                answer:
                  "Yes, we offer free touch-ups within the first 6 months if needed. Proper aftercare is essential for the best healing results.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="glass-effect rounded-lg p-6 card-hover animate-on-scroll"
              >
                <h3 className="text-lg font-bold accent-text mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aftercare Section */}
      <section className="py-20 bg-black relative">
        <div className="absolute inset-0 bg-gradient-radial from-gray-900 via-black to-black opacity-80"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="section-title">
              Tattoo <span className="accent-text">Aftercare</span>
            </h2>
            <p className="text-xl text-gray-300">
              Essential care for optimal healing and longevity
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="animate-on-scroll">
              <div className="glass-effect rounded-lg p-8">
                <h3 className="text-2xl font-bold accent-text mb-6">
                  Immediate Care (First 24-48 Hours)
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-black text-sm font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">
                        Keep bandage on for 2-4 hours
                      </h4>
                      <p className="text-gray-300 text-sm">
                        Remove the initial bandage after the recommended time
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-black text-sm font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">
                        Wash gently with antibacterial soap
                      </h4>
                      <p className="text-gray-300 text-sm">
                        Use lukewarm water and fragrance-free soap
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-black text-sm font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">
                        Pat dry with clean paper towel
                      </h4>
                      <p className="text-gray-300 text-sm">
                        Never rub or use cloth towels
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-black text-sm font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">
                        Apply thin layer of aftercare ointment
                      </h4>
                      <p className="text-gray-300 text-sm">
                        Use recommended healing products only
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8 animate-on-scroll">
              <div className="glass-effect rounded-lg p-6">
                <h3 className="text-xl font-bold accent-text mb-4">
                  Healing Timeline
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-white">Week 1-2</span>
                    <span className="text-gray-300 text-sm">
                      Peeling & flaking
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white">Week 2-3</span>
                    <span className="text-gray-300 text-sm">Itching phase</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white">Week 3-4</span>
                    <span className="text-gray-300 text-sm">
                      Surface healing
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white">Month 2-3</span>
                    <span className="text-gray-300 text-sm">
                      Complete healing
                    </span>
                  </div>
                </div>
              </div>

              <div className="glass-effect rounded-lg p-6">
                <h3 className="text-xl font-bold text-red-400 mb-4">
                  ❌ What to Avoid
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <span className="text-red-400 mr-2">•</span>Swimming or
                    soaking
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-400 mr-2">•</span>Direct sunlight
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-400 mr-2">•</span>Picking or
                    scratching
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-400 mr-2">•</span>Tight clothing
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-400 mr-2">•</span>Gym or heavy
                    exercise
                  </li>
                </ul>
              </div>

              <div className="glass-effect rounded-lg p-6">
                <h3 className="text-xl font-bold text-green-400 mb-4">
                  ✅ Recommended Products
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">•</span>Aquaphor
                    Healing Ointment
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">•</span>Cetaphil
                    Gentle Cleanser
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">•</span>Fragrance-free
                    lotion
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">•</span>SPF 30+
                    sunscreen (after healing)
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center animate-on-scroll">
            <div className="glass-effect rounded-lg p-6 max-w-2xl mx-auto">
              <h3 className="text-xl font-bold accent-text mb-3">
                24/7 Aftercare Support
              </h3>
              <p className="text-gray-300 mb-4">
                Questions about your healing? We&apos;re here to help! Contact
                us anytime during your healing process.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+15551234567"
                  className="btn-secondary text-center"
                >
                  📞 Emergency Hotline
                </a>
                <a
                  href="mailto:aftercare@glorious-art.com"
                  className="btn-primary text-center"
                >
                  📧 Email Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black relative">
        <div className="absolute inset-0 bg-gradient-conic from-gray-900 via-black to-gray-900 opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="section-title">
              <span className="accent-text">Contact</span> Us
            </h2>
            <p className="text-xl text-gray-300">
              Ready to start your tattoo journey?
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-on-scroll">
              <h3 className="text-2xl font-bold accent-text mb-6">
                Get In Touch
              </h3>
              <div className="space-y-4">
                <div className="flex items-center group">
                  <span className="accent-text mr-3 text-xl group-hover:scale-110 transition-transform">
                    📍
                  </span>
                  <span className="text-gray-300">
                    123 Art Street, Creative District, City 12345
                  </span>
                </div>
                <div className="flex items-center group">
                  <span className="accent-text mr-3 text-xl group-hover:scale-110 transition-transform">
                    📞
                  </span>
                  <span className="text-gray-300">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center group">
                  <span className="accent-text mr-3 text-xl group-hover:scale-110 transition-transform">
                    📧
                  </span>
                  <span className="text-gray-300">info@glorious-art.com</span>
                </div>
                <div className="flex items-center group">
                  <span className="accent-text mr-3 text-xl group-hover:scale-110 transition-transform">
                    🕒
                  </span>
                  <span className="text-gray-300">
                    Mon-Sat: 10AM-8PM, Sun: 12PM-6PM
                  </span>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold accent-text mb-4">
                  Follow Us
                </h4>
                <div className="flex space-x-4">
                  <div className="social-icon">
                    <span>📘</span>
                  </div>
                  <div className="social-icon">
                    <span>📷</span>
                  </div>
                  <div className="social-icon">
                    <span>🐦</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-effect p-6 rounded-lg animate-on-scroll">
              <h3 className="text-xl font-bold accent-text mb-4">
                Book Consultation
              </h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="form-input"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="form-input"
                  />
                </div>
                <div>
                  <select className="form-input">
                    <option>Select Tattoo Style</option>
                    <option>Realistic</option>
                    <option>Traditional</option>
                    <option>Geometric</option>
                    <option>Abstract</option>
                  </select>
                </div>
                <div>
                  <textarea
                    placeholder="Describe your tattoo idea..."
                    rows={4}
                    className="form-input"
                  ></textarea>
                </div>
                <button className="btn-primary w-full">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gold-900 via-gold-800 to-gold-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-gold-400 rotate-45 animate-float opacity-20"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border-4 border-gold-300 rotate-12 animate-pulse opacity-30"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Create Your{" "}
            <span className="text-gold-200">Masterpiece?</span>
          </h2>
          <p className="text-xl text-gold-100 mb-8 max-w-2xl mx-auto">
            Book your consultation today and let our expert artists bring your
            vision to life with exceptional artistry and professionalism.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-white text-gold-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gold-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Book Free Consultation
            </button>
            <div className="flex items-center text-gold-200">
              <span className="text-2xl mr-2">📞</span>
              <span className="text-lg font-semibold">
                Call: (555) 123-4567
              </span>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="glass-effect p-4 rounded-lg">
              <div className="text-3xl mb-2">🏆</div>
              <div className="text-gold-200 font-semibold">Award Winning</div>
              <div className="text-gold-300 text-sm">
                Studio of the Year 2024
              </div>
            </div>
            <div className="glass-effect p-4 rounded-lg">
              <div className="text-3xl mb-2">✨</div>
              <div className="text-gold-200 font-semibold">10+ Years</div>
              <div className="text-gold-300 text-sm">
                Professional Experience
              </div>
            </div>
            <div className="glass-effect p-4 rounded-lg">
              <div className="text-3xl mb-2">🛡️</div>
              <div className="text-gold-200 font-semibold">
                Licensed & Insured
              </div>
              <div className="text-gold-300 text-sm">
                Health Certified Studio
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Studio Info */}
            <div className="col-span-2">
              <h3 className="text-xl font-bold accent-text mb-4">
                GLORIOUS ART
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Premium tattoo studio dedicated to creating exceptional art that
                tells your unique story. Our experienced artists combine
                traditional techniques with modern innovation.
              </p>
              <div className="flex space-x-4">
                <div className="social-icon">
                  <span>📘</span>
                </div>
                <div className="social-icon">
                  <span>📷</span>
                </div>
                <div className="social-icon">
                  <span>🐦</span>
                </div>
                <div className="social-icon">
                  <span>📺</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold accent-text mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#home"
                    className="text-gray-300 hover:text-gold-400 transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-gray-300 hover:text-gold-400 transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-gray-300 hover:text-gold-400 transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#gallery"
                    className="text-gray-300 hover:text-gold-400 transition-colors"
                  >
                    Gallery
                  </a>
                </li>
                <li>
                  <a
                    href="#artists"
                    className="text-gray-300 hover:text-gold-400 transition-colors"
                  >
                    Artists
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-300 hover:text-gold-400 transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold accent-text mb-4">
                Contact Info
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="accent-text mr-2">📍</span>
                  <span className="text-gray-300 text-sm">
                    123 Art Street
                    <br />
                    Creative District
                    <br />
                    City, State 12345
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="accent-text mr-2">📞</span>
                  <span className="text-gray-300 text-sm">(555) 123-4567</span>
                </li>
                <li className="flex items-center">
                  <span className="accent-text mr-2">📧</span>
                  <span className="text-gray-300 text-sm">
                    info@glorious-art.com
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="accent-text mr-2">🕒</span>
                  <span className="text-gray-300 text-sm">
                    Mon-Sat: 10AM-8PM
                    <br />
                    Sun: 12PM-6PM
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; 2025 Glorious Art Tattoo Studio. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-gold-400 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gold-400 transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gold-400 transition-colors"
              >
                Health & Safety
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
