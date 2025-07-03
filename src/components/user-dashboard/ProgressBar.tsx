interface ProgressBarProps {
  level: number;
  currentXP: number;
  totalXP: number;
}

export default function ProgressBar({
  level,
  currentXP,
  totalXP,
}: ProgressBarProps) {
  const percentage = (currentXP / totalXP) * 100;

  return (
    <div className="p-4 bg-white rounded-xl shadow-sm border">
      <div className="text-sm text-gray-500 mb-1">Your Progress</div>
      <div className="text-3xl font-bold text-orange-500">{Intl.NumberFormat().format(currentXP * level)}</div>

      <div className="flex justify-between text-sm text-gray-600 mt-2 mb-1">
        <span>Level {level}</span>
        <span>
          {currentXP}/{totalXP} XP
        </span>
      </div>

      <div className="w-full h-2.5 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-600 rounded-full transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
