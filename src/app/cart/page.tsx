'use client';

import { useCart } from '@/context/CartContext';
import Link from 'next/link';
import { useState } from 'react';

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();
  const [checkoutComplete, setCheckoutComplete] = useState(false);

  const handleCheckout = () => {
    if (cartItems.length === 0) return;
    
    // In a real application, you would handle payment processing here
    setCheckoutComplete(true);
    clearCart();
  };

  if (checkoutComplete) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-3xl rounded-lg border border-gray-200 bg-white p-8 text-center">
          <div className="mb-6 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-8 w-8 text-green-600" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <h1 className="mb-4 text-2xl font-bold">Order Completed!</h1>
          <p className="mb-6 text-gray-600">
            Thank you for your purchase. Your order has been successfully placed and is being processed.
          </p>
          <Link 
            href="/" 
            className="inline-block rounded-md bg-purple-600 px-6 py-3 font-semibold text-white transition hover:bg-purple-700"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-8 text-3xl font-bold">Your Shopping Cart</h1>
      
      {cartItems.length === 0 ? (
        <div className="rounded-lg border border-gray-200 bg-white p-8 text-center">
          <h2 className="mb-4 text-xl font-medium">Your cart is empty</h2>
          <p className="mb-6 text-gray-600">
            Looks like you haven't added anything to your cart yet.
          </p>
          <Link 
            href="/products" 
            className="inline-block rounded-md bg-black px-6 py-3 font-semibold text-white transition hover:bg-gray-800"
          >
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <div className="rounded-lg border border-gray-200 bg-white">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="font-semibold">Product Details</h2>
              </div>
              
              {cartItems.map((item) => (
                <div key={`${item.product.id}-${item.selectedColor}-${item.selectedSize}`} className="border-b border-gray-200 p-6">
                  <div className="flex flex-col sm:flex-row">
                    <div className="mb-4 h-24 w-24 flex-shrink-0 overflow-hidden rounded-md sm:mb-0">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="sm:ml-6 sm:flex sm:flex-1 sm:flex-col">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="text-base font-medium">
                            <Link href={`/products/${item.product.id}`} className="hover:text-purple-600">
                              {item.product.name}
                            </Link>
                          </h3>
                          <p className="mt-1 text-sm text-gray-500">
                            {item.selectedColor} | {item.selectedSize}
                          </p>
                        </div>
                        <p className="text-base font-medium">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                      <div className="mt-2 flex items-center justify-between">
                        <div className="flex h-8 max-w-[100px]">
                          <button 
                            className="flex w-8 items-center justify-center border border-r-0 border-gray-300"
                            onClick={() => {
                              if (item.quantity > 1) {
                                updateQuantity(item.product.id, item.quantity - 1);
                              }
                            }}
                          >
                            -
                          </button>
                          <div className="flex w-8 items-center justify-center border border-gray-300">
                            {item.quantity}
                          </div>
                          <button 
                            className="flex w-8 items-center justify-center border border-l-0 border-gray-300"
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          >
                            +
                          </button>
                        </div>
                        <button 
                          className="text-sm text-red-600 hover:text-red-800"
                          onClick={() => removeFromCart(item.product.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="h-fit rounded-lg border border-gray-200 bg-white p-6">
            <h2 className="mb-4 text-lg font-medium">Order Summary</h2>
            <div className="mb-4 flex justify-between">
              <p className="text-gray-600">Subtotal</p>
              <p className="font-medium">${totalPrice.toFixed(2)}</p>
            </div>
            <div className="mb-4 flex justify-between">
              <p className="text-gray-600">Shipping</p>
              <p className="font-medium">Free</p>
            </div>
            <div className="mb-4 border-t border-gray-200 pt-4">
              <div className="flex justify-between">
                <p className="text-lg font-medium">Total</p>
                <p className="text-lg font-bold">${totalPrice.toFixed(2)}</p>
              </div>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full rounded-md bg-black py-3 font-medium text-white hover:bg-gray-800"
            >
              Checkout
            </button>
            <div className="mt-4 text-center">
              <Link href="/products" className="text-sm text-gray-600 hover:text-purple-600">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 