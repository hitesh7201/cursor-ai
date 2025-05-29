'use client';

import { useState } from 'react';
import { products } from '@/data/products';
import { notFound } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { use } from 'react';

export default function ProductDetail({ params }: { params: { id: string } }) {
  // Unwrap params using React.use()
  const unwrappedParams = use(params);
  const product = products.find((p) => p.id === unwrappedParams.id);
  const { addToCart } = useCart();
  const [selectedColor, setSelectedColor] = useState<string | undefined>(product?.colors[0]);
  const [selectedSize, setSelectedSize] = useState<string | undefined>(product?.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  if (!product) {
    notFound();
  }

  const handleAddToCart = () => {
    if (product && selectedColor && selectedSize) {
      addToCart(product, quantity, selectedColor, selectedSize);
      setIsAddedToCart(true);
      setTimeout(() => setIsAddedToCart(false), 3000);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        {/* Product Image */}
        <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Product Details */}
        <div>
          <div className="mb-6">
            <h1 className="mb-2 text-3xl font-bold">{product.name}</h1>
            <p className="text-xl font-semibold text-gray-900">${product.price.toFixed(2)}</p>
          </div>

          <div className="mb-6">
            <h2 className="mb-2 text-lg font-medium">Description</h2>
            <p className="text-gray-600">{product.description}</p>
          </div>

          {/* Colors */}
          <div className="mb-6">
            <h2 className="mb-2 text-lg font-medium">Colors</h2>
            <div className="flex flex-wrap gap-3">
              {product.colors.map((color) => (
                <div
                  key={color}
                  className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border ${
                    selectedColor === color ? 'border-2 border-black' : 'border-gray-300'
                  }`}
                  onClick={() => setSelectedColor(color)}
                  title={color}
                >
                  <div
                    className="h-8 w-8 rounded-full"
                    style={{ backgroundColor: color.toLowerCase() === 'navy' ? '#001f3f' : color.toLowerCase() }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Sizes */}
          <div className="mb-6">
            <h2 className="mb-2 text-lg font-medium">Sizes</h2>
            <div className="flex flex-wrap gap-3">
              {product.sizes.map((size) => (
                <div
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`flex h-10 min-w-10 cursor-pointer items-center justify-center rounded-md border px-3 font-medium ${
                    selectedSize === size ? 'border-black bg-gray-100' : 'border-gray-300'
                  }`}
                >
                  {size}
                </div>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-6">
            <h2 className="mb-2 text-lg font-medium">Quantity</h2>
            <div className="flex h-10 max-w-[120px]">
              <button 
                className="flex w-10 items-center justify-center border border-r-0 border-gray-300"
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
              >
                -
              </button>
              <div className="flex w-10 items-center justify-center border border-gray-300">
                {quantity}
              </div>
              <button 
                className="flex w-10 items-center justify-center border border-l-0 border-gray-300"
                onClick={() => setQuantity(q => q + 1)}
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button 
            onClick={handleAddToCart}
            className={`w-full rounded-md py-3 text-white transition-colors ${
              isAddedToCart 
                ? 'bg-green-600 hover:bg-green-700' 
                : 'bg-black hover:bg-gray-800'
            }`}
          >
            {isAddedToCart ? 'Added to Cart!' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
} 