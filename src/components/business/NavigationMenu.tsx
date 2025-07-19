import React from "react";
import { useNavigation } from "../../hooks/useNavigation";
import { NAVIGATION_ITEMS } from "../../config/constants";

interface NavigationMenuProps {
  className?: string;
  direction?: "horizontal" | "vertical";
  itemClassName?: string;
}

export default function NavigationMenu({
  className = "",
  direction = "horizontal",
  itemClassName = "",
}: NavigationMenuProps) {
  const { scrollToSection } = useNavigation();

  const baseClasses =
    direction === "horizontal" ? "flex space-x-8" : "flex flex-col space-y-4";

  const defaultItemClasses =
    "text-white hover:text-gold-400 transition-colors duration-300 cursor-pointer";

  return (
    <nav className={`${baseClasses} ${className}`}>
      {NAVIGATION_ITEMS.map((item) => (
        <button
          key={item.href}
          onClick={() => scrollToSection(item.href)}
          className={`${defaultItemClasses} ${itemClassName}`}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
}
