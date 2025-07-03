import LeaderboardHeader from '@/components/leaderboard/LeaderboardHeader';
import LeaderboardCard from '@/components/leaderboard/LeaderboardCard';
import LeaderboardTable from '@/components/leaderboard/LeaderboardTable';
import { leaderboardUsers } from '@/lib/data/leaderboard';

export default function LeaderboardPage() {
  const currentUser = leaderboardUsers.find((user) => user.id === 'u3') ?? leaderboardUsers[3]; // Example user

  return (
    <div className="max-w-5xl mt-8 mx-auto px-4 py-8">
      <LeaderboardHeader />
      <LeaderboardCard user={currentUser} />
      <LeaderboardTable users={leaderboardUsers} />
    </div>
  );
}
