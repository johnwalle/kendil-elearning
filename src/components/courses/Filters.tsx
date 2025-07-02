"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"; // Ensure `SelectPortal` is supported in your library

interface Props {
  defaultCategory: string;
  defaultLevel: string;
  defaultPrice: string;
}

export function Filters({ defaultCategory, defaultLevel, defaultPrice }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleChange = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value === "all") {
      params.delete(key); // Clear filter if "all"
    } else {
      params.set(key, value);
    }

    params.set("page", "1");
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex flex-wrap gap-4 mb-6">
      {/* Category Filter */}
      <Select defaultValue={defaultCategory} onValueChange={(v) => handleChange("category", v)}>
        <SelectTrigger className="w-[160px] h-11 border rounded-lg px-4 text-gray-700 bg-white shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent
          className="z-50 max-h-60 overflow-y-auto border rounded-md shadow-xl bg-white text-gray-700"
          side="bottom"
          position="popper"
        >
          <SelectItem value="all">All Categories</SelectItem>
          <SelectItem value="development">Development</SelectItem>
          <SelectItem value="design">Design</SelectItem>
          <SelectItem value="business">Business</SelectItem>
        </SelectContent>
      </Select>

      {/* Level Filter */}
      <Select defaultValue={defaultLevel} onValueChange={(v) => handleChange("level", v)}>
        <SelectTrigger className="w-[160px] h-11 border rounded-lg px-4 text-gray-700 bg-white shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
          <SelectValue placeholder="Level" />
        </SelectTrigger>
        <SelectContent
          className="z-50 max-h-60 overflow-y-auto border rounded-md shadow-xl bg-white text-gray-700"
          side="bottom"
          position="popper"
        >
          <SelectItem value="all">All Levels</SelectItem>
          <SelectItem value="beginner">Beginner</SelectItem>
          <SelectItem value="intermediate">Intermediate</SelectItem>
          <SelectItem value="advanced">Advanced</SelectItem>
        </SelectContent>
      </Select>

      {/* Price Filter */}
      <Select defaultValue={defaultPrice} onValueChange={(v) => handleChange("price", v)}>
        <SelectTrigger className="w-[160px] h-11 border rounded-lg px-4 text-gray-700 bg-white shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
          <SelectValue placeholder="Price" />
        </SelectTrigger>
        <SelectContent
          className="z-50 max-h-60 overflow-y-auto border rounded-md shadow-xl bg-white text-gray-700"
          side="bottom"
          position="popper"
        >
          <SelectItem value="all">All Prices</SelectItem>
          <SelectItem value="free">Free</SelectItem>
          <SelectItem value="paid">Paid</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
