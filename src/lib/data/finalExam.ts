import { FinalExam } from '@/types/finalExam';

const finalExamData: Record<string, FinalExam> = {
  'course-js-fundamentals': {
    courseId: 'course-js-fundamentals',
    questions: [
      {
        id: 'q1',
        question: 'What is the correct syntax to declare a variable in ES6?',
        options: ['var x = 5;', 'let x = 5;', 'const x = 5;', 'Both B and C'],
        correctAnswer: 'Both B and C',
        explanation: '`let` and `const` are preferred in ES6 over `var`.',
      },
      {
        id: 'q2',
        question: 'Which method converts JSON to a JavaScript object?',
        options: ['JSON.parse()', 'JSON.stringify()', 'JSON.toObject()', 'JSON.convert()'],
        correctAnswer: 'JSON.parse()',
        explanation: '`JSON.parse()` is used to convert a JSON string to a JS object.',
      },
      {
        id: 'q3',
        question: 'What is a closure in JavaScript?',
        options: [
          'A function within a function that has access to the parent scope',
          'A loop with break statement',
          'An ES6 module',
          'None of the above',
        ],
        correctAnswer: 'A function within a function that has access to the parent scope',
        explanation: 'Closures allow inner functions to access variables from outer functions.',
      },
      {
        id: 'q4',
        question: 'Which of the following is a primitive data type in JavaScript?',
        options: ['Object', 'Array', 'String', 'Function'],
        correctAnswer: 'String',
        explanation: '`String` is a primitive type; the others are reference types.',
      },
      {
        id: 'q5',
        question: 'What is the output of `typeof null`?',
        options: ['"null"', '"undefined"', '"object"', '"boolean"'],
        correctAnswer: '"object"',
        explanation: 'This is a well-known quirk in JavaScript; `typeof null` returns "object".',
      },
      {
        id: 'q6',
        question: 'Which of these is a correct way to define a function in JavaScript?',
        options: [
          'function myFunc() {}',
          'let myFunc = function() {}',
          'const myFunc = () => {}',
          'All of the above',
        ],
        correctAnswer: 'All of the above',
        explanation: 'All are valid ways to define functions in modern JS.',
      },
      {
        id: 'q7',
        question: 'How do you create an array in JavaScript?',
        options: [
          'let arr = (1, 2, 3);',
          'let arr = [1, 2, 3];',
          'let arr = {1, 2, 3};',
          'let arr = <1, 2, 3>;',
        ],
        correctAnswer: 'let arr = [1, 2, 3];',
        explanation: 'Square brackets `[]` are used to define arrays.',
      },
      {
        id: 'q8',
        question: 'Which keyword is used to check for a specific value and type?',
        options: ['==', '=', '===', '!='],
        correctAnswer: '===',
        explanation: 'The `===` operator checks for both value and type equality.',
      },
      {
        id: 'q9',
        question: 'What does the `this` keyword refer to in a regular function?',
        options: [
          'The function itself',
          'The global object (in non-strict mode)',
          'The parent object',
          'Undefined',
        ],
        correctAnswer: 'The global object (in non-strict mode)',
        explanation: 'In non-strict mode, `this` in a function refers to the global object.',
      },
      {
        id: 'q10',
        question: 'Which method can be used to add a new element to the end of an array?',
        options: ['push()', 'pop()', 'shift()', 'unshift()'],
        correctAnswer: 'push()',
        explanation: '`push()` adds one or more elements to the end of an array.',
      },
    ],
  },
};

export async function getFinalExamByCourseId(courseId: string): Promise<FinalExam | null> {
  return finalExamData[courseId] ?? null;
}
