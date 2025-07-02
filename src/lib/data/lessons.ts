import { Lesson, Course } from '@/types/lessons';

export async function getCourseById(courseId: string): Promise<Course | null> {
    return {
        id: courseId,
        title: 'JavaScript Fundamentals',
        progress: 65,
        isEnrolled: true,
    };
}

export async function getLessonsByCourseId(courseId: string): Promise<Lesson[]> {
    return [
        {
            id: 'lesson-1',
            title: 'Introduction',
            description: 'Getting started with JavaScript',
            duration: 12,
            videoUrl: 'https://youtu.be/EerdGm-ehJQ?si=XJxJC8JspmV1Yuze',
            unlocked: true,
            completed: true,
            thumbnailUrl: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/35025e469f-7b5553affe84e6a68682.png',
            views: 1200,
            updatedAgo: '5 days ago',
        },
        {
            id: 'lesson-2',
            title: 'Syntax Basics',
            description: 'Understanding JS syntax',
            duration: 20,
            videoUrl: 'https://youtu.be/EerdGm-ehJQ?si=XJxJC8JspmV1Yuze',
            unlocked: true,
            completed: true,
            thumbnailUrl: 'https://example.com/thumbnail2.jpg',
            views: 980,
            updatedAgo: '3 days ago',
        },
        {
            id: 'lesson-3',
            title: 'Variables & Data Types',
            description: 'Working with variables and types',
            duration: 15,
            videoUrl: '',
            unlocked: false,
            
            completed: false,
            views: 1234,
            updatedAgo: '2 days ago',
        },
    ];
}

export async function getLessonById(courseId: string, lessonId: string): Promise<Lesson | null> {
    const lessons = await getLessonsByCourseId(courseId);
    return lessons.find((l) => l.id === lessonId) ?? null;
}
