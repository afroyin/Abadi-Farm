'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 w-full">
      <nav className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-8 py-3 sm:py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-1 sm:space-x-2 flex-shrink-0">
          <div className="w-8 sm:w-10 h-8 sm:h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-sm sm:text-lg">🐔</span>
          </div>
          <div className="min-w-0">
            <h1 className="text-lg sm:text-2xl font-bold text-primary truncate">Abadi Farm</h1>
            <p className="text-xs text-gray-600 hidden sm:block">Premium Chicken Breeder</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 lg:space-x-8">
          <li>
            <Link href="#hero" className="text-gray-700 hover:text-primary font-medium transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="#features" className="text-gray-700 hover:text-primary font-medium transition">
              Services
            </Link>
          </li>
        </ul>

        {/* CTA Button */}
        <button className="hidden md:block bg-primary text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition font-medium text-sm lg:text-base flex-shrink-0">
          Order Now
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 flex-shrink-0 p-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-200 md:hidden w-full">
            <ul className="flex flex-col space-y-3 p-4">
              <li>
                <Link href="#hero" className="text-gray-700 hover:text-primary block py-2" onClick={() => setIsMenuOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="#features" className="text-gray-700 hover:text-primary block py-2" onClick={() => setIsMenuOpen(false)}>
                  Services
                </Link>
              </li>
              <li className="pt-2 border-t">
                <button className="w-full bg-primary text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition text-sm font-medium">
                  Order Now
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}

