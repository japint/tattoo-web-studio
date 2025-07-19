"use client";

import React from "react";
import Button from "../ui/Button";
import { useNavigation } from "../../hooks/useNavigation";
import { CalendarClock } from "lucide-react";

interface FloatingActionButtonProps {
  className?: string;
}

export default function FloatingActionButton({
  className = "",
}: FloatingActionButtonProps) {
  const { navigateToContact } = useNavigation();

  return (
    <div className={`fixed bottom-6 right-6 z-50 ${className}`}>
      <Button
        variant="fab"
        onClick={navigateToContact}
        ariaLabel="Book Now"
        suppressHydrationWarning
        className="!rounded-full !p-6 shadow-[0_0_30px_rgba(250,204,21,0.6)] hover:shadow-[0_0_40px_rgba(250,204,21,0.8)] transition-shadow duration-300"
      >
        <div className="flex items-center justify-center">
          <span className="text-xl leading-none">
            <CalendarClock size={36} className="rounded-full drop-shadow-lg" />
          </span>
        </div>
      </Button>
    </div>
  );
}
