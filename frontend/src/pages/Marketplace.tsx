// src/pages/Marketplace.tsx
import React from "react";
import BentoGrid from "../components/BentoGrid";
import ProductCard from "../components/ProductCard";

const products = [
  {
    name: "Fresh Tomatoes",
    description: "Organic tomatoes from local farms.",
    price: 2.99,
    image: "/images/tomatoes.jpg",
  },
  {
    name: "Sweet Potatoes",
    description: "High-quality sweet potatoes.",
    price: 1.99,
    image: "/images/sweet-potatoes.jpg",
  },
];

const Marketplace: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-secondary mb-8">Marketplace</h1>
      <BentoGrid>
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </BentoGrid>
    </div>
  );
};

export default Marketplace;