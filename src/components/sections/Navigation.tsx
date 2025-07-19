export default function Navigation() {
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
            <button
              className="text-white hover:text-gold-400 transition-colors"
              suppressHydrationWarning
            >
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
          <button
            className="btn-primary hidden md:block"
            suppressHydrationWarning
          >
            Book Now
          </button>
        </div>
      </div>
    </nav>
  );
}
