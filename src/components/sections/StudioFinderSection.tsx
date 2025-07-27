"use client";

import { motion } from "framer-motion";
import { Car, MapPin, Bus } from "lucide-react";
import StudioMap from "../business/StudioMap";
import { SectionHeader } from "../ui";

export default function StudioFinderSection() {
  return (
    <section id="location" className="scroll-snap-section py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            title="Find Our Studio"
            subtitle="Located on McArthur Highway in Apalit, Pampanga. Visit us for your next tattoo adventure."
            accent="Studio"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <StudioMap />
        </motion.div>

        <motion.div
          className="mt-16 grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Car className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Easy Parking
            </h3>
            <p className="text-gray-400">
              Convenient parking available right in front of our studio
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Prime Location
            </h3>
            <p className="text-gray-400">
              Located on the busy McArthur Highway commercial corridor
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Bus className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Public Transport
            </h3>
            <p className="text-gray-400">
              Easily accessible by jeepney, tricycle, and other public transport
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
