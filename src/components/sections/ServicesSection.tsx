import { SectionHeader, Card, Button } from "../ui";
import { ServiceGrid } from "../business";
import { SERVICES } from "../../config/constants";

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Our Services"
          subtitle="We offer a comprehensive range of professional tattoo and body art services."
          accent="Services"
        />

        <ServiceGrid services={SERVICES} cols="grid-cols-2" gap="gap-8" />

        <div className="text-center mt-16">
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
        </div>
      </div>
    </section>
  );
}
