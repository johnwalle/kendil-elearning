export default function Sidebar({
  questions,
  currentIndex,
  answers,
  flagged,
  goTo,
  onSubmit,
}: {
  questions: any[];
  currentIndex: number;
  answers: Record<string, string>;
  flagged: Set<string>;
  goTo: (index: number) => void;
  onSubmit: () => void;
}) {
  const isAnswered = (id: string) => answers[id] !== undefined;

  return (
    <aside className="w-full md:w-72 space-y-6">
      {/* Question Overview */}
      <div className="border rounded-xl p-5 shadow-md bg-white">
        <h3 className="text-base font-semibold text-gray-800 mb-4">
          Question Overview
        </h3>
        <div className="grid grid-cols-5 gap-2 mb-3">
          {questions.map((q, i) => {
            const isCurrent = i === currentIndex;
            const isFlag = flagged.has(q.id);
            const isAns = isAnswered(q.id);

            let baseStyle = 'h-9 w-9 text-sm rounded-md font-semibold flex items-center justify-center';
            let bg = 'bg-gray-100 text-gray-800';
            if (isCurrent) bg = 'bg-blue-700 text-white';
            else if (isFlag) bg = 'bg-orange-500 text-white';
            else if (isAns) bg = 'bg-green-500 text-white';

            return (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`${baseStyle} ${bg} hover:opacity-90 transition`}
              >
                {i + 1}
              </button>
            );
          })}
        </div>

        {/* Legend */}
        <div className="flex text-gray-800 items-center gap-4">
          <div className="flex items-center gap-1 text-xs">
            <div className="w-3 h-3 rounded bg-blue-700" />
            <span>Current</span>
          </div>
          <div className="flex items-center gap-1 text-xs">
            <div className="w-3 h-3 rounded bg-orange-500" />
            <span>Flagged</span>
          </div>
          <div className="flex items-center gap-1 text-xs">
            <div className="w-3 h-3 rounded bg-green-500" />
            <span>Answered</span>
          </div>
        </div>
      </div>

      {/* Progress */}
      <div className="border rounded-xl p-5 shadow-md bg-white space-y-2">
        <h3 className="text-base font-semibold text-gray-800 mb-2">Progress</h3>
        <div className="flex justify-between text-gray-700 text-sm">
          <span>Answered:</span>
          <span className="font-semibold">
            {Object.keys(answers).length}/{questions.length}
          </span>
        </div>
        <div className="flex justify-between text-gray-700 text-sm">
          <span>Flagged:</span>
          <span className="font-semibold">{flagged.size}</span>
        </div>
        <div className="flex justify-between text-gray-700 text-sm">
          <span>Remaining:</span>
          <span className="font-semibold">
            {questions.length - Object.keys(answers).length}
          </span>
        </div>

        <button
          onClick={onSubmit}
          className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white py-2.5 rounded-lg font-semibold text-sm shadow"
        >
          Submit Exam
        </button>
      </div>

      {/* Proctoring */}
      <div className="border rounded-xl p-4 bg-green-50 text-green-800 text-sm shadow-sm">
        <div className="flex items-center gap-2 mb-1">
          <div className="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse" />
          <strong className="font-semibold">Proctoring Active</strong>
        </div>
        <p className="text-xs">
          AI monitoring is active. Please maintain focus on the exam.
        </p>
      </div>
    </aside>
  );
}
