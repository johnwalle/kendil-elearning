export interface Module {
  title: string;               // Title of the module
  lessons: number;             // Number of lessons in the module
  duration: string;            // Duration of the module (e.g., "2h 30m")
  contents?: string[];         // Optional: list of lesson titles or topics
}

export interface Instructor {
  name: string;                // Instructor's full name
  title: string;               // Job title or teaching role
  rating: number;              // Instructor's rating (e.g., 4.9)
  bio: string;                 // Short biography
  imageUrl: string;            // URL to instructor's profile picture
}



export interface Course {
  id: string;                  // Unique course identifier
  slug: string;                // URL-friendly identifier
  category: string;            // Course category (e.g., "Web Development")
  tags: string[];              // Tags like ["Beginner", "Limited Time"]
  title: string;               // Course title
  description: string;         // Short summary of the course
  features?: string[];         // Optional: list of course features
  instructor: Instructor;      // Instructor details
  imageUrl: string;            // Cover image for the course
  rating: number;              // Average course rating
  reviews: number;            // Number of student reviews
  students: number;           // Enrolled student count
  level: string;              // Course difficulty level
  price: number;              // Final/current price
  originalPrice?: number;     // Optional original price for discounts
  hours: number;              // Total duration in hours
  couponsLeft?: number;       // Optional: how many coupons are left
  learnItems?: string[];      // Optional: bullet points of what users will learn
  modules?: Module[];         // Optional: course curriculum
  overview?: string;          // Optional: extended course overview
  audience?: string[];        // Optional: who this course is for
  benefits?: string;          // Optional: why someone should take this course
  bio?: string;               // Optional: extended instructor bio
}
