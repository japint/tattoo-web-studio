"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  X,
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  MessageSquare,
} from "lucide-react";

export default function HeroSection() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Handle booking appointment
  const handleBookAppointment = () => {
    // Option 1: Open booking modal
    setIsBookingModalOpen(true);

    // Option 2: Scroll to contact section (as fallback)
    // scrollToSection("contact");

    // Option 3: Open external booking link (uncomment if you have a booking system)
    // window.open("https://your-booking-system.com", "_blank");
  };

  // Handle view gallery
  const handleViewGallery = () => {
    scrollToSection("gallery");
  };

  // Close booking modal
  const closeBookingModal = () => {
    setIsBookingModalOpen(false);
  };

  // Handle form submission
  const handleBookingSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    // Get form values
    const bookingData = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      date: formData.get("date"),
      time: formData.get("time"),
      description: formData.get("description"),
    };

    // Here you can handle the booking data:
    // 1. Send to your booking API
    // 2. Send email via EmailJS
    // 3. Store in database
    // 4. Show success message

    console.log("Booking Data:", bookingData);

    // Show success message (you can implement a toast notification)
    alert(
      "Thank you! Your booking request has been submitted. We will contact you shortly to confirm your appointment."
    );

    // Close modal
    closeBookingModal();
  };
  return (
    <section
      id="home"
      className="scroll-snap-section relative h-screen flex items-center justify-center overflow-hidden"
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

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <motion.h1
          className="text-5xl md:text-7xl font-display font-bold mb-6 text-shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
        >
          <span className="text-gradient animate-glow">INK REBELLION</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto text-shadow"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
        >
          Premium Tattoo Studio • Custom Designs • Professional Artists
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          <motion.button
            className="btn-primary group relative overflow-hidden"
            onClick={handleBookAppointment}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            suppressHydrationWarning
          >
            <span className="relative z-10 flex items-center justify-center space-x-2">
              <Calendar size={20} />
              <span>Book Appointment</span>
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-gold-600 to-gold-400"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          <motion.button
            className="btn-secondary group relative overflow-hidden"
            onClick={handleViewGallery}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            suppressHydrationWarning
          >
            <span className="relative z-10 flex items-center justify-center space-x-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span>View Gallery</span>
            </span>
            <motion.div
              className="absolute inset-0 bg-white/10"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>
      </div>

      {/* Enhanced Floating elements with motion */}
      <motion.div
        className="absolute top-20 left-10 w-16 h-16 border-2 border-gold-400 rotate-45 opacity-60 glow-effect"
        initial={{ opacity: 0, scale: 0, y: 0, rotate: 45 }}
        animate={{
          opacity: 0.6,
          scale: 1,
          y: [0, -10, 0],
          rotate: [45, 50, 45],
        }}
        transition={{
          opacity: { duration: 1.5, delay: 1 },
          scale: { duration: 1.5, delay: 1 },
          y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 },
          rotate: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          },
        }}
      />

      <motion.div
        className="absolute bottom-20 right-10 w-20 h-20 border-2 border-tattoo-500 rotate-12 opacity-50 glow-effect"
        initial={{ opacity: 0, scale: 0, y: 0, rotate: 12 }}
        animate={{
          opacity: 0.5,
          scale: 1,
          y: [0, 10, 0],
          rotate: [12, 8, 12],
        }}
        transition={{
          opacity: { duration: 1.5, delay: 1.2 },
          scale: { duration: 1.5, delay: 1.2 },
          y: { duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 2.2 },
          rotate: {
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2.2,
          },
        }}
      />

      <motion.div
        className="absolute top-1/3 right-1/4 w-12 h-12 border-2 border-red-500 rounded-full opacity-40"
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: [0.4, 0.6, 0.4],
          scale: [1, 1.1, 1],
        }}
        transition={{
          opacity: { duration: 1.5, delay: 1.4 },
          scale: { duration: 1.5, delay: 1.4 },
          repeat: Infinity,
          repeatDelay: 0.5,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/3 left-1/4 w-8 h-8 bg-gold-400 rounded-full opacity-30"
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.3, 1],
        }}
        transition={{
          opacity: { duration: 1.5, delay: 1.6 },
          scale: { duration: 1.5, delay: 1.6 },
          repeat: Infinity,
          repeatDelay: 0.3,
          ease: "easeInOut",
        }}
      />

      {/* Booking Modal */}
      <AnimatePresence>
        {isBookingModalOpen && (
          <motion.div
            className="fixed inset-0 z-[200] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={closeBookingModal}
            />

            {/* Modal Content */}
            <motion.div
              className="relative bg-gray-900 rounded-2xl p-6 max-w-md w-full max-h-[90vh] overflow-y-auto border border-gold-400/20"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                onClick={closeBookingModal}
                aria-label="Close modal"
              >
                <X size={24} />
              </button>

              {/* Modal Header */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Book Your <span className="text-gold-400">Appointment</span>
                </h3>
                <p className="text-gray-400">
                  Let&apos;s create something amazing together
                </p>
              </div>

              {/* Booking Form */}
              <form className="space-y-4" onSubmit={handleBookingSubmit}>
                <div>
                  <label className="flex items-center space-x-2 text-sm font-medium text-gray-300 mb-2">
                    <User size={16} />
                    <span>Full Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gold-400 transition-colors"
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div>
                  <label className="flex items-center space-x-2 text-sm font-medium text-gray-300 mb-2">
                    <Phone size={16} />
                    <span>Phone Number</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gold-400 transition-colors"
                    placeholder="Your phone number"
                    required
                  />
                </div>

                <div>
                  <label className="flex items-center space-x-2 text-sm font-medium text-gray-300 mb-2">
                    <Mail size={16} />
                    <span>Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gold-400 transition-colors"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="flex items-center space-x-2 text-sm font-medium text-gray-300 mb-2">
                    <Calendar size={16} />
                    <span>Preferred Date</span>
                  </label>
                  <input
                    type="date"
                    name="date"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-gold-400 transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="flex items-center space-x-2 text-sm font-medium text-gray-300 mb-2">
                    <Clock size={16} />
                    <span>Preferred Time</span>
                  </label>
                  <select
                    name="time"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-gold-400 transition-colors"
                    required
                  >
                    <option value="">Select time</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="13:00">1:00 PM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="15:00">3:00 PM</option>
                    <option value="16:00">4:00 PM</option>
                    <option value="17:00">5:00 PM</option>
                    <option value="18:00">6:00 PM</option>
                  </select>
                </div>

                <div>
                  <label className="flex items-center space-x-2 text-sm font-medium text-gray-300 mb-2">
                    <MessageSquare size={16} />
                    <span>Tattoo Description</span>
                  </label>
                  <textarea
                    rows={4}
                    name="description"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gold-400 transition-colors resize-none"
                    placeholder="Describe your tattoo idea, style, size, placement..."
                    required
                  />
                </div>

                <div className="flex space-x-3 pt-4">
                  <button
                    type="button"
                    className="flex-1 px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
                    onClick={closeBookingModal}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-gold-500 text-black font-semibold rounded-lg hover:bg-gold-400 transition-colors"
                  >
                    Book Now
                  </button>
                </div>
              </form>

              {/* Contact Info */}
              <div className="mt-6 pt-6 border-t border-gray-700 text-center">
                <p className="text-gray-400 text-sm mb-2">
                  Or call us directly:
                </p>
                <a
                  href="tel:0954-048-9964"
                  className="text-gold-400 font-semibold hover:text-gold-300 transition-colors"
                >
                  0954-048-9964
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
