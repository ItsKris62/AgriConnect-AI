// src/components/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary py-4 text-white text-center">
      <p>&copy; {new Date().getFullYear()} Soko-Yetu. All rights reserved.</p>
    </footer>
  );
};

export default Footer;