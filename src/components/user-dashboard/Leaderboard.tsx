'use client';

import Image from 'next/image';

interface User {
  id: number;
  name: string;
  avatarUrl?: string;
  xp: number;
  isCurrentUser?: boolean;
}

const users: User[] = [
  {
    id: 1,
    name: 'Alex Chen',
    avatarUrl: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-7.jpg',
    xp: 3250,
  },
  {
    id: 2,
    name: 'Emma Wilson',
    avatarUrl: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-7.jpg',
    xp: 2890,
  },
  {
    id: 3,
    name: 'You',
    avatarUrl: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-7.jpg',
    xp: 2450,
    isCurrentUser: true,
  },
];

const rankColors = ['bg-yellow-400', 'bg-gray-300', 'bg-orange-400'];
const textColors = ['text-yellow-700', 'text-gray-600', 'text-orange-600'];
const borderColors = ['border-transparent', 'border-transparent', 'border-orange-400'];

export default function LeaderboardCard() {
  return (
    <div className="p-4 bg-white rounded-xl border shadow-sm w-full max-w-sm">
      <h2 className="text-sm font-semibold text-blue-900 mb-3">Leaderboard</h2>

      <div className="flex flex-col gap-3">
        {users.map((user, index) => (
          <div
            key={user.id}
            className={`flex items-center justify-between rounded-lg px-4 py-2 ${
              user.isCurrentUser ? 'border-2 border-orange-400 bg-orange-50' : 'bg-gray-50'
            }`}
          >
            {/* Rank circle */}
            <div className="flex items-center gap-3">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white ${rankColors[index]}`}
              >
                {index + 1}
              </div>

              {/* Avatar + Name */}
              <div className="flex items-center gap-2">
                {user.avatarUrl ? (
                  <Image
                    src={user.avatarUrl}
                    alt={user.name}
                    width={32}
                    height={32}
                    className="rounded-full object-cover"
                  />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-gray-300 text-white flex items-center justify-center text-sm font-semibold">
                    {user.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')
                      .slice(0, 2)
                      .toUpperCase()}
                  </div>
                )}
                <p className="text-sm font-medium text-gray-800">{user.name}</p>
              </div>
            </div>

            {/* XP Points */}
            <div className={`text-sm font-semibold ${textColors[index]}`}>
              {user.xp.toLocaleString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
