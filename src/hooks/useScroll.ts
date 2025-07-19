"use client";

import { useState, useEffect } from "react";

interface UseScrollOptions {
  threshold?: number;
  debounceMs?: number;
}

export function useScroll(options: UseScrollOptions = {}) {
  const { threshold = 300, debounceMs = 10 } = options;
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const currentScrollY = window.pageYOffset;
        setScrollY(currentScrollY);
        setIsScrolled(currentScrollY > threshold);
      }, debounceMs);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, [threshold, debounceMs]);

  return { scrollY, isScrolled };
}
