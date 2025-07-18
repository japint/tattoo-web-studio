export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Get in <span className="accent-text">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to start your tattoo journey? Contact us today to schedule
            your consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="glass-effect rounded-lg p-8">
              <h3 className="text-2xl font-bold accent-text mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gold-400 rounded-lg flex items-center justify-center">
                    <span className="text-black font-bold">📍</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Address</h4>
                    <p className="text-gray-400">
                      123 Art Street
                      <br />
                      Creative District, NY 10001
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gold-400 rounded-lg flex items-center justify-center">
                    <span className="text-black font-bold">📞</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Phone</h4>
                    <p className="text-gray-400">0954-048-9964</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gold-400 rounded-lg flex items-center justify-center">
                    <span className="text-black font-bold">✉️</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email</h4>
                    <p className="text-gray-400">lnpc.idealhubstd@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gold-400 rounded-lg flex items-center justify-center">
                    <span className="text-black font-bold">🕒</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Hours</h4>
                    <div className="text-gray-400 space-y-1">
                      <p>Tuesday - Friday: 11am - 8pm</p>
                      <p>Saturday: 10am - 6pm</p>
                      <p>Sunday - Monday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="glass-effect rounded-lg p-8">
              <h3 className="text-2xl font-bold accent-text mb-6">
                Send us a Message
              </h3>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:border-gold-400 focus:outline-none text-white"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:border-gold-400 focus:outline-none text-white"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:border-gold-400 focus:outline-none text-white"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:border-gold-400 focus:outline-none text-white"
                    placeholder="0954-048-9964"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Service Interest
                  </label>
                  <select
                    id="service"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:border-gold-400 focus:outline-none text-white"
                  >
                    <option value="">Select a service</option>
                    <option value="custom-tattoo">Custom Tattoo</option>
                    <option value="cover-up">Cover-up</option>
                    <option value="piercing">Piercing</option>
                    <option value="consultation">Consultation</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:border-gold-400 focus:outline-none text-white resize-none"
                    placeholder="Tell us about your tattoo ideas, preferred dates, or any questions you have..."
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
