import { Course } from '@/types/certificate';
import { GraduationCap } from 'lucide-react';

interface CertificateCardProps {
    course: Course;
}

export default function CertificateCard({ course }: CertificateCardProps) {
    return (
        <div className="bg-white border border-blue-200 rounded-xl shadow-md p-6 sm:p-10 max-w-3xl mx-auto text-center relative">
            {/* Orange Badge Icon */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="bg-white p-2 rounded-full border border-orange-300 shadow">
                    <span className="text-orange-500 text-2xl sm:text-3xl">🏅</span>
                </div>
            </div>

            {/* Header */}
            <h2 className="text-lg sm:text-xl font-bold text-blue-900 mt-6">
                Certificate of Completion
            </h2>
            <div className="w-10 h-1 bg-orange-500 mx-auto my-2 rounded-sm" />

            <p className="text-gray-600 mt-4 mb-2 text-sm sm:text-base">This is to certify that</p>

            {/* Student Name */}
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{course.studentName}</h3>

            <p className="text-gray-700 mb-4 text-sm sm:text-base">
                has successfully completed the course
            </p>

            {/* Course Title */}
            <h4 className="text-base sm:text-lg font-semibold text-blue-700 mb-6">
                {course.title}
            </h4>

            {/* Info Grid */}
            <div className="grid grid-cols-2 gap-4 text-xs sm:text-sm border-y border-gray-200 py-4 mb-4">
                <div>
                    <p className="text-gray-600">Points Earned</p>
                    <p className="text-orange-600 font-bold text-base sm:text-lg">{course.points}</p>
                </div>
                <div>
                    <p className="text-gray-600">Date Completed</p>
                    <p className="text-gray-900 font-bold text-base sm:text-lg">
                        {course.dateCompleted}
                    </p>
                </div>
            </div>

            {/* Footer Signatures */}
            <div className="flex justify-between items-center mt-8 text-xs sm:text-sm text-gray-600 pt-4 border-t border-gray-200">
                <div className="text-left">
                    <div className="h-6 w-24 sm:w-32 border-b border-gray-400 mb-1"></div>
                    <p>Instructor Signature</p>
                </div>
                <div className="text-center">
                    <div className="flex items-center justify-center text-blue-800 font-semibold gap-1">
                        <GraduationCap className="w-4 h-4" />
                        <span className="text-xs sm:text-sm">Kendil E-learning</span>
                    </div>
                    <p className="text-[10px] sm:text-xs text-gray-500">Platform Director</p>
                </div>
                <div className="text-right">
                    <div className="h-6 w-24 sm:w-32 border-b border-gray-400 mb-1"></div>
                    <p>Platform Director</p>
                </div>
            </div>
        </div>
    );
}
