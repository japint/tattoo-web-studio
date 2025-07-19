import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "glass" | "gradient" | "solid";
}

export default function Card({
  children,
  className = "",
  variant = "glass",
}: CardProps) {
  const variantClasses = {
    glass: "glass-effect",
    gradient:
      "bg-gradient-to-r from-gold-400/10 to-red-500/10 border border-gold-400/30",
    solid: "bg-gray-800 border border-gray-700",
  };

  const classes = `
    rounded-lg p-6
    ${variantClasses[variant]}
    ${className}
  `
    .trim()
    .replace(/\s+/g, " ");

  return <div className={classes}>{children}</div>;
}
