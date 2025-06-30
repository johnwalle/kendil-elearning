import { getFinalExamByCourseId } from '@/lib/data/finalExam';
import { notFound } from 'next/navigation';
import ExamLayout from '@/components/learning/exam/ExamLayout';

export default async function FinalExamPage({ params }: { params: { courseId: string } }) {
  const exam = await getFinalExamByCourseId(params.courseId);

  if (!exam) return notFound();

  return <ExamLayout exam={exam} />;
}
