'use client';

import { BellIcon, Cog6ToothIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';

export default function DashboardHeader() {
  return (
    <header className="w-full bg-white shadow-sm py-4 px-4 md:px-8 flex items-center justify-between">
      {/* Left: Logo and Title */}
      <div className="flex items-center space-x-3">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image
            src="/logo.svg" // Replace with your actual logo path
            alt="Kendil Logo"
            width={32}
            height={32}
            className="object-contain"
          />
          <div>
            <h1 className="text-base md:text-lg font-semibold text-blue-900 leading-5">Kendil</h1>
            <p className="text-xs text-gray-500 -mt-1">E-learning</p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-6 w-px bg-gray-300 hidden sm:block"></div>

        {/* Page Title */}
        <h2 className="text-base md:text-lg font-semibold text-blue-900">Dashboard</h2>
      </div>

      {/* Right: Icons */}
      <div className="flex items-center space-x-4">
        {/* Notifications */}
        <button className="relative p-2 rounded-full hover:bg-gray-100 transition">
          <BellIcon className="w-6 h-6 text-gray-600" />
          <span className="absolute -top-0.5 -right-0.5 bg-orange-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full font-semibold shadow">
            3
          </span>
        </button>

        {/* Settings */}
        <button className="p-2 rounded-full hover:bg-gray-100 transition">
          <Cog6ToothIcon className="w-6 h-6 text-gray-600" />
        </button>
      </div>
    </header>
  );
}
