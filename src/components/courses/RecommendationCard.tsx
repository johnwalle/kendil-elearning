import Link from "next/link";
import { Badge } from "@/components/ui/badge";

interface RecommendationProps {
  id: string;
  title: string;
  slug: string;
  category: string;
  reason: string;
}

export function RecommendationCard({ slug, title, category, reason }: RecommendationProps) {
  return (
    <Link href={`/course/${slug}`}>
      <div className="p-4 rounded-lg bg-white hover:shadow-lg transition transform hover:-translate-y-1 flex items-start gap-3 bg-gradient-to-r from-white to-gray-50">
        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
          <span className="text-blue-600 text-xl">{category === "React Development" ? "⚛️" : category === "Mobile App Design" ? "📱" : "🤖"}</span>
        </div>
        <div className="flex-1">
          <Badge className="bg-gray-100 text-gray-700 mb-2">{category}</Badge>
          <h4 className="text-sm font-medium text-gray-900 line-clamp-2">{title}</h4>
          <p className="text-xs text-orange-600 mt-1">Why this course? {reason}</p>
          {/* <Link href={`/course/${slug}`} className="text-xs text-indigo-600 mt-1 inline-block hover:underline">View Course →</Link> */}
        </div>
      </div>
    </Link>
  );
}