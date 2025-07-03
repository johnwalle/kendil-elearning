export interface LeaderboardUser {
  id: string;
  name: string;
  avatarUrl: string;
  numberOfCourses?: number; // Optional, used in some components
  rank: number;
  points: number;
  badges: number;
  progress: number;
  streak: number;
  role: string;
}
