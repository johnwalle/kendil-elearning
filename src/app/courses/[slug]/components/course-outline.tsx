"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp, BookOpen } from "lucide-react";

interface Module {
  title: string;
  lessons: number;
  duration: string;
  contents?: string[]; // Optional: contents shown on expand
}

interface CourseOutlineProps {
  modules: Module[];
}

const CourseOutline: React.FC<CourseOutlineProps> = ({ modules }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleModule = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white rounded-2xl shadow-md p-6 sm:p-8 mb-10">
      <h2 className="text-xl sm:text-2xl font-bold mb-6 text-gray-900">
        Course Curriculum
      </h2>
      <div className="space-y-4">
        {modules.map((module, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            {/* Module Header */}
            <button
              className="flex justify-between items-center w-full px-4 py-4 bg-gray-50 hover:bg-gray-100 transition text-left"
              onClick={() => toggleModule(index)}
            >
              <div className="flex items-center space-x-3">
                <BookOpen className="text-purple-600 w-5 h-5" />
                <span className="font-medium text-gray-800">
                  Module {index + 1}: {module.title}
                </span>
                <span className="text-gray-500 text-sm hidden sm:inline">
                  ({module.lessons} lessons • {module.duration})
                </span>
              </div>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </button>

            {/* Contents */}
            {openIndex === index && module.contents && (
              <ul className="bg-white px-6 pb-4 text-sm text-gray-800 space-y-3">
                {module.contents.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 hover:bg-gray-50 p-1 rounded-md transition"
                  >
                    <span className="text-purple-600 font-semibold">
                      {idx + 1}.
                    </span>
                    <div className="flex-1">{item}</div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CourseOutline;
