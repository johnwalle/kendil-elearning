'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock } from 'lucide-react';
import { Instructor } from '@/types/courses';
interface CourseCardProps {
  id: string;
  title: string;
  slug: string;
  category: string;
  level: string;
  price: number;
  hours: number;
  imageUrl: string;
  instructor: Instructor;
  couponsLeft?: number;
  originalPrice?: number;
}

export function CourseCard({
  id,
  title,
  slug,
  category,
  level,
  price,
  hours,
  imageUrl,
  instructor,
  couponsLeft = 0,
  originalPrice = 149,
}: CourseCardProps) {
  const [coupon, setCoupon] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);
  const [error, setError] = useState('');

  const handleApplyCoupon = () => {
    if (!coupon.trim()) {
      setError('Enter a valid coupon to enroll free.');
      return;
    }
    if (coupon.trim().toLowerCase() === 'kendil100') {
      setCouponApplied(true);
      setError('');
    } else {
      setError('Invalid coupon');
    }
  };

  return (
    <Card className="flex flex-col overflow-hidden border border-gray-200 rounded-xl shadow hover:shadow-md transition-all duration-300 group h-full relative">
      <div className="w-full h-32 relative">
        <Image
          src={imageUrl}
          alt={`${category} icon`}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />

        {/* Top badges over image */}
        <div className="absolute top-2 left-2">
          <Badge className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded">{category}</Badge>
        </div>
        <div className="absolute top-2 right-2">
          <Badge className="bg-green-100 text-green-700 border border-green-300 text-xs px-2 py-0.5 rounded">{level}</Badge>
        </div>
      </div>

      <CardContent className="p-4 flex flex-col h-full">
        <div className="flex flex-col gap-2 flex-grow">
          <Link
            href={`/courses/${slug}`}
            className="text-base font-semibold text-gray-900 hover:underline my-1 line-clamp-1"
          >
            {title}
          </Link>

          <div className="flex items-center gap-2 mt-1">
            <Image src={instructor.imageUrl} alt={instructor.name} width={28} height={28} className="rounded-full object-cover" />
            <span className="text-sm text-gray-700">{instructor.name}</span>
          </div>

          <div className="flex justify-between items-center text-sm text-gray-600 mt-2">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4 text-gray-500" />
              {hours} hours
            </div>
            <div className="font-semibold text-gray-800">
              {couponApplied || price === 0 ? (
                <span className="text-green-600">Free</span>
              ) : (
                <>
                  <span className="line-through text-gray-400 mr-1">${originalPrice}</span>
                  <span className="text-black">${price}</span>
                </>
              )}
            </div>
          </div>

          {price > 0 && couponsLeft > 0 && (
            <div className="mt-2 flex flex-col gap-1 text-xs">
              <Badge className="bg-green-100 text-green-700 border-green-300 w-fit text-xs">
                🎟️ {couponsLeft} coupon{couponsLeft > 1 ? 's' : ''} left
              </Badge>

              <div className="relative -mb-8">
                <input
                  type="text"
                  placeholder="Enter coupon code"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                  className={`w-full border ${error ? 'border-red-500' : 'border-gray-300'
                    } rounded-md px-3 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-blue-400`}
                />
                <button
                  onClick={handleApplyCoupon}
                  className="absolute right-1 top-1/2 -translate-y-1/2 bg-blue-600 text-white text-xs px-2.5 py-1 rounded hover:bg-blue-700"
                >
                  Apply
                </button>
              </div>

              {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
            </div>
          )}
        </div>

        <button
          onClick={() => {
            if (price > 0 && !couponApplied && couponsLeft > 0) {
              setError('Please apply your coupon to enroll.');
              return;
            }
            alert('Enrolled successfully!');
          }}
          className="mt-4 w-full bg-orange-500 hover:bg-orange-600  text-white py-2 text-sm rounded-lg font-medium transition"
        >
          {couponApplied || price === 0 ? 'Enroll for Free' : 'Enroll Now'}
        </button>
      </CardContent>
    </Card>
  );
}
