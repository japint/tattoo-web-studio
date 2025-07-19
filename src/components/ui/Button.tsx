import React from "react";

interface ButtonProps {
  variant?: "primary" | "secondary" | "fab";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
  ariaLabel?: string;
  suppressHydrationWarning?: boolean;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  variant = "primary",
  size = "md",
  onClick,
  className = "",
  children,
  ariaLabel,
  suppressHydrationWarning = false,
  type = "button",
}: ButtonProps) {
  const baseClasses =
    "font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantClasses = {
    primary: "bg-gold-400 hover:bg-gold-500 text-black focus:ring-gold-400",
    secondary:
      "border-2 border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-black focus:ring-gold-400",
    fab: "bg-yellow-400 hover:bg-yellow-500 text-black rounded-full shadow-2xl transform hover:scale-110 animate-pulse",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const roundedClasses = {
    primary: "rounded-lg",
    secondary: "rounded-lg",
    fab: "rounded-full",
  };

  const classes = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${roundedClasses[variant]}
    ${className}
  `
    .trim()
    .replace(/\s+/g, " ");

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      aria-label={ariaLabel}
      suppressHydrationWarning={suppressHydrationWarning}
    >
      {children}
    </button>
  );
}
