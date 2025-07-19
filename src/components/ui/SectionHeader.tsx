import React from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  accent?: string;
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  accent,
  className = "",
}: SectionHeaderProps) {
  const renderTitle = () => {
    if (accent) {
      const parts = title.split(accent);
      return (
        <>
          {parts[0]}
          <span className="accent-text">{accent}</span>
          {parts[1]}
        </>
      );
    }
    return title;
  };

  return (
    <div className={`text-center mb-16 ${className}`}>
      <h2 className="section-title">{renderTitle()}</h2>
      {subtitle && (
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}
