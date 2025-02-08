// Button.tsx
import React from "react";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  fullWidth?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  type = "button",
  fullWidth = false,
  children,
}) => {
  return (
    <button
      type={type}
      className={`py-2 px-4 rounded-md text-white font-medium ${
        fullWidth ? "w-full" : "w-auto"
      } bg-secondary hover:bg-highlight transition-colors`}
    >
      {children}
    </button>
  );
};

export default Button;