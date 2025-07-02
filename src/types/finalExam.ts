// types/finalExam.ts

export interface FinalExam {
  courseId: string;
  questions: FinalExamQuestion[];
}

export interface FinalExamQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation?: string;
}
