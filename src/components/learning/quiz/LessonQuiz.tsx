'use client';

import { useState } from 'react';
import { Quiz } from '@/types/quiz';

export default function LessonQuiz({ quiz }: { quiz: Quiz }) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (questionId: string, answer: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-neutral-50 px-0 sm:px-4 flex items-start justify-center">
      <div className="w-full mt-10 bg-white p-8 sm:p-10 rounded-2xl shadow-xl border border-gray-200">
        <h3 className="text-3xl font-bold mb-8 text-gray-900">
          🧠 AI-Generated Quiz
        </h3>

        <div className="space-y-10">
          {quiz.questions.map((q, i) => {
            const isCorrect = answers[q.id] === q.correctAnswer;
            return (
              <div key={q.id}>
                <p className="font-semibold text-lg mb-4 text-gray-800">
                  {i + 1}. {q.question}
                </p>

                <div className="space-y-3">
                  {q.options.map((opt) => (
                    <label
                      key={opt}
                      className={`flex items-center px-4 py-3 border rounded-lg cursor-pointer 
                      ${
                        answers[q.id] === opt
                          ? 'border-orange-500 bg-orange-50'
                          : 'border-gray-300'
                      } 
                      hover:border-orange-400 transition-all duration-200`}
                    >
                      <input
                        type="radio"
                        name={q.id}
                        value={opt}
                        disabled={submitted}
                        onChange={() => handleSelect(q.id, opt)}
                        className="mr-3 accent-orange-500"
                      />
                      <span className="text-gray-700">{opt}</span>
                    </label>
                  ))}
                </div>

                {submitted && (
                  <div
                    className={`mt-3 text-sm font-medium ${
                      isCorrect ? 'text-green-600' : 'text-red-500'
                    }`}
                  >
                    {isCorrect ? '✅ Correct' : `❌ Incorrect. ${q.explanation || ''}`}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {!submitted ? (
          <button
            onClick={handleSubmit}
            className="mt-10 w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl shadow-md"
          >
            🚀 Submit Quiz
          </button>
        ) : (
          <div className="mt-10 text-center">
            <p className="text-lg font-semibold text-gray-800">
              🎉 Quiz Submitted!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
