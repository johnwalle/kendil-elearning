import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaStar } from 'react-icons/fa';

interface InstructorSectionProps {
  name: string;
  title: string;
  rating: number;
  bio: string;
  imageUrl: string;
}

const InstructorSection: React.FC<InstructorSectionProps> = ({
  name,
  title,
  rating,
  bio,
  imageUrl,
}) => {
  return (
    <section className="mt-10 px-6 py-8 bg-white rounded-2xl shadow-md max-w-3xl mx-auto">
      <h2 className="text-xl sm:text-2xl font-bold mb-6 text-gray-900">Your Instructor</h2>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
        <img
          src={imageUrl}
          alt={name}
          className="w-20 h-20 rounded-full object-cover border-2 border-indigo-200"
        />
        <div className="flex-1 space-y-2">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
            <p className="text-indigo-600 text-sm font-medium">{title}</p>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded font-medium text-xs">
              Top Instructor
            </span>
            <span className="flex items-center gap-1 text-gray-700 font-medium">
              <FaStar className="text-yellow-500" />
              {rating.toFixed(1)} Rating
            </span>
          </div>

          <p className="text-gray-700 text-sm leading-relaxed">{bio}</p>

          <div className="flex items-center gap-4 pt-2 text-gray-600">
            <a href="#" aria-label="LinkedIn">
              <FaLinkedin className="hover:text-indigo-600" />
            </a>
            <a href="#" aria-label="GitHub">
              <FaGithub className="hover:text-indigo-600" />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter className="hover:text-indigo-600" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorSection;
