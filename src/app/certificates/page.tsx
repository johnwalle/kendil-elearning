'use client';

import { useRef } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import jsPDF from 'jspdf';
import { toPng } from 'html-to-image';
import { Download, Share2 } from 'lucide-react';

import CertificateCard from './CertificateCard';
import CompletedCourses from '@/components/learning/CompletedCourses';

export default function CertificatesPage() {
    const certificateRef = useRef<HTMLDivElement>(null);
    const searchParams = useSearchParams();
    const router = useRouter();

    const courses = [
        {
            id: '1',
            title: 'Advanced JavaScript',
            points: 850,
            dateCompleted: 'Dec 15, 2024',
            studentName: 'Sarah Johnson',
        },
        {
            id: '2',
            title: 'React Fundamentals',
            points: 720,
            dateCompleted: 'Nov 28, 2024',
            studentName: 'Sarah Johnson',
        },
        {
            id: '3',
            title: 'Python for Beginners',
            points: 650,
            dateCompleted: 'Oct 12, 2024',
            studentName: 'Sarah Johnson',
        },
    ];

    const sortedCourses = [...courses].sort(
        (a, b) => new Date(b.dateCompleted).getTime() - new Date(a.dateCompleted).getTime()
    );

    const courseNameParam = searchParams.get('course_name');
    const selectedCourse =
        sortedCourses.find((c) => c.title === courseNameParam) || sortedCourses[0];

    const handleSelectCourse = (courseTitle: string) => {
        const encoded = encodeURIComponent(courseTitle);
        router.push(`?course_name=${encoded}`);
    };

    const handleDownload = async (format: 'png' | 'pdf' = 'pdf') => {
        if (!certificateRef.current) return;

        try {
            const element = certificateRef.current;
            const fileName = `${selectedCourse.title.replace(/\s+/g, '_')}_certificate`;

            const dataUrl = await toPng(element, {
                quality: 1,
                pixelRatio: 2,
                backgroundColor: '#ffffff',
            });

            if (format === 'png') {
                const link = document.createElement('a');
                link.download = `${fileName}.png`;
                link.href = dataUrl;
                link.click();
            } else {
                const pdf = new jsPDF({
                    orientation: 'landscape',
                    unit: 'mm',
                });

                const imgProps = pdf.getImageProperties(dataUrl);
                const pdfWidth = pdf.internal.pageSize.getWidth();
                const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

                pdf.addImage(dataUrl, 'PNG', 0, 0, pdfWidth, pdfHeight);
                pdf.save(`${fileName}.pdf`);
            }
        } catch (error) {
            console.error('Error generating certificate:', error);
        }
    };

    return (
        <div className="min-h-screen my-16 bg-gray-50 p-4 sm:p-6">
            {/* Header */}
            <div className="flex flex-col py-5 sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <div>
                    <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Course Certificate</h1>
                    <p className="text-sm sm:text-base text-gray-600">
                        Your achievement certificate for completing the course
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto">
                    <button
                        onClick={() => handleDownload('pdf')}
                        className="flex cursor-pointer justify-center items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md text-sm font-medium transition w-full sm:w-auto"
                    >
                        <Download className="w-4 h-4" />
                        Download PDF
                    </button>
                    <button className="flex justify-center items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium transition w-full sm:w-auto">
                        <Share2 className="w-4 h-4" />
                        Share
                    </button>
                </div>
            </div>

            {/* Certificate Preview */}
            <div id="certificate-content"
                className='pt-6'
                ref={certificateRef}>
                <CertificateCard course={selectedCourse} />
            </div>

            {/* Completed Courses List */}
            <CompletedCourses
                courses={sortedCourses}
                onSelectCourse={(id) => {
                    const course = sortedCourses.find((c) => c.id === id);
                    if (course) handleSelectCourse(course.title);
                }}
            />
        </div>
    );
}
