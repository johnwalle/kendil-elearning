import { CourseCard } from "./CourseCard";
import { type Course } from "@/types/courses";

interface CourseGridProps {
  query: string;
  category: string;
  level: string;
  price: string; // "free" or "paid"
  page: number;
}

// Temporary mock data
const sampleCourses: Course[] = [

  {
    id: `course-234832`,
    slug: 'web-design-mastery',
    category: 'Web Development',
    tags: ['Beginner', 'Limited Time'],
    title: 'Complete Web Development Bootcamp 2024',
    description: 'A comprehensive bootcamp to master web development from scratch.',
    features: ['12 weeks to complete', 'Beginner level', 'English', 'Certificate included', 'Mobile & desktop access'],
    instructor: {
      name: 'John Martinez',
      title: 'Senior Full-Stack Developer',
      rating: 4.9,
      bio: 'John has over 10 years of experience in web development, specializing in full-stack technologies. He has taught thousands of students online and is passionate about making coding accessible to everyone.',
      imageUrl: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg',
    },
    imageUrl: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg',
    rating: 4.9,
    reviews: 2847,
    students: 15234,
    level: 'Beginner',
    price: 49.99,
    originalPrice: 199.99,
    hours: 40,
    couponsLeft: 5,
    learnItems: [
      'Build responsive websites with HTML, CSS, and JavaScript',
      'Create full-stack applications with Node.js',
      'Work with databases and APIs',
      'Master React.js and modern frontend frameworks',
      'Deploy applications to cloud platforms',
      'Build a professional portfolio',
    ],
    modules: [
      {
        title: 'HTML & CSS Fundamentals',
        lessons: 8,
        duration: '2h 30m',
        contents: ['Introduction', 'HTML Basics', 'CSS Styling', 'Flexbox & Grid'],
      },
      {
        title: 'JavaScript Essentials',
        lessons: 12,
        duration: '4h 15m',
        contents: ['Variables & Data Types', 'Functions', 'DOM Manipulation', 'ES6+ Features'],
      },
    ],
    overview:
      'Transform your career with the most comprehensive web development course available. This bootcamp takes you from complete beginner to job-ready developer in just 12 weeks.',
    audience: [
      'Complete beginners with no coding experience',
      'Career changers looking to enter tech',
      'Students wanting to build real-world projects',
      'Anyone passionate about creating for the web',
    ],
    benefits:
      "Our hands-on approach ensures you build actual projects while learning. You'll graduate with a portfolio that showcases your skills to potential employers.",
    bio: "John has 8+ years of experience building web applications for Fortune 500 companies. He's passionate about teaching and has helped over 50,000 students launch their tech careers.",
  },
  {
    id: `course-23004832`,
    slug: 'web-design-mastery',
    category: 'Web Development',
    tags: ['Beginner', 'Limited Time'],
    title: 'Complete Web Development Bootcamp 2024',
    description: 'A comprehensive bootcamp to master web development from scratch.',
    features: ['12 weeks to complete', 'Beginner level', 'English', 'Certificate included', 'Mobile & desktop access'],
    instructor: {
      name: 'John Martinez',
      title: 'Senior Full-Stack Developer',
      rating: 4.9,
      bio: 'John has over 10 years of experience in web development, specializing in full-stack technologies. He has taught thousands of students online and is passionate about making coding accessible to everyone.',
      imageUrl: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg',
    },
    imageUrl: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg',
    rating: 4.9,
    reviews: 2847,
    students: 15234,
    level: 'Beginner',
    price: 49.99,
    originalPrice: 199.99,
    hours: 40,
    couponsLeft: 0,
    learnItems: [
      'Build responsive websites with HTML, CSS, and JavaScript',
      'Create full-stack applications with Node.js',
      'Work with databases and APIs',
      'Master React.js and modern frontend frameworks',
      'Deploy applications to cloud platforms',
      'Build a professional portfolio',
    ],
    modules: [
      {
        title: 'HTML & CSS Fundamentals',
        lessons: 8,
        duration: '2h 30m',
        contents: ['Introduction', 'HTML Basics', 'CSS Styling', 'Flexbox & Grid'],
      },
      {
        title: 'JavaScript Essentials',
        lessons: 12,
        duration: '4h 15m',
        contents: ['Variables & Data Types', 'Functions', 'DOM Manipulation', 'ES6+ Features'],
      },
    ],
    overview:
      'Transform your career with the most comprehensive web development course available. This bootcamp takes you from complete beginner to job-ready developer in just 12 weeks.',
    audience: [
      'Complete beginners with no coding experience',
      'Career changers looking to enter tech',
      'Students wanting to build real-world projects',
      'Anyone passionate about creating for the web',
    ],
    benefits:
      "Our hands-on approach ensures you build actual projects while learning. You'll graduate with a portfolio that showcases your skills to potential employers.",
    bio: "John has 8+ years of experience building web applications for Fortune 500 companies. He's passionate about teaching and has helped over 50,000 students launch their tech careers.",
  },
  {
    id: `course-234887632`,
    slug: 'web-design-mastery',
    category: 'Web Development',
    tags: ['Beginner', 'Limited Time'],
    title: 'Complete Web Development Bootcamp 2024',
    description: 'A comprehensive bootcamp to master web development from scratch.',
    features: ['12 weeks to complete', 'Beginner level', 'English', 'Certificate included', 'Mobile & desktop access'],
    instructor: {
      name: 'John Martinez',
      title: 'Senior Full-Stack Developer',
      rating: 4.9,
      bio: 'John has over 10 years of experience in web development, specializing in full-stack technologies. He has taught thousands of students online and is passionate about making coding accessible to everyone.',
      imageUrl: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg',
    },
    imageUrl: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg',
    rating: 4.9,
    reviews: 2847,
    students: 15234,
    level: 'Beginner',
    price: 49.99,
    originalPrice: 199.99,
    hours: 40,
    couponsLeft: 8,
    learnItems: [
      'Build responsive websites with HTML, CSS, and JavaScript',
      'Create full-stack applications with Node.js',
      'Work with databases and APIs',
      'Master React.js and modern frontend frameworks',
      'Deploy applications to cloud platforms',
      'Build a professional portfolio',
    ],
    modules: [
      {
        title: 'HTML & CSS Fundamentals',
        lessons: 8,
        duration: '2h 30m',
        contents: ['Introduction', 'HTML Basics', 'CSS Styling', 'Flexbox & Grid'],
      },
      {
        title: 'JavaScript Essentials',
        lessons: 12,
        duration: '4h 15m',
        contents: ['Variables & Data Types', 'Functions', 'DOM Manipulation', 'ES6+ Features'],
      },
    ],
    overview:
      'Transform your career with the most comprehensive web development course available. This bootcamp takes you from complete beginner to job-ready developer in just 12 weeks.',
    audience: [
      'Complete beginners with no coding experience',
      'Career changers looking to enter tech',
      'Students wanting to build real-world projects',
      'Anyone passionate about creating for the web',
    ],
    benefits:
      "Our hands-on approach ensures you build actual projects while learning. You'll graduate with a portfolio that showcases your skills to potential employers.",
    bio: "John has 8+ years of experience building web applications for Fortune 500 companies. He's passionate about teaching and has helped over 50,000 students launch their tech careers.",
  },
];

