'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Install Lucide icons or use Heroicons

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 text-blue-900 font-bold text-lg">
            <span className="text-xl">🎓</span>
            <span>Kendil E-learning</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/courses" className="text-sm text-blue-900 hover:text-blue-700">Courses</Link>
            <Link href="/about" className="text-sm text-blue-900 hover:text-blue-700">About</Link>
            <Link href="/contact" className="text-sm text-blue-900 hover:text-blue-700">Contact</Link>
            <Link
              href="/auth/signup"
              className="bg-orange-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-orange-600 transition"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-blue-900 focus:outline-none"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t shadow">
          <div className="flex flex-col px-6 py-4 space-y-3">
            <Link href="/courses" className="text-sm text-blue-900 hover:text-blue-700">Courses</Link>
            <Link href="/about" className="text-sm text-blue-900 hover:text-blue-700">About</Link>
            <Link href="/contact" className="text-sm text-blue-900 hover:text-blue-700">Contact</Link>
            <Link
              href="/auth/signup"
              className="bg-orange-500 text-white text-center py-2 rounded-md text-sm font-medium hover:bg-orange-600 transition"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
