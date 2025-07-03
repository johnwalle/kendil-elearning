import { LeaderboardUser } from '@/types/leaderboard';

interface Props {
  user: LeaderboardUser;
}

export default function LeaderboardCard({ user }: Props) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between bg-white p-6 rounded-2xl shadow-md w-full max-w-5xl mx-auto mt-6 space-y-6 sm:space-y-0 sm:space-x-6">

      {/* Profile Section */}
      <div className="flex items-center space-x-4 w-full sm:w-auto">
        <img
          src={user.avatarUrl}
          alt={user.name}
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-orange-500 object-cover"
        />
        <div>
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
            {user.name}
          </h2>
          <p className="text-sm text-gray-500">{user.role}</p>
          <div className="mt-2 flex flex-wrap items-center gap-2 text-xs font-semibold">
            <span className="bg-orange-500 text-white px-2 py-1 rounded-full">
              Rank #{user.rank}
            </span>
            <span className="text-orange-600 text-sm font-bold">
              {user.points.toLocaleString()} points
            </span>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="flex flex-wrap sm:flex-nowrap justify-center sm:justify-end gap-4 w-full sm:w-auto">
        {/* Badges */}
        <div className="bg-blue-50 rounded-lg px-4 py-3 w-24 text-center">
          <div className="text-xl font-semibold text-orange-500">
            🏆
          </div>
          <div className="text-xl font-semibold text-orange-500">
            {user.badges}
          </div>
          <div className="text-xs text-gray-500 mt-1">Badges</div>
        </div>

        {/* Courses */}
        <div className="bg-blue-50 rounded-lg px-4 py-3 w-24 text-center">
          <div className="text-xl font-semibold text-blue-700">
            📘
          </div>
          <div className="text-2xl font-semibold text-blue-700">
            {user.numberOfCourses}
          </div>
          <div className="text-xs text-gray-500 mt-1">Courses</div>
        </div>

        {/* Streak */}
        <div className="bg-blue-50 rounded-lg px-4 py-3 w-24 text-center">
          <div className="text-xl font-semibold text-orange-500">
            🔥
          </div>
          <div className="text-xl font-semibold text-orange-500">
            {user.streak}
          </div>
          <div className="text-xs text-gray-500 mt-1">Day Streak</div>
        </div>
      </div>
    </div>
  );
}
