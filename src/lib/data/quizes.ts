import { Quiz } from '@/types/quiz';

const quizData: Record<string, Quiz> = {
  'lesson-1': {
    lessonId: 'lesson-1',
    questions: [
      {
        id: 'q1',
        question: 'What is JavaScript primarily used for?',
        options: ['Styling webpages', 'Creating databases', 'Client-side interactivity', 'Writing server software only'],
        correctAnswer: 'Client-side interactivity',
        explanation: 'JavaScript is mainly used for adding interactive behavior to web pages.',
      },
      {
        id: 'q2',
        question: 'Which tag is used to include JavaScript in HTML?',
        options: ['<js>', '<script>', '<javascript>', '<code>'],
        correctAnswer: '<script>',
        explanation: 'The <script> tag is used to embed JavaScript code in HTML documents.',
      },
    ],
  },

  'lesson-2': {
    lessonId: 'lesson-2',
    questions: [
      {
        id: 'q1',
        question: 'Which of the following is a valid JavaScript variable name?',
        options: ['2names', '_name', 'full-name', 'first name'],
        correctAnswer: '_name',
        explanation: 'Variable names can start with letters, $, or _ — not with numbers or include spaces or hyphens.',
      },
      {
        id: 'q2',
        question: 'What is the result of 1 + "1" in JavaScript?',
        options: ['2', '11', 'NaN', 'Error'],
        correctAnswer: '11',
        explanation: 'JavaScript performs string concatenation when a number and string are added.',
      },
    ],
  },

  'lesson-3': {
    lessonId: 'lesson-3',
    questions: [
      {
        id: 'q1',
        question: 'Which keyword is used to declare a constant in JavaScript?',
        options: ['var', 'let', 'const', 'define'],
        correctAnswer: 'const',
        explanation: '`const` is used for variables whose values should not change.',
      },
      {
        id: 'q2',
        question: 'What data type is the value `true` in JavaScript?',
        options: ['Number', 'String', 'Boolean', 'Object'],
        correctAnswer: 'Boolean',
        explanation: '`true` and `false` are Boolean values.',
      },
    ],
  },
};

export async function getQuizByLessonId(lessonId: string): Promise<Quiz | null> {
  return quizData[lessonId] ?? null;
}
