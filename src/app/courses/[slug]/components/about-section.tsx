import React from 'react';

interface AboutSectionProps {
  overview: string;
  audience: string[];
  benefits: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ overview, audience, benefits }) => {
  return (
    <section className="relative py-10 px-6 sm:px-10 rounded-2xl shadow-xl">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-10 space-y-8">
        <div>
          <h2 className="text-3xl font-extrabold text-black mb-4">About This Course</h2>
          <p className="text-gray-700 text-lg leading-relaxed">{overview}</p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">Who is this course for?</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-base">
            {audience.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">Why take this course?</h3>
          <p className="text-gray-700 text-lg leading-relaxed">{benefits}</p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
