// src/components/Button.tsx
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  fullWidth?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, fullWidth = false, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`py-2 px-4 rounded-md text-white font-medium ${fullWidth ? "w-full" : "w-auto"} bg-secondary hover:bg-highlight transition-colors ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;