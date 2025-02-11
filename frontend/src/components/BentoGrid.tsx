// src/components/BentoGrid.tsx
import React from "react";

interface BentoGridProps {
  children: React.ReactNode;
}

const BentoGrid: React.FC<BentoGridProps> = ({ children }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {children}
    </div>
  );
};

export default BentoGrid;