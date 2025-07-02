// types/quiz.ts
export interface Quiz {
  lessonId: string;
  questions: {
    id: string;
    question: string;
    options: string[];
    correctAnswer: string;
    explanation?: string;
  }[];
}
