import React from "react";

interface FormFieldProps {
  id: string;
  label: string;
  type?: "text" | "email" | "tel" | "textarea" | "select";
  placeholder?: string;
  required?: boolean;
  options?: { value: string; label: string }[];
  rows?: number;
  className?: string;
  suppressHydrationWarning?: boolean;
}

export default function FormField({
  id,
  label,
  type = "text",
  placeholder,
  required = false,
  options = [],
  rows = 4,
  className = "",
  suppressHydrationWarning = false,
}: FormFieldProps) {
  const baseInputClasses = `
    w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg 
    focus:border-gold-400 focus:outline-none text-white
    transition-colors duration-300
    ${className}
  `
    .trim()
    .replace(/\s+/g, " ");

  const renderInput = () => {
    switch (type) {
      case "textarea":
        return (
          <textarea
            id={id}
            rows={rows}
            className={`${baseInputClasses} resize-none`}
            placeholder={placeholder}
            required={required}
            suppressHydrationWarning={suppressHydrationWarning}
          />
        );

      case "select":
        return (
          <select
            id={id}
            className={baseInputClasses}
            required={required}
            suppressHydrationWarning={suppressHydrationWarning}
          >
            <option value="">{placeholder || `Select ${label}`}</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );

      default:
        return (
          <input
            type={type}
            id={id}
            className={baseInputClasses}
            placeholder={placeholder}
            required={required}
            suppressHydrationWarning={suppressHydrationWarning}
          />
        );
    }
  };

  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-300 mb-2"
      >
        {label}
        {required && <span className="text-red-400 ml-1">*</span>}
      </label>
      {renderInput()}
    </div>
  );
}
