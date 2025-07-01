import { Course } from '@/types/certificate';

interface CompletedCoursesProps {
    courses: Course[];
    onSelectCourse: (id: string) => void;
}

export default function CompletedCourses({
    courses,
    onSelectCourse,
}: CompletedCoursesProps) {
    return (
        <div className="mt-10 border border-gray-200 rounded-2xl p-6 bg-white">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">
                Your Completed Courses
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {courses.map((course) => (
                    <div
                        key={course.id}
                        onClick={() => onSelectCourse(course.id)}
                        className="cursor-pointer rounded-xl border border-gray-200 p-5 bg-white shadow-sm hover:shadow-md transition"
                    >
                        <div className="flex items-start gap-3 mb-4">
                            <span className="text-yellow-500 text-2xl mr-3">📜</span>
                            <div>
                                <h3 className="text-sm font-semibold text-gray-900">
                                    {course.title}
                                </h3>
                                <p className="text-xs text-gray-500">
                                    Completed {course.dateCompleted}
                                </p>
                            </div>
                        </div>

                        <div className="flex justify-between items-center">
                            <p className="text-sm text-orange-600 font-medium">
                                {course.points} points
                            </p>
                            <button className="text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline">
                                View Certificate
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
