import { LeaderboardUser } from '@/types/leaderboard';

interface Props {
  users: LeaderboardUser[];
}

export default function LeaderboardTable({ users }: Props) {
  const getMedal = (rank: number) => {
    switch (rank) {
      case 1:
        return '🥇';
      case 2:
        return '🥈';
      case 3:
        return '🥉';
      default:
        return `#${rank}`;
    }
  };

  return (
    <div className="bg-white mt-6 rounded-lg shadow-md w-full overflow-hidden">
      {/* Header */}
      <div className="bg-blue-800 text-white p-4 rounded-t-lg">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          🏆 Top Performers
        </h3>
      </div>

      {/* Desktop Table */}
      <table className="hidden sm:table w-full text-sm">
        <thead className="bg-gray-50 text-gray-600">
          <tr>
            <th className="py-3 px-4 text-left">Rank</th>
            <th className="py-3 px-4 text-left">User</th>
            <th className="py-3 px-4 text-center">Points</th>
            <th className="py-3 px-4 text-center">Badges</th>
            <th className="py-3 px-4 text-center">Progress</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr
              key={user.id}
              className="border-t hover:bg-gray-50 transition-colors"
            >
              <td className="py-3 px-4 text-orange-600 font-semibold">
                {getMedal(user.rank)}
              </td>
              <td className="py-3 px-4 flex items-center gap-3">
                <img
                  src={user.avatarUrl}
                  alt={user.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <span className="text-gray-800">{user.name}</span>
              </td>
              <td className="py-3 px-4 text-center text-orange-600 font-medium">
                {user.points.toLocaleString()}
              </td>
              <td className="py-3 px-4 text-center text-orange-600 font-medium">
                {user.badges}
              </td>
              <td className="py-3 px-4">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${user.progress}%` }}
                  />
                </div>
                <span className="text-xs text-gray-600 mt-1 block">
                  {user.progress}%
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Mobile Cards */}
      <div className="sm:hidden px-4 py-2">
        {users.map((user) => (
          <div
            key={user.id}
            className="border rounded-lg p-4 mb-3 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <img
                  src={user.avatarUrl}
                  alt={user.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-800">{user.name}</p>
                  <p className="text-xs text-gray-500">{getMedal(user.rank)}</p>
                </div>
              </div>
              <div className="text-sm font-medium text-orange-600">
                {user.points.toLocaleString()} pts
              </div>
            </div>
            <div className="flex justify-between text-xs text-gray-600 mt-2">
              <span>🏆 {user.badges} Badges</span>
              <span>📈 {user.progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div
                className="bg-blue-600 h-2 rounded-full"
                style={{ width: `${user.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
