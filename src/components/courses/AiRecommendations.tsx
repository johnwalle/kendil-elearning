import { RecommendationCard } from "./RecommendationCard";

interface RecommendationsProps {
  userId: string;
}

export interface Course {
  id: string;
  slug: string;
  category: string;
  title: string;
  description: string;
  instructor: string;
  imageUrl: string;
  rating: number;
  enrolled: number;
  level: string;
  price: number;
  hours: number;
  reason: string;
}

const sampleCourses: Course[] = [
  {
    id: "course-1",
    slug: "react-development",
    category: "React Development",
    title: "Build modern web applications",
    description: "...",
    instructor: "Jane Doe",
    imageUrl: "/images/react-course.jpg",
    rating: 4.7,
    enrolled: 1200,
    level: "beginner",
    price: 49,
    hours: 15,
    reason: "Based on your JavaScript interest",
  },
  {
    id: "course-2",
    slug: "mobile-app-design",
    category: "Mobile App Design",
    title: "Design beautiful mobile interfaces",
    description: "...",
    instructor: "John Smith",
    imageUrl: "/images/mobile-design.jpg",
    rating: 4.8,
    enrolled: 950,
    level: "intermediate",
    price: 79,
    hours: 20,
    reason: "Complements your UI/UX skills",
  },
  {
    id: "course-3",
    slug: "ai-fundamentals",
    category: "AI Fundamentals",
    title: "Introduction to artificial intelligence",
    description: "...",
    instructor: "Alice Johnson",
    imageUrl: "/images/ai-course.jpg",
    rating: 4.6,
    enrolled: 800,
    level: "beginner",
    price: 0,
    hours: 12,
    reason: "Trending in your field",
  },
];

export function Recommendations({ userId }: RecommendationsProps) {
  const recommendations: Course[] = sampleCourses;

  if (!recommendations.length) return null;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-lg font-semibold text-indigo-900 mb-4">AI Recommendations</h2>
      <p className="text-sm text-gray-600 mb-6">Courses picked just for you based on your interests</p>
      <div className="flex flex-col gap-6">
        {recommendations.map((course) => (
          <RecommendationCard key={course.id} {...course} />
        ))}
      </div>
    </div>
  );
}