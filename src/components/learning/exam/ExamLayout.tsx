'use client';

import { useState, useEffect } from 'react';
import QuestionCard from './Questioncard';
import Sidebar from './Sidebar';

export default function ExamLayout({ exam }: { exam: any }) {
  const totalQuestions = exam.questions.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [flagged, setFlagged] = useState<Set<string>>(new Set());
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes in seconds

  const currentQuestion = exam.questions[currentIndex];

  const handleAnswer = (questionId: string, answer: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const toggleFlag = (questionId: string) => {
    setFlagged((prev) => {
      const updated = new Set(prev);
      updated.has(questionId) ? updated.delete(questionId) : updated.add(questionId);
      return updated;
    });
  };

  const goTo = (index: number) => {
    if (index >= 0 && index < totalQuestions) setCurrentIndex(index);
  };

  const handleSubmit = () => {
    alert('⏳ Time is up or exam submitted! ✅');
    // Backend submission here
  };

  // ⏰ Timer Countdown
  useEffect(() => {
    if (timeLeft <= 0) {
      handleSubmit();
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60)
      .toString()
      .padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  return (
    <div className="flex mt-12 flex-col md:flex-row gap-6 max-w-6xl mx-auto py-10 px-4">
      {/* Left */}
      <div className="flex-1 space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl text-gray-800  font-bold">Final Exam</h1>
          <div className="text-sm bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-medium">
            ⏰ {formatTime(timeLeft)}
          </div>
        </div>

        <QuestionCard
          question={currentQuestion}
          index={currentIndex}
          total={totalQuestions}
          answer={answers[currentQuestion.id]}
          onAnswer={handleAnswer}
          onNext={() => goTo(currentIndex + 1)}
          onPrev={() => goTo(currentIndex - 1)}
          onFlag={() => toggleFlag(currentQuestion.id)}
          isFlagged={flagged.has(currentQuestion.id)}
          isFirst={currentIndex === 0}
          isLast={currentIndex === totalQuestions - 1}
        />
      </div>

      {/* Sidebar */}
      <Sidebar
        questions={exam.questions}
        currentIndex={currentIndex}
        answers={answers}
        flagged={flagged}
        goTo={goTo}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
