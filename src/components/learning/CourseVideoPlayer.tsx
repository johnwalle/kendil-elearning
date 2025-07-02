import { Lesson } from '@/types/lessons';

interface CourseVideoPlayerProps {
  lesson: Lesson;
}

export default function CourseVideoPlayer({ lesson }: CourseVideoPlayerProps) {
  return (
    <div className="w-full rounded-xl overflow-hidden shadow-sm border border-gray-200 bg-white">
      {/* Video Section */}
      <div className="aspect-video bg-black flex items-center justify-center text-white text-lg md:text-xl font-semibold">
        {lesson.videoUrl ? (
          <video
            controls
            src={lesson.videoUrl}
            className="w-full h-full object-cover rounded-t-xl"
            poster={lesson.thumbnailUrl || undefined}
          />
        ) : (
          `JavaScript Fundamentals - ${lesson.title}`
        )}
      </div>

      {/* Metadata & Details */}
      <div className="p-4 md:p-5 border-t bg-white">
        <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-1 truncate">{lesson.title}</h2>
        <p className="text-xs md:text-sm text-gray-600 leading-relaxed line-clamp-4">
          {lesson.description}
        </p>

        <div className="flex flex-wrap items-center gap-3 text-[10px] md:text-xs text-gray-500 mt-3">
          <div className="flex items-center gap-1">
            ⏱ <span>{lesson.duration} min</span>
          </div>
          <div className="flex items-center gap-1">
            👁 <span>{lesson.views.toLocaleString()} views</span>
          </div>
          <div className="flex items-center gap-1">
            📅 <span>Updated {lesson.updatedAgo}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
