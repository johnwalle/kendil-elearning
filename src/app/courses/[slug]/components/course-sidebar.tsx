'use client';

import React from 'react';
import Image from 'next/image';
import { Instructor } from '@/types/courses';

interface CourseSidebarProps {
  title: string;
  instructor: Instructor;
  rating: number;
  reviews: number;
  students: number;
  price: string;
  originalPrice?: string;
  features?: string[]; // now purely string labels
}

const CourseSidebar: React.FC<CourseSidebarProps> = ({
  title,
  instructor,
  rating,
  reviews,
  students,
  price,
  originalPrice,
  features = [],
}) => {
  return (
    <aside className="sticky top-6 p-6 bg-white rounded-2xl shadow-md border border-gray-100 space-y-5">
      {/* Price & discount */}
      <div>
        <div className="flex items-center gap-2">
          <span className="text-3xl font-bold text-gray-900">${price}</span>
          {originalPrice && (
            <>
              <span className="line-through text-gray-400 text-sm">${originalPrice}</span>
              <span className="text-sm text-red-600 bg-red-100 px-2 py-0.5 rounded-full font-semibold">
                {Math.round(((+originalPrice - +price) / +originalPrice) * 100)}% off
              </span>
            </>
          )}
        </div>
        <p className="text-sm text-red-600 mt-1">⏰ Sale ends in 2 days</p>
      </div>

      {/* Enroll Button */}
      <button className="w-full cursor-pointer bg-orange-500 hover:bg-orange-600 text-white text-base py-2.5 rounded-xl transition font-semibold shadow">
        Enroll Now
      </button>

      {/* Coupon Field */}
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Enter coupon code"
          className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <button className="text-sm font-semibold text-orange-600 hover:underline">Apply</button>
      </div>

      {/* Instructor Info */}
      <div className="flex items-center gap-3">
        <Image
          src={instructor.imageUrl}
          alt={instructor.name}
          width={40}
          height={40}
          className="rounded-full object-cover"
        />
        <div className="text-sm leading-tight">
          <p className="font-medium text-gray-900">{instructor.name}</p>
          <p className="text-gray-500">
            <span className="text-yellow-500">★ {rating}</span> ({reviews}) · {students.toLocaleString()} students
          </p>
        </div>
      </div>

      {/* Dynamic Course Features */}
      <div className="space-y-2 text-sm text-gray-700">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 mt-2 bg-gray-400 rounded-full inline-block" />
            <span>{feature}</span>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default CourseSidebar;
