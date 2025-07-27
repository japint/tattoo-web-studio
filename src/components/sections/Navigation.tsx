"use client";

import { useState } from "react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleBookNow = () => {
    closeMobileMenu();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <nav className="fixed top-0 w-full glass-effect z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-display font-bold accent-text glow-effect">
              INK REBELLION
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
              <a href="#gallery" className="nav-link">
                Gallery
              </a>
              <a href="#artists" className="nav-link">
                Artists
              </a>
              <a href="#services" className="nav-link">
                Services
              </a>
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              className="relative group text-white hover:text-gold-400 transition-all duration-300 p-2 rounded-lg hover:bg-gold-400/10 focus:outline-none focus:ring-2 focus:ring-gold-400/50"
              suppressHydrationWarning
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <div className="relative w-6 h-6">
                {/* Top line */}
                <span
                  className={`absolute top-1.5 left-0 h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen ? "rotate-45 top-2.5" : "rotate-0 top-1.5"
                  }`}
                />
                {/* Middle line */}
                <span
                  className={`absolute top-2.5 left-0 h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen
                      ? "opacity-0 scale-0"
                      : "opacity-100 scale-100"
                  }`}
                />
                {/* Bottom line */}
                <span
                  className={`absolute top-3.5 left-0 h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen ? "-rotate-45 top-2.5" : "rotate-0 top-3.5"
                  }`}
                />
              </div>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-lg bg-gold-400/0 group-hover:bg-gold-400/5 transition-all duration-300" />

              {/* Pulse effect when active */}
              {isMobileMenuOpen && (
                <div className="absolute inset-0 rounded-lg animate-pulse bg-gold-400/10" />
              )}
            </button>
          </div>
          <button
            className="btn-primary hidden md:block"
            suppressHydrationWarning
            onClick={handleBookNow}
          >
            Book Now
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          {/* Background Blur Layer */}
          <div className="fixed inset-0 z-40">
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="absolute inset-0 backdrop-blur-xl bg-black/60"></div>
          </div>

          {/* Enhanced Full Screen Mobile Menu */}
          <div className="fixed inset-0 z-50 flex flex-col animate-fade-in">
            {/* Header with close button */}
            <div className="flex justify-between items-center p-6 border-b border-gold-400/30 bg-black/60 backdrop-blur-sm">
              <h2 className="text-2xl font-display font-bold text-gradient glow-effect">
                NAVIGATION
              </h2>
              <button
                className="text-white hover:text-gold-400 transition-all duration-300 p-2 rounded-full hover:bg-gold-400/10"
                suppressHydrationWarning
                onClick={closeMobileMenu}
                aria-label="Close mobile menu"
              >
                <svg
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex-1 flex flex-col justify-center px-8 space-y-6 bg-black/70 backdrop-blur-sm">
              <a
                href="#home"
                className="group block text-white text-3xl font-bold hover:text-gold-400 transition-all duration-300 py-4 px-4 rounded-lg hover:bg-gold-400/10 border-l-4 border-transparent hover:border-gold-400"
                onClick={closeMobileMenu}
              >
                <span className="flex items-center justify-between">
                  Home
                  <svg
                    className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </a>
              <a
                href="#about"
                className="group block text-white text-3xl font-bold hover:text-gold-400 transition-all duration-300 py-4 px-4 rounded-lg hover:bg-gold-400/10 border-l-4 border-transparent hover:border-gold-400"
                onClick={closeMobileMenu}
              >
                <span className="flex items-center justify-between">
                  About
                  <svg
                    className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </a>
              <a
                href="#gallery"
                className="group block text-white text-3xl font-bold hover:text-gold-400 transition-all duration-300 py-4 px-4 rounded-lg hover:bg-gold-400/10 border-l-4 border-transparent hover:border-gold-400"
                onClick={closeMobileMenu}
              >
                <span className="flex items-center justify-between">
                  Gallery
                  <svg
                    className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </a>
              <a
                href="#artists"
                className="group block text-white text-3xl font-bold hover:text-gold-400 transition-all duration-300 py-4 px-4 rounded-lg hover:bg-gold-400/10 border-l-4 border-transparent hover:border-gold-400"
                onClick={closeMobileMenu}
              >
                <span className="flex items-center justify-between">
                  Artists
                  <svg
                    className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </a>
              <a
                href="#services"
                className="group block text-white text-3xl font-bold hover:text-gold-400 transition-all duration-300 py-4 px-4 rounded-lg hover:bg-gold-400/10 border-l-4 border-transparent hover:border-gold-400"
                onClick={closeMobileMenu}
              >
                <span className="flex items-center justify-between">
                  Services
                  <svg
                    className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </a>
              <a
                href="#contact"
                className="group block text-white text-3xl font-bold hover:text-gold-400 transition-all duration-300 py-4 px-4 rounded-lg hover:bg-gold-400/10 border-l-4 border-transparent hover:border-gold-400"
                onClick={closeMobileMenu}
              >
                <span className="flex items-center justify-between">
                  Contact
                  <svg
                    className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </a>
            </div>

            {/* Enhanced Book Now Button */}
            <div className="p-8 bg-black/60 backdrop-blur-sm">
              <button
                className="relative group btn-primary w-full text-xl py-6 rounded-xl font-bold shadow-2xl shadow-gold-400/20 hover:shadow-gold-400/40 transition-all duration-300 transform hover:scale-[1.02]"
                suppressHydrationWarning
                onClick={handleBookNow}
              >
                <span className="flex items-center justify-center space-x-3">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Book Now</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
