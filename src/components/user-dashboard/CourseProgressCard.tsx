import React from 'react';
import { ClockIcon, AcademicCapIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

interface CourseProgressCardProps {
  title: string;
  instructor: string;
  instructorAvatar?: string;
  progress: number;
  completedLessons: number;
  totalLessons: number;
  timeSpent: string;
  quizScore: number;
}

const CourseProgressCard: React.FC<CourseProgressCardProps> = ({
  title,
  instructor,
  instructorAvatar = '/instructor.jpg', // fallback image path
  progress,
  completedLessons,
  totalLessons,
  timeSpent,
  quizScore,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-xl mx-auto border border-gray-100">
      {/* Top Row */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
          <div className="flex items-center mt-1 space-x-2">
            <Image
              src={instructorAvatar}
              alt={instructor}
              width={20}
              height={20}
              className="rounded-full"
            />
            <p className="text-sm text-gray-500">Dr. {instructor}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-orange-500 text-xl font-bold">{progress}%</p>
          <p className="text-xs text-gray-500">Complete</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-5">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-orange-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-xs text-gray-500 mt-1">
          {completedLessons} of {totalLessons} lessons
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
        <div className="bg-gray-50 rounded-md p-3 flex items-center space-x-3">
          <ClockIcon className="w-5 h-5 text-orange-500" />
          <div>
            <p className="text-xs text-gray-500">Time Spent</p>
            <p className="text-sm font-semibold text-gray-800">{timeSpent}</p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-md p-3 flex items-center space-x-3">
          <AcademicCapIcon className="w-5 h-5 text-orange-500" />
          <div>
            <p className="text-xs text-gray-500">Quiz Score</p>
            <p className="text-sm font-semibold text-gray-800">{quizScore}%</p>
          </div>
        </div>
      </div>

      {/* Button */}
      <button className="w-full bg-orange-500 hover:bg-orange-600 transition text-white text-sm font-semibold py-2.5 rounded-md">
        Continue Learning
      </button>
    </div>
  );
};

export default CourseProgressCard;
