'use client';

import React from 'react';
import CourseOutline from './course-outline';
import CourseSidebar from './course-sidebar';
import WhatYoullLearn from './what-youll-learn';
import InstructorSection from './instructor-section';
import AboutSection from './about-section';
import CourseHeader from './course-header';
import { Course } from '@/types/courses';

interface CourseDetailProps {
  course: Course;
}

// Example course data


const CourseDetail: React.FC<CourseDetailProps> = ({ course }) => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Header */}
          <CourseHeader course={course} />

          {/* What You’ll Learn */}
          {course.learnItems && course.learnItems.length > 0 && (
            <WhatYoullLearn learnItems={course.learnItems} />
          )}

          {/* Curriculum / Outline */}
          {course.modules && course.modules.length > 0 && (
            <CourseOutline modules={course.modules} />
          )}

          {/* Overview, Audience, Benefits */}
          <AboutSection
            overview={course.overview || ''}
            audience={course.audience || []}
            benefits={course.benefits || ''}
          />
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <CourseSidebar
            title={course.title}
            instructor={course.instructor} 
            rating={course.rating}
            reviews={course.reviews}
            features={course.features || []}
            students={course.students}
            price={course.price.toString()}
            originalPrice={course.originalPrice?.toString() || ''}
          />
        </div>
      </div>

      {/* Instructor Section */}
      <div className="mt-16">
        <InstructorSection
          name={course.instructor.name}
          title={course.instructor.title}
          rating={course.instructor.rating}
          bio={course.instructor.bio || course.bio || 'No bio available'}
          imageUrl={course.instructor.imageUrl}
        />
      </div>
    </div>
  );
};

export default CourseDetail;
