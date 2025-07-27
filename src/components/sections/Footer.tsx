"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h3 className="text-xl font-bold accent-text mb-4">
              Ink Rebellion
            </h3>
            <p className="text-gray-400 mb-4">
              Premium tattoo studio creating exceptional art that tells your
              unique story.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/ideahubstudio/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gold-400 transition-colors"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gold-400 transition-colors"
              >
                <span className="sr-only">Instagram</span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.348-1.051-2.348-2.348 0-1.297 1.051-2.348 2.348-2.348 1.297 0 2.348 1.051 2.348 2.348 0 1.297-1.051 2.348-2.348 2.348zm7.718 0c-1.297 0-2.348-1.051-2.348-2.348 0-1.297 1.051-2.348 2.348-2.348 1.297 0 2.348 1.051 2.348 2.348 0 1.297-1.051 2.348-2.348 2.348z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-gold-400 transition-colors"
                >
                  Custom Tattoos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-gold-400 transition-colors"
                >
                  Cover-ups
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-gold-400 transition-colors"
                >
                  Piercings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-gold-400 transition-colors"
                >
                  Consultations
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-gold-400 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="text-gray-400 hover:text-gold-400 transition-colors"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#artists"
                  className="text-gray-400 hover:text-gold-400 transition-colors"
                >
                  Artists
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-gold-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Contact Info
            </h4>
            <div className="space-y-2 text-gray-400">
              <p>📍 123 Art Street, Creative District</p>
              <p>📞 0954-048-9964</p>
              <p>✉️ lnpc.idealhubstd@gmail.com</p>
              <p>🕒 Tue-Sat: 11am-8pm</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="border-t border-gray-800 mt-12 pt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-gray-400">
            © 2025 Ink Rebellion Tattoo Studio. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
