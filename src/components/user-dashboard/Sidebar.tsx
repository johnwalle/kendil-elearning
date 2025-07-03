import React from 'react';
import Image from 'next/image';

type Course = {
  title: string;
  progress: number;
  completedLessons: number;
  totalLessons: number;
  timeSpent: string;
  quizScore: number;
  instructor: string;
  instructorAvatar: string;
};

export default function Sidebar({
  courses,
  onCourseSelect,
}: {
  courses: Course[];
  onCourseSelect: (course: Course) => void;
}) {
  return (
    <aside className="bg-white w-full md:w-72 px-4 sm:px-6 py-6 border border-gray-200 rounded-xl md:rounded-none md:border-r md:border-b-0 shadow-sm md:shadow-none">
      {/* User Info */}
      <div className="flex flex-col items-center mb-8">
        <Image
          src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg"
          alt="Sarah Johnson"
          width={60}
          height={60}
          className="rounded-full object-cover mb-2"
        />
        <h3 className="font-semibold text-gray-800 text-center text-base sm:text-lg">
          Sarah Johnson
        </h3>
        <p className="text-sm text-gray-500 text-center">Computer Science</p>
      </div>

      {/* Enrolled Courses Header */}
      <h4 className="text-xs sm:text-sm text-gray-500 font-semibold uppercase tracking-wide mb-4 text-center md:text-left">
        Enrolled Courses
      </h4>

      {/* Courses List */}
      <div className="space-y-4">
        {courses.map((course, index) => (
          <button
            key={index}
            className="bg-gray-50 p-3 rounded-md shadow-sm w-full text-left cursor-pointer
                       hover:bg-orange-50 hover:shadow-md transition duration-200"
            onClick={() => onCourseSelect(course)}
          >
            <div className="flex justify-between items-center mb-1">
              <p className="text-sm font-medium text-gray-700">{course.title}</p>
              <span className="text-xs font-bold text-orange-500">{course.progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-orange-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${course.progress}%` }}
              />
            </div>
            <p className="text-xs text-gray-500 mt-1">
              {course.completedLessons}/{course.totalLessons} lessons completed
            </p>
          </button>
        ))}
      </div>
    </aside>
  );
}
