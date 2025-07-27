"use client";

import { motion } from "framer-motion";
import { SectionHeader, Card, Button } from "../ui";
import { ServiceGrid } from "../business";
import { SERVICES } from "../../config/constants";

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            title="Our Services"
            subtitle="We offer a comprehensive range of professional tattoo and body art services."
            accent="Services"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <ServiceGrid services={SERVICES} cols="grid-cols-2" gap="gap-8" />
        </motion.div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold accent-text mb-4">
              Book Your Consultation
            </h3>
            <p className="text-gray-300 mb-6">
              Ready to start your tattoo journey? Schedule a free consultation
              with one of our artists today.
            </p>
            <Button suppressHydrationWarning>Schedule Consultation</Button>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
