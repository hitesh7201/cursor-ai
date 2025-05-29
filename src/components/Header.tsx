'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-purple-600">
            StyleHub
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-8">
            <Link href="/" className="font-medium text-gray-700 hover:text-purple-600">
              Home
            </Link>
            <Link href="/categories/men" className="font-medium text-gray-700 hover:text-purple-600">
              Men
            </Link>
            <Link href="/categories/women" className="font-medium text-gray-700 hover:text-purple-600">
              Women
            </Link>
            <Link href="/products" className="font-medium text-gray-700 hover:text-purple-600">
              All Products
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-500 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop shopping cart */}
          <div className="hidden items-center space-x-4 md:flex">
            <Link href="/cart" className="relative text-gray-700 hover:text-purple-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-purple-600 text-xs font-bold text-white">
                  {totalItems}
                </span>
              )}
            </Link>
            <button className="rounded-full bg-purple-600 px-4 py-2 font-medium text-white hover:bg-purple-700">
              Sign In
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="border-t border-gray-200 py-2 md:hidden">
            <nav className="flex flex-col space-y-3 py-3">
              <Link
                href="/"
                className="px-4 py-2 font-medium text-gray-700 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/categories/men"
                className="px-4 py-2 font-medium text-gray-700 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Men
              </Link>
              <Link
                href="/categories/women"
                className="px-4 py-2 font-medium text-gray-700 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Women
              </Link>
              <Link
                href="/products"
                className="px-4 py-2 font-medium text-gray-700 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                All Products
              </Link>
              <div className="flex items-center justify-between px-4 py-2">
                <Link 
                  href="/cart" 
                  className="relative text-gray-700 hover:text-purple-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                  {totalItems > 0 && (
                    <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-purple-600 text-xs font-bold text-white">
                      {totalItems}
                    </span>
                  )}
                </Link>
                <button className="rounded-full bg-purple-600 px-4 py-2 font-medium text-white hover:bg-purple-700">
                  Sign In
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 