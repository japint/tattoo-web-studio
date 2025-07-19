import React from "react";
import FormField from "../ui/FormField";
import Button from "../ui/Button";
import { SERVICES } from "../../config/constants";

export default function ContactForm() {
  const serviceOptions = SERVICES.map((service) => ({
    value: service.id,
    label: service.name,
  }));

  return (
    <form className="space-y-6" suppressHydrationWarning>
      <div className="grid md:grid-cols-2 gap-6">
        <FormField
          id="firstName"
          label="First Name"
          placeholder="Your first name"
          required
          suppressHydrationWarning
        />
        <FormField
          id="lastName"
          label="Last Name"
          placeholder="Your last name"
          required
          suppressHydrationWarning
        />
      </div>

      <FormField
        id="email"
        label="Email"
        type="email"
        placeholder="your@email.com"
        required
        suppressHydrationWarning
      />

      <FormField
        id="phone"
        label="Phone (Optional)"
        type="tel"
        placeholder="0954-048-9964"
        suppressHydrationWarning
      />

      <FormField
        id="service"
        label="Service Interest"
        type="select"
        placeholder="Select a service"
        options={serviceOptions}
        suppressHydrationWarning
      />

      <FormField
        id="message"
        label="Message"
        type="textarea"
        placeholder="Tell us about your tattoo ideas, preferred dates, or any questions you have..."
        rows={4}
        required
        suppressHydrationWarning
      />

      <Button type="submit" className="w-full" suppressHydrationWarning>
        Send Message
      </Button>
    </form>
  );
}
