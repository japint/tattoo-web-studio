import React from "react";
import Card from "../ui/Card";
import { Service } from "../../types";

interface ServiceGridProps {
  services: readonly Service[];
  cols?: "grid-cols-1" | "grid-cols-2" | "grid-cols-3";
  gap?: "gap-4" | "gap-6" | "gap-8";
  className?: string;
}

export default function ServiceGrid({
  services,
  cols = "grid-cols-2",
  gap = "gap-6",
  className = "",
}: ServiceGridProps) {
  return (
    <div className={`grid md:${cols} ${gap} ${className}`}>
      {services.map((service) => (
        <Card
          key={service.id}
          className="p-6 text-center group hover:shadow-xl transition-shadow duration-300"
        >
          <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
            {service.icon}
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            {service.name}
          </h3>
          <p className="text-gray-600 mb-4 text-sm leading-relaxed">
            {service.description}
          </p>
          <div className="text-gold-600 font-bold text-lg">
            Starting at ${service.startingPrice}
          </div>
        </Card>
      ))}
    </div>
  );
}
