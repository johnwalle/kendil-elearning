import { LeaderboardUser } from '@/types/leaderboard';

export const leaderboardUsers: LeaderboardUser[] = [
  {
    id: 'u1',
    name: 'Alex Chen',
    avatarUrl: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg',
    rank: 1,
    points: 4850,
    numberOfCourses: 8,
    badges: 15,
    progress: 95,
    streak: 24,
    role: 'Top Performer',
  },
  {
    id: 'u2',
    name: 'Maria Rodriguez',
    avatarUrl: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg',
    rank: 2,
    points: 4720,
    numberOfCourses: 7,
    badges: 12,
    progress: 88,
    streak: 20,
    role: 'Advanced Learner',
  },
  {
    id: 'u3',
    name: 'David Kim',
    avatarUrl: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg',
    rank: 3,
    points: 4590,
    numberOfCourses: 6,
    badges: 14,
    progress: 92,
    streak: 22,
    role: 'Advanced Learner',
  },
  // ... more users
];
