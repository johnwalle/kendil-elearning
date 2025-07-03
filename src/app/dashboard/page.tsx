'use client';

import React, { useState } from 'react';
import DashboardHeader from '@/components/user-dashboard/DashboardHeader';
import Sidebar from '@/components/user-dashboard/Sidebar';
import CourseProgressCard from '@/components/user-dashboard/CourseProgressCard';
import Badges from '@/components/user-dashboard/Badges';
import Leaderboard from '@/components/user-dashboard/Leaderboard';
import ProgressBar from '@/components/user-dashboard/ProgressBar';
import Notifications from '@/components/user-dashboard/Notifications';

const mockCourses = [
  {
    title: 'JavaScript Fundamentals',
    instructor: 'Dr. Michael Chen',
    progress: 75,
    completedLessons: 12,
    totalLessons: 16,
    timeSpent: '24h 30m',
    quizScore: 92,
    instructorAvatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-7.jpg',
  },
  {
    title: 'React Development',
    instructor: 'Prof. Lisa White',
    progress: 60,
    completedLessons: 10,
    totalLessons: 20,
    timeSpent: '18h 10m',
    quizScore: 85,
    instructorAvatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-8.jpg',
  },
  {
    title: 'Python for Data Science',
    instructor: 'Dr. John Lee',
    progress: 100,
    completedLessons: 20,
    totalLessons: 20,
    timeSpent: '32h 00m',
    quizScore: 98,
    instructorAvatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-9.jpg',
  },
];

const Dashboard = () => {
  const [selectedCourse, setSelectedCourse] = useState(mockCourses[0]);

  const userLevel = 8;
  const userCurrentXP = 450;
  const userTotalXP = 500;

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[240px_1fr] lg:grid-cols-[260px_1fr_260px] gap-6 px-4 sm:px-6 lg:px-8 py-6">
        <aside className="order-2 md:order-1">
          <Sidebar courses={mockCourses} onCourseSelect={setSelectedCourse} />
        </aside>

        <main className="space-y-6 order-1 md:order-2">
          <CourseProgressCard {...selectedCourse} />
          <Notifications />
        </main>

        <aside className="space-y-6 order-3 hidden lg:block">
          <section className="bg-white rounded-xl shadow-sm p-4 sm:p-6 border">
            <ProgressBar level={userLevel} currentXP={userCurrentXP} totalXP={userTotalXP} />
          </section>

          <Badges />
          <Leaderboard />
        </aside>
      </div>
    </div>
  );
};

export default Dashboard;
