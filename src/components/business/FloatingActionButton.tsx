"use client";

import React from "react";
import Button from "../ui/Button";
import { useNavigation } from "../../hooks/useNavigation";

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
      >
        <div className="flex items-center space-x-2">
          <span className="text-xl">📅</span>
          <span className="hidden sm:inline text-sm font-bold">BOOK NOW</span>
        </div>
      </Button>
    </div>
  );
}
