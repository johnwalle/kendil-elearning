import React from 'react';
import { Course } from '@/types/courses';
import { FaStar, FaUser } from 'react-icons/fa';
import { PlayCircle } from 'lucide-react';

interface CourseHeaderProps {
  course: Course;
}

const tagColors: { [key: string]: string } = {
  Beginner: 'bg-green-100 text-green-800',
  'Limited Time': 'bg-red-100 text-red-800',
  'Web Development': 'bg-blue-100 text-blue-800',
};

const CourseHeader: React.FC<CourseHeaderProps> = ({ course }) => {
  const image = course.imageUrl;
  const imageInstructor = course.instructor.imageUrl;

  console.log('Course Image URL:', image);
  console.log('Instructor Image URL:', imageInstructor);

  return (
    <div className="bg-white shadow-xl mt-16  rounded-2xl p-6 sm:p-8 mb-8 space-y-6">
      {/* Category and Tags */}
      <div className="flex flex-wrap gap-2 sm:gap-3">
        {[course.category, ...(course.tags || [])].map((tag, index) => (
          <span
            key={index}
            className={`text-xs sm:text-sm font-semibold px-2.5 py-1 rounded-full ${tagColors[tag] || 'bg-gray-100 text-gray-800'}`}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
        {course.title}
      </h1>

      {/* Instructor + Stats */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center">
          <img
            src={course.instructor.imageUrl}
            alt={course.instructor.name}
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-blue-500 mr-3"
          />
          <div>
            <p className="text-base sm:text-lg font-semibold text-gray-800">{course.instructor.name}</p>
          </div>
        </div>

        {/* Stats Row */}
        <div className="flex items-center text-sm sm:text-base text-gray-700 gap-4">
          <div className="flex items-center text-yellow-500 font-medium">
            <FaStar className="mr-1" />
            {course.rating} <span className="text-gray-600 ml-1">({course.reviews})</span>
          </div>
          <div className="flex items-center">
            <FaUser className="mr-1" />
            {course.students.toLocaleString()} students
          </div>
        </div>
      </div>

      {/* Course Image with Play Overlay */}
      <div className="relative group overflow-hidden rounded-xl shadow-md cursor-pointer">
        <img
          src={course.imageUrl}
          alt={course.title}
          className="w-full h-56 sm:h-72 md:h-80 object-cover"
        />

        {/* Always visible play icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <PlayCircle className="text-white w-14 h-14 sm:w-16 sm:h-16 drop-shadow-lg" />
        </div>
      </div>

    </div>
  );
};

export default CourseHeader;
