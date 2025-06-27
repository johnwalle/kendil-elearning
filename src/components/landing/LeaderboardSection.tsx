'use client';

import Image from 'next/image';

const badges = [
  { label: 'Expert', icon: '🏆' },
  { label: 'Achiever', icon: '🏅' },
  { label: 'Rising Star', icon: '⭐' },
];

const topLearners = [
  {
    name: 'Emma Wilson',
    avatar:
      'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg',
    points: 2450,
    rankIcon: '🥇',
  },
  {
    name: 'Alex Rivera',
    avatar:
      'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg',
    points: 2200,
    rankIcon: '🥈',
  },
  {
    name: 'Lisa Chen',
    avatar:
      'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg',
    points: 1980,
    rankIcon: '🥉',
  },
];

const LeaderboardSection = () => {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left - Badges */}
        <div className="text-center md:text-left flex-1">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6 leading-tight">
            Level Up Your Learning
          </h2>
          <p className="text-lg md:text-xl font-medium text-gray-700 mb-8">
            Earn badges & climb the leaderboard
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-5">
            {badges.map((badge, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md px-6 py-5 flex flex-col items-center w-32 transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              >
                <div className="text-4xl mb-2">{badge.icon}</div>
                <div className="text-base font-semibold text-gray-800">
                  {badge.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Leaderboard */}
        <div className="bg-white rounded-3xl shadow-xl p-6 w-full max-w-sm">
          <h3 className="text-xl font-semibold text-gray-900 mb-5">
            Top Learners This Week
          </h3>

          <ul className="space-y-5">
            {topLearners.map((user, index) => (
              <li
                key={index}
                className="flex items-center justify-between group"
              >
                <div className="flex items-center gap-4">
                  <span className="text-2xl">{user.rankIcon}</span>
                  <Image
                    src={user.avatar}
                    alt={user.name}
                    width={44}
                    height={44}
                    className="rounded-full border border-gray-300"
                  />
                  <span className="text-gray-800 font-medium text-base">
                    {user.name}
                  </span>
                </div>
                <span className="text-orange-600 font-semibold text-sm">
                  {user.points.toLocaleString()} pts
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default LeaderboardSection;
