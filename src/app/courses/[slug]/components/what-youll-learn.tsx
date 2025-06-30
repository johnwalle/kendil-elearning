import React from 'react';
import { CheckCircle } from 'lucide-react'; // Modern, clean icons

interface WhatYoullLearnProps {
  learnItems: string[];
}

const WhatYoullLearn: React.FC<WhatYoullLearnProps> = ({ learnItems }) => {
  return (
    <section className="bg-white rounded-2xl shadow-md p-6 sm:p-8 mb-10">
      <h2 className="text-xl sm:text-2xl font-bold mb-6 text-gray-900">What You'll Learn</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
        {learnItems.map((item, index) => (
          <li key={index} className="flex items-start space-x-3">
            <CheckCircle className="text-green-600 w-5 h-5 mt-1 flex-shrink-0" />
            <span className="text-gray-800 text-sm sm:text-base">{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default WhatYoullLearn;
