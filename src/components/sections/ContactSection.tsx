"use client";

import { motion } from "framer-motion";
import { SectionHeader, Card } from "../ui";
import { ContactForm } from "../business";
import { BUSINESS_INFO } from "../../config/constants";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            title="Get in Touch"
            subtitle="Ready to start your tattoo journey? Contact us today to schedule your consultation."
            accent="Touch"
          />
        </motion.div>

        <motion.div 
          className="grid lg:grid-cols-2 gap-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div>
            <Card className="p-8">
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
                      {BUSINESS_INFO.contact.address.street}
                      <br />
                      {BUSINESS_INFO.contact.address.city},{" "}
                      {BUSINESS_INFO.contact.address.state}{" "}
                      {BUSINESS_INFO.contact.address.zipCode}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gold-400 rounded-lg flex items-center justify-center">
                    <span className="text-black font-bold">📞</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Phone</h4>
                    <p className="text-gray-400">
                      {BUSINESS_INFO.contact.phone}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gold-400 rounded-lg flex items-center justify-center">
                    <span className="text-black font-bold">✉️</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email</h4>
                    <p className="text-gray-400">
                      {BUSINESS_INFO.contact.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gold-400 rounded-lg flex items-center justify-center">
                    <span className="text-black font-bold">🕒</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Hours</h4>
                    <div className="text-gray-400 space-y-1">
                      <p>Tuesday - Friday: {BUSINESS_INFO.hours.tuesday}</p>
                      <p>Saturday: {BUSINESS_INFO.hours.saturday}</p>
                      <p>Sunday - Monday: {BUSINESS_INFO.hours.sunday}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div>
            <Card className="p-8">
              <h3 className="text-2xl font-bold accent-text mb-6">
                Send us a Message
              </h3>
              <ContactForm />
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
