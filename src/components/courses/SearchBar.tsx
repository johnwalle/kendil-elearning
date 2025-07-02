"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { useDebouncedCallback } from "use-debounce";

interface Props {
  defaultValue?: string;
}

export function SearchBar({ defaultValue = "" }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const updateQuery = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set("q", value);
    } else {
      params.delete("q");
    }
    params.set("page", "1"); // Reset to page 1 on new search
    router.push(`/catalog?${params.toString()}`);
  }, 400);

  return (
    <div className="mb-6">
      <Input
        placeholder="Search courses, instructors, or topics..."
        defaultValue={defaultValue}
        onChange={(e) => updateQuery(e.target.value)}
        className="w-full h-12 border border-gray-300 rounded-md px-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>
  );
}