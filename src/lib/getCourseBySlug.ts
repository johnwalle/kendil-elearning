import { Course } from '@/types/courses';

export const getCourseBySlug = async (slug: string): Promise<Course | null> => {
  // Mock API - Replace with your DB or CMS fetch
  return {
    slug,
    title: 'Complete Web Development Bootcamp 2024',
    category: 'Web Development',
    level: 'Beginner',
    price: 199.99,
    discount: 75,
    rating: 4.9,
    ratingCount: 2847,
    students: 15234,
    previewImage: '/images/code-preview.jpg',
    instructor: {
      name: 'John Martinez',
      avatar: '/images/john.png',
      bio: `John has 8+ years of experience building web apps for Fortune 500 companies. He’s helped over 50,000 students.`,
      rating: 4.9,
    },
    coupon: 'LIMITED100',
    weeksToComplete: 12,
    language: 'English',
    certificate: true,
    mobileAccess: true,
    learn: [
      'Build responsive websites with HTML, CSS, and JavaScript',
      'Create full-stack applications with Node.js',
      'Work with databases and APIs',
      'Master React.js and modern frontend frameworks',
      'Deploy applications to cloud platforms',
      'Build a professional portfolio',
    ],
    curriculum: [
      {
        title: 'Module 1: HTML & CSS Fundamentals',
        totalDuration: '2h 30m',
        lessons: Array(8).fill({ title: 'Lesson Title', duration: '15m', type: 'video' }),
      },
      {
        title: 'Module 2: JavaScript Essentials',
        totalDuration: '4h 15m',
        lessons: Array(12).fill({ title: 'Lesson Title', duration: '20m', type: 'video' }),
      },
    ],
    description:
      'Transform your career with the most comprehensive web development course available. This bootcamp takes you from complete beginner to job-ready developer in just 12 weeks.',
    targetAudience: [
      'Complete beginners with no coding experience',
      'Career changers looking to enter tech',
      'Students wanting to build real-world projects',
      'Anyone passionate about creating for the web',
    ],
    reason:
      'Our hands-on approach ensures you build actual projects while learning. You’ll graduate with a portfolio that showcases your skills to potential employers.',
  };
};
