import React from 'react';
import {
  Star,
  BadgeCheck,
  Lock,
  Flame,
  Heart,
  GraduationCap,
} from 'lucide-react';

interface Badge {
  name: string;
  icon: React.ReactNode;
  bgColor: string;
  unlocked: boolean;
}

const badges: Badge[] = [
  {
    name: 'First Course',
    icon: <Star className="w-5 h-5 text-yellow-500" />,
    bgColor: 'bg-yellow-100',
    unlocked: true,
  },
  {
    name: 'Code Master',
    icon: <BadgeCheck className="w-5 h-5 text-blue-500" />,
    bgColor: 'bg-blue-100',
    unlocked: true,
  },
  {
    name: 'Quiz Pro',
    icon: <GraduationCap className="w-5 h-5 text-green-600" />,
    bgColor: 'bg-green-100',
    unlocked: true,
  },
  {
    name: '7-Day Streak',
    icon: <Flame className="w-5 h-5 text-purple-500" />,
    bgColor: 'bg-purple-100',
    unlocked: true,
  },
  {
    name: 'Dedication',
    icon: <Heart className="w-5 h-5 text-red-500" />,
    bgColor: 'bg-red-100',
    unlocked: true,
  },
  {
    name: 'Locked',
    icon: <Lock className="w-5 h-5 text-gray-400" />,
    bgColor: 'bg-gray-100',
    unlocked: false,
  },
];

export default function Badges() {
  return (
    <div className="mt-6 p-4 bg-white rounded-xl shadow-sm border">
      <h2 className="text-sm font-medium text-gray-700 mb-3">Badges</h2>
      <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-3">
        {badges.map((badge, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center rounded-lg px-3 py-4 ${
              badge.unlocked ? badge.bgColor : 'bg-gray-100 opacity-60'
            }`}
          >
            {badge.icon}
            <p
              className={`mt-1 text-xs font-medium text-center ${
                badge.unlocked ? 'text-gray-800' : 'text-gray-400'
              }`}
            >
              {badge.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
