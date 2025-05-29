'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group rounded-lg overflow-hidden bg-white shadow-sm transition-all duration-300 hover:shadow-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/products/${product.id}`} className="block relative">
        <div className="aspect-[3/4] relative overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className={`w-full h-full object-cover transition-transform duration-700 ${
              isHovered ? 'scale-110' : 'scale-100'
            }`}
          />
          {product.newArrival && (
            <div className="absolute top-2 right-2 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-full">
              New
            </div>
          )}
          {product.bestSeller && (
            <div className="absolute top-2 left-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              Best Seller
            </div>
          )}
        </div>
        
        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white p-2 text-center transform transition-transform duration-300 translate-y-full group-hover:translate-y-0">
          Quick View
        </div>
      </Link>

      <div className="p-4">
        <h3 className="text-sm text-gray-500 mb-1">{product.category === 'men' ? 'Men\'s' : 'Women\'s'} {product.subcategory}</h3>
        <h2 className="font-medium mb-2 text-gray-900 hover:text-purple-600 line-clamp-1">
          <Link href={`/products/${product.id}`}>
            {product.name}
          </Link>
        </h2>
        <div className="flex justify-between items-center">
          <p className="font-bold text-gray-900">${product.price.toFixed(2)}</p>
          <div className="flex space-x-1">
            {product.colors.slice(0, 4).map((color, index) => (
              <div
                key={index}
                className="w-3 h-3 rounded-full border border-gray-300"
                style={{ backgroundColor: color.toLowerCase() === 'navy' ? '#001f3f' : color.toLowerCase() }}
                title={color}
              />
            ))}
            {product.colors.length > 4 && (
              <div className="w-3 h-3 rounded-full bg-gray-200 flex items-center justify-center text-[8px] font-bold">
                +{product.colors.length - 4}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 