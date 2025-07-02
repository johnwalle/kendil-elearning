import { Suspense } from "react";
// import { getServerSession } from "next-auth";
// import { authOptions } from "@/lib/auth";
import { Filters } from "@/components/courses/Filters";
import { SearchBar } from "@/components/courses/SearchBar";
import { CourseGrid } from "@/components/courses/CourseGrid";
import { Pagination } from "@/components/courses/Pagination";
import { Recommendations } from "@/components/courses/AiRecommendations";
// import { redirect } from "next/navigation";

export default async function CatalogPage({ searchParams }: { searchParams: Record<string, string> }) {
  // Fake session for testing (remove this once real auth is enabled)
  const session = {
    user: {
      id: "user-123",
      name: "Test User",
      email: "testuser@example.com",
    },
  };

  const page = Number(searchParams.page || 1);
  const query = searchParams.q || "";
  const category = searchParams.category || "all";
  const level = searchParams.level || "all";
  const price = searchParams.price || "all";

  return (
    <div className="max-w-7xl text-black py-28 mx-auto px-4 grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-6">
      <div>
        <h1 className="text-3xl font-semibold text-gray-900 mb-2">Course Catalog</h1>
        <p className="text-sm text-gray-600 mb-6">Discover thousands of courses to advance your skills</p>
        <SearchBar defaultValue={query} />
        <Filters
          defaultCategory={category}
          defaultLevel={level}
          defaultPrice={price}
        />
        <CourseGrid
          query={query}
          category={category}
          level={level}
          price={price}
          page={page}
        />
        <Pagination currentPage={page} />
      </div>

      {session?.user && (
        <Suspense fallback={<div className="bg-white shadow p-4 rounded">Loading Recommendations...</div>}>
          <Recommendations userId={session.user.id} />
        </Suspense>
      )}
    </div>
  );
}