import { notFound, redirect } from 'next/navigation';
import { getCourseById, getLessonsByCourseId, getLessonById } from '@/lib/data/lessons';
import { getQuizByLessonId } from '@/lib/data/quizes';
import CourseSidebar from '@/components/learning/CourseSidebar';
import CourseVideoPlayer from '@/components/learning/CourseVideoPlayer';
import LessonQuiz from '@/components/learning/quiz/LessonQuiz';

interface PageProps {
  params: {
    courseId: string;
  };
  searchParams: {
    lesson?: string;
  };
}

export default async function CoursePage({ params, searchParams }: PageProps) {
  const courseId = params.courseId;
  const course = await getCourseById(courseId);

  if (!course || !course.isEnrolled) {
    redirect(`/course/${courseId}`);
  }

  const lessons = await getLessonsByCourseId(courseId);
  if (!lessons || lessons.length === 0) {
    return notFound();
  }

  const currentLessonId = searchParams.lesson || lessons[0].id;
  console.log('Current Lesson ID:', currentLessonId);
  const currentLesson = await getLessonById(courseId, currentLessonId);
  const quiz = await getQuizByLessonId(currentLessonId);

  console.log('Current Lesson:', currentLesson);
  console.log('Quiz for Current Lesson:', quiz);


  if (!currentLesson || !currentLesson.unlocked) {
    return notFound();
  }

  return (
    <div className="flex flex-col lg:flex-row min-h-screen pt-16 bg-gray-50">
      {/* Main Content */}
      <main className="flex-1 px-4 md:px-6 lg:px-8 py-6 max-w-5xl w-full mx-auto">
        <CourseVideoPlayer lesson={currentLesson} />
        {quiz && <LessonQuiz quiz={quiz} />}
      </main>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-80">
        <CourseSidebar
          course={course}
          lessons={lessons}
          currentLessonId={currentLessonId}
        />
      </aside>

      {/* Mobile Sidebar */}
      <aside className="lg:hidden w-full border-t mt-6 bg-white shadow-inner">
        <CourseSidebar
          course={course}
          lessons={lessons}
          currentLessonId={currentLessonId}
        />
      </aside>
    </div>
  );
}
