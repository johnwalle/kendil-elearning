import { Flag } from 'lucide-react';


export default function QuestionCard({
    question,
    index,
    total,
    answer,
    onAnswer,
    onNext,
    onPrev,
    onFlag,
    isFlagged,
    isFirst,
    isLast,
}: {
    question: any;
    index: number;
    total: number;
    answer: string;
    onAnswer: (id: string, answer: string) => void;
    onNext: () => void;
    onPrev: () => void;
    onFlag: () => void;
    isFlagged: boolean;
    isFirst: boolean;
    isLast: boolean;
}) {
    const handleNext = () => {
        onAnswer(question.id, answer); // Save answer on next click
        onNext();
    };

    return (
        <div className="border border-blue-200 rounded-xl p-6 shadow-lg bg-white transform transition-all duration-200 hover:shadow-xl">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-base font-semibold text-gray-800 flex items-center gap-2">
                    <span className="inline-flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full">
                        {index + 1}
                    </span>
                    of {total}
                </h2>
                <button
                    className="flex items-center gap-1.5 text-sm font-medium text-orange-600 cursor-pointer hover:text-orange-700  transition-colors"
                    onClick={onFlag}
                >
                    <Flag
                        className={`w-4 h-4 ${isFlagged ? 'fill-orange-600 stroke-orange-600' : 'stroke-orange-600'
                            }`}
                    />
                    {isFlagged ? 'Unflag' : 'Flag'}
                </button>
            </div>

            <p className="text-xl font-semibold text-gray-900 mb-6">{question.question}</p>

            <ul className="mt-6 space-y-4">
                {question.options.map((option: string, i: number) => (
                    <li key={i}>
                        <label
                            className={`flex items-center gap-4 cursor-pointer border rounded-lg px-5 py-3 
              ${answer === option ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}
              hover:border-blue-300 hover:bg-gray-50 transition-all duration-200`}
                        >
                            <input
                                type="radio"
                                name={`question-${question.id}`}
                                value={option}
                                checked={answer === option}
                                onChange={() => onAnswer(question.id, option)}
                                className="w-4 h-4 accent-blue-500"
                            />
                            <span className="text-gray-800 text-base">{option}</span>
                        </label>
                    </li>
                ))}
            </ul>

            <div className="mt-8 flex justify-between items-center">
                <button
                    onClick={onPrev}
                    disabled={isFirst}
                    className={`text-sm bg-gray-300  px-4 py-2  rounded-md  font-semibold   ${isFirst
                        ? 'text-gray-400 cursor-not-allowed'
                        : 'text-gray-700  cursor-pointer hover:opacity-80 transition-colors duration-200'
                        }`}
                >
                    ← Previous
                </button>
                <button
                    onClick={handleNext}
                    disabled={isLast}
                    className={`px-4 py-2 rounded-md text-white font-semibold ${isLast
                        ? 'bg-orange-400 cursor-not-allowed'
                        : 'bg-orange-500 cursor-pointer  hover:bg-orange-600'
                        } transition-colors duration-200`}
                >
                    Next →
                </button>
            </div>
        </div>
    );
}