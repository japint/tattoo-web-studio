import React from "react";
import Image from "next/image";
import Card from "../ui/Card";
import Button from "../ui/Button";
import { Artist } from "../../types";

interface ArtistCardProps {
  artist: Artist;
  className?: string;
}

export default function ArtistCard({
  artist,
  className = "",
}: ArtistCardProps) {
  return (
    <Card className={`overflow-hidden group ${className}`}>
      <div className="relative h-64">
        <Image
          src={artist.image}
          alt={`${artist.name} - Tattoo Artist`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{artist.name}</h3>
        <p className="text-primary font-semibold mb-2">{artist.specialty}</p>
        <p className="text-gray-600 mb-3">{artist.experience} experience</p>
        <p className="text-gray-700 text-sm mb-4 line-clamp-3">{artist.bio}</p>

        <div className="flex items-center justify-between">
          <Button
            variant="secondary"
            size="sm"
            onClick={() => window.open(artist.instagram, "_blank")}
          >
            Instagram
          </Button>
          <Button size="sm">Book Session</Button>
        </div>
      </div>
    </Card>
  );
}
