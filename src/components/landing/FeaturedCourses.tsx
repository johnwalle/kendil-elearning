'use client';

import Image from 'next/image';
import { FC } from 'react';

type Course = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  instructorName: string;
  instructorAvatar: string;
};

const courses: Course[] = [
  {
    id: 1,
    title: 'Python for Beginners',
    description: 'Learn Python programming from scratch with hands-on projects.',
    imageUrl: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/3ffcc9e828-29307443550252be76bf.png',
    instructorName: 'Dr. Sarah Johnson',
    instructorAvatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg',
  },
  {
    id: 2,
    title: 'Digital Marketing Mastery',
    description: 'Master social media, SEO, and content marketing strategies.',
    imageUrl: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/b4bdde4df1-0a8f2093bdc705aa312f.png',
    instructorName: 'Maria Garcia',
    instructorAvatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg',
  },
  {
    id: 3,
    title: 'Data Science Fundamentals',
    description: 'Analyze data and build predictive models with real datasets.',
    imageUrl: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/35025e469f-7b5553affe84e6a68682.png',
    instructorName: 'Prof. Michael Chen',
    instructorAvatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-8.jpg',
  },
];

const FeaturedCourses: FC = () => {
  return (
    <section className="bg-[#f8f9fc] py-20" aria-labelledby="featured-courses-heading">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <h2
          id="featured-courses-heading"
          className="text-3xl sm:text-4xl font-bold text-[#0b2e78] text-center mb-12"
        >
          Featured Courses
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col justify-between"
            >
              <Image
                src={course.imageUrl}
                alt={course.title}
                width={400}
                height={240}
                className="w-full h-48 object-cover"
              />

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-gray-900">{course.title}</h3>
                <p className="text-sm text-gray-600 mt-2 mb-4 flex-grow">{course.description}</p>

                <div className="flex items-center mb-4">
                  <Image
                    src={course.instructorAvatar}
                    alt={course.instructorName}
                    width={32}
                    height={32}
                    className="rounded-full mr-2"
                  />
                  <span className="text-sm text-gray-800">{course.instructorName}</span>
                </div>

                <button
                  className="bg-accent hover:bg-accent-hover text-white font-semibold py-2.5 rounded-lg transition-colors"
                  aria-label={`Enroll in ${course.title}`}
                >
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