export function CourseGrid({ query, category, level, price, page }: CourseGridProps) {
  // const filteredCourses = sampleCourses.filter((course) => {
  //   const matchesQuery = !query || course.title.toLowerCase().includes(query.toLowerCase());
  //   const matchesCategory = !category || course.category.toLowerCase() === category.toLowerCase();
  //   const matchesLevel = !level || course.level.toLowerCase() === level.toLowerCase();
  //   const matchesPrice = !price || (price === "free" ? course.price === 0 : course.price > 0);

  //   return matchesQuery && matchesCategory && matchesLevel && matchesPrice;
  // });

  // if (!filteredCourses.length) {
  //   return (
  //     <p className="text-muted-foreground text-gray-500 text-center py-10 text-lg">
  //       No courses match your filters.
  //     </p>
  //   );
  // }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4 bg-gradient-to-b from-gray-50 to-white rounded-xl shadow-lg">
      {sampleCourses.map((course) => (
        <CourseCard
          key={course.id}
          id={course.id}
          title={course.title}
          slug={course.slug}
          category={course.category}
          level={course.level}
          price={course.price}
          hours={course.hours}
          imageUrl={course.instructor.imageUrl}
          instructor={course.instructor}
          couponsLeft={course.couponsLeft}
        />
      ))}
    </div>
  );
}
