// src/components/ProductCard.tsx
import React from "react";

interface ProductCardProps {
  name: string;
  description: string;
  price: number;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, description, price, image }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <img src={image} alt={name} className="w-full h-48 object-cover mb-4 rounded-md" />
      <h3 className="text-xl font-bold text-secondary">{name}</h3>
      <p className="text-gray-600">{description}</p>
      <p className="text-lg font-medium mt-2 text-highlight">${price.toFixed(2)}</p>
    </div>
  );
};

export default ProductCard;