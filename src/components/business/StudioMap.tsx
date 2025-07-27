"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Navigation, Phone } from "lucide-react";
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
        <div className="relative h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden">
          {/* Google Maps Embed */}
          <iframe
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3849.1234567890!2d${STUDIO_LOCATION.coordinates.lng}!3d${STUDIO_LOCATION.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDU3JzMzLjgiTiAxMjDCsDQ1JzM4LjIiRQ!5e0!3m2!1sen!2sph!4v1234567890123!5m2!1sen!2sph`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ink Rebellion Studio Location"
            className="rounded-xl"
          />

          {/* Overlay with Studio Info */}
          <div
            className="absolute bottom-4 left-4 bg-black bg-opacity-80 text-white p-3 rounded-lg backdrop-blur-sm"
            style={{ zIndex: 10 }}
          >
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-gold-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold">
                📍 Ink Rebellion Studio
              </span>
            </div>
            <p className="text-xs text-gray-300 mt-1">
              McArthur Highway, Apalit
            </p>
          </div>

          {/* Action Buttons */}
          <div
            className="absolute top-4 right-4 flex flex-col gap-2"
            style={{ zIndex: 10 }}
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
