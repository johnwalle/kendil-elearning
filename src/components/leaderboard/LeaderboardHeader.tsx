export default function LeaderboardHeader() {
  return (
    <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-14 px-4 text-center rounded-none shadow-md">
      <h1 className="text-3xl font-extrabold flex items-center justify-center gap-2">
        <span role="img" aria-label="trophy">🏆</span> Leaderboard
      </h1>
      <p className="text-base mt-1">Compete with learners worldwide and track your progress on the learning journey</p>
    </div>
  );
}