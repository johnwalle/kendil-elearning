'use client';

import Link from 'next/link';
import { Lock, CheckCircle2, PlayCircle } from 'lucide-react';
import { Lesson, Course } from '@/types/lessons';
import { cn } from '@/lib/utils';

interface CourseSidebarProps {
  course: Course;
  lessons: Lesson[];
  currentLessonId: string;
}

export default function CourseSidebar({ course, lessons, currentLessonId }: CourseSidebarProps) {
  return (
    <aside
      className="
        bg-white rounded-md shadow-md flex flex-col p-6
        w-full md:w-72
        h-auto md:h-[685px]
        "
      style={{ minWidth: 288 /* 72 * 4px */ }}
    >
      <h2 className="text-gray-900 font-semibold text-base mb-5 select-none">Course Modules</h2>

      <ul className="flex-1 overflow-y-auto space-y-3 pr-1 max-h-[60vh] md:max-h-full">
        {lessons.map((lesson, index) => {
          const isCurrent = lesson.id === currentLessonId;
          const isCompleted = lesson.completed;
          const isLocked = !lesson.unlocked;

          const baseClasses =
            'rounded-lg px-4 py-2 flex flex-col gap-0.5 text-sm font-normal transition-colors shadow-sm border';

          const className = cn(baseClasses, {
            'bg-orange-50 text-orange-800 border-orange-300 ring-1 ring-orange-200':
              isCurrent,
            'bg-green-50 text-green-800 border-green-300':
              isCompleted && !isCurrent,
            'bg-gray-50 text-gray-500 border-gray-200 cursor-not-allowed':
              isLocked,
            'hover:bg-gray-50 text-gray-800 border-gray-300':
              !isCurrent && !isCompleted && !isLocked,
          });

          return (
            <li key={lesson.id}>
              <Link
                href={isLocked ? '#' : `/learning/${course.id}?lesson=${lesson.id}`}
                className={className}
                tabIndex={isLocked ? -1 : 0}
                aria-disabled={isLocked}
              >
                <div className="flex justify-between items-center font-medium select-none">
                  <span className="leading-tight">
                    {index + 1}. {lesson.title}
                  </span>

                  {isCurrent && (
                    <PlayCircle
                      className="w-4 h-4 text-orange-500"
                      aria-label="Current Lesson"
                    />
                  )}
                  {!isCurrent && isCompleted && (
                    <CheckCircle2
                      className="w-4 h-4 text-green-500"
                      aria-label="Completed Lesson"
                    />
                  )}
                  {!isCurrent && isLocked && (
                    <Lock
                      className="w-4 h-4 text-gray-400"
                      aria-label="Locked Lesson"
                    />
                  )}
                </div>
                <p className="text-xs text-gray-600 leading-tight select-text">
                  {lesson.description}
                </p>
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="mt-6 select-none">
        <p className="text-gray-700 font-semibold text-sm mb-1">Course Progress</p>
        <div className="w-full h-2 rounded-full bg-blue-100 overflow-hidden">
          <div
            className="bg-blue-600 h-2 transition-all duration-300 ease-in-out"
            style={{ width: `${course.progress || 0}%` }}
          />
        </div>
        <span className="block mt-1 text-xs font-medium text-blue-600">
          {course.progress || 0}% Complete
        </span>
      </div>
    </aside>
  );
}
