import React from "react";
import Image from "next/image";
import Card from "../ui/Card";
import { GalleryImage } from "../../types";

interface GalleryGridProps {
  images: GalleryImage[];
  cols?: "grid-cols-2" | "grid-cols-3" | "grid-cols-4";
  gap?: "gap-4" | "gap-6" | "gap-8";
}

export default function GalleryGrid({
  images,
  cols = "grid-cols-2",
  gap = "gap-6",
}: GalleryGridProps) {
  return (
    <div className={`grid md:${cols} ${gap}`}>
      {images.map((image, index) => (
        <Card
          key={index}
          className="overflow-hidden group cursor-pointer transition-transform duration-300 hover:scale-105"
        >
          <div className="relative h-64 md:h-80">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
              <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                <h3 className="text-lg font-semibold mb-2">{image.category}</h3>
                {image.artist && (
                  <p className="text-sm text-gray-300">by {image.artist}</p>
                )}
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
