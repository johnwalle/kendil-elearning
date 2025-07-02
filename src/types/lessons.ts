export interface Lesson {
    id: string;
    title: string;
    description: string;
    duration: number;
    videoUrl: string;
    unlocked: boolean;
    completed: boolean;
    views: number;
    updatedAgo: string;
    thumbnailUrl?: string; // Optional thumbnail URL for the lesson
}

export interface Course {
    id: string;
    title: string;
    progress: number;
    isEnrolled: boolean;
}
