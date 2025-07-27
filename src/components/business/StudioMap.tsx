"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Navigation, Phone, Clock, Mail } from "lucide-react";
import { BUSINESS_INFO } from "../../config/constants";

const STUDIO_LOCATION = {
  name: BUSINESS_INFO.name,
  address: `${BUSINESS_INFO.contact.address.street}, ${BUSINESS_INFO.contact.address.city}, ${BUSINESS_INFO.contact.address.state} ${BUSINESS_INFO.contact.address.zipCode}`,
  coordinates: { lat: 14.9594, lng: 120.7606 }, // McArthur Highway, Apalit, Pampanga coordinates
  phone: BUSINESS_INFO.contact.phone,
  email: BUSINESS_INFO.contact.email,
  hours: "Tue-Sat: 11am-8pm",
};

export default function StudioMap() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const openInMaps = () => {
    const { lat, lng } = STUDIO_LOCATION.coordinates;
    const mapsUrl = `https://www.google.com/maps?q=${lat},${lng}`;
    window.open(mapsUrl, "_blank");
  };

  const getDirections = () => {
    const { lat, lng } = STUDIO_LOCATION.coordinates;
    const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
    window.open(directionsUrl, "_blank");
  };

  if (!isClient) {
    return (
      <div className="w-full h-96 bg-gray-800 rounded-xl animate-pulse flex items-center justify-center">
        <div className="text-gray-600">Loading map...</div>
      </div>
    );
  }

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      <motion.div
        className="relative bg-gray-800 rounded-xl overflow-hidden"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-gray-900 opacity-50 rounded-xl">
            {/* Realistic Map Background */}
            <div className="w-full h-full bg-gradient-to-br from-green-100 to-blue-50 opacity-80">
              <svg viewBox="0 0 400 300" className="w-full h-full">
                <defs>
                  {/* Street pattern */}
                  <pattern
                    id="streets"
                    width="40"
                    height="40"
                    patternUnits="userSpaceOnUse"
                  >
                    <rect width="40" height="40" fill="#f0f9ff" />
                    <path d="M0 20 L40 20" stroke="#d1d5db" strokeWidth="1" />
                    <path d="M20 0 L20 40" stroke="#d1d5db" strokeWidth="1" />
                  </pattern>
                </defs>

                {/* Base map with streets */}
                <rect width="100%" height="100%" fill="url(#streets)" />

                {/* Major roads */}
                <path
                  d="M0 150 Q100 140 200 150 T400 150"
                  stroke="#9ca3af"
                  strokeWidth="6"
                  fill="none"
                />
                <path
                  d="M200 0 Q190 100 200 200 T200 300"
                  stroke="#9ca3af"
                  strokeWidth="5"
                  fill="none"
                />

                {/* McArthur Highway (main road) */}
                <path
                  d="M50 120 Q150 115 250 120 Q300 122 400 125"
                  stroke="#6b7280"
                  strokeWidth="8"
                  fill="none"
                />
                <text
                  x="60"
                  y="110"
                  fill="#4b5563"
                  fontSize="8"
                  fontWeight="bold"
                >
                  McArthur Hwy
                </text>

                {/* Local streets */}
                <path
                  d="M100 80 L300 90"
                  stroke="#d1d5db"
                  strokeWidth="3"
                  fill="none"
                />
                <path
                  d="M80 180 L320 190"
                  stroke="#d1d5db"
                  strokeWidth="3"
                  fill="none"
                />
                <path
                  d="M150 50 L160 250"
                  stroke="#d1d5db"
                  strokeWidth="3"
                  fill="none"
                />
                <path
                  d="M250 40 L260 260"
                  stroke="#d1d5db"
                  strokeWidth="3"
                  fill="none"
                />

                {/* Buildings/blocks */}
                <rect
                  x="110"
                  y="130"
                  width="15"
                  height="10"
                  fill="#e5e7eb"
                  stroke="#d1d5db"
                />
                <rect
                  x="130"
                  y="135"
                  width="12"
                  height="8"
                  fill="#e5e7eb"
                  stroke="#d1d5db"
                />
                <rect
                  x="270"
                  y="128"
                  width="18"
                  height="12"
                  fill="#e5e7eb"
                  stroke="#d1d5db"
                />
                <rect
                  x="180"
                  y="160"
                  width="20"
                  height="15"
                  fill="#e5e7eb"
                  stroke="#d1d5db"
                />

                {/* Landmarks */}
                <circle cx="320" cy="180" r="8" fill="#10b981" opacity="0.7" />
                <text x="315" y="200" fill="#059669" fontSize="6">
                  Park
                </text>

                <rect
                  x="80"
                  y="200"
                  width="25"
                  height="15"
                  fill="#3b82f6"
                  opacity="0.3"
                />
                <text x="85" y="225" fill="#1d4ed8" fontSize="6">
                  Mall
                </text>
              </svg>
            </div>
          </div>

          {/* Simple Studio Pin - NO ANIMATION */}
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            style={{ zIndex: 50 }}
          >
            <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center shadow-lg border-2 border-gold-300">
              <MapPin className="w-8 h-8 text-black" />
            </div>
            {/* Simple pulse effect */}
            <div className="absolute inset-0 w-16 h-16 rounded-full bg-gold-400 opacity-40 animate-ping"></div>
          </div>

          {/* Studio Label */}
          <div
            className="absolute bottom-20 left-1/2 transform -translate-x-1/2"
            style={{ zIndex: 50 }}
          >
            <div className="bg-black text-gold-400 px-3 py-1 rounded text-sm font-semibold shadow-lg">
              📍 Ink Rebellion Studio
            </div>
          </div>

          {/* Action Buttons */}
          <div
            className="absolute top-4 right-4 flex flex-col gap-2"
            style={{ zIndex: 50 }}
          >
            <button
              onClick={openInMaps}
              className="bg-gold-500 text-black p-3 rounded-lg hover:bg-gold-400 transition-all duration-300 shadow-lg"
              title="Open in Google Maps"
            >
              <MapPin className="w-5 h-5" />
            </button>
            <button
              onClick={getDirections}
              className="bg-gold-600 text-white p-3 rounded-lg hover:bg-gold-500 transition-all duration-300 shadow-lg"
              title="Get Directions"
            >
              <Navigation className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="space-y-6"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">
            Find Our Studio
          </h3>
          <p className="text-gray-400">Visit us at {STUDIO_LOCATION.address}</p>
        </div>
        <div className="space-y-4">
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex items-start space-x-3">
              <div className="bg-gold-500 p-2 rounded-lg">
                <MapPin className="w-5 h-5 text-black" />
              </div>
              <div>
                <h4 className="font-semibold text-white">Address</h4>
                <p className="text-gray-400">{STUDIO_LOCATION.address}</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex items-start space-x-3">
              <div className="bg-gold-500 p-2 rounded-lg">
                <Phone className="w-5 h-5 text-black" />
              </div>
              <div>
                <h4 className="font-semibold text-white">Phone</h4>
                <p className="text-gold-400">{STUDIO_LOCATION.phone}</p>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={getDirections}
          className="w-full bg-gold-500 text-black px-6 py-3 rounded-lg font-semibold"
        >
          Get Directions
        </button>
      </motion.div>
    </div>
  );
}
