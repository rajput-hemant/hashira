"use client";

import { forwardRef } from "react";
import { useSearch } from "@/hooks";
import { SearchIcon } from "lucide-react";

import { Input } from "../ui/input";

const SearchInput = forwardRef<HTMLInputElement>(({ ...props }, ref) => {
  const { query, setQuery } = useSearch();

  return (
    <Input
      ref={ref}
      icon={SearchIcon}
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search title, movies, shows..."
      className="h-10 border-none"
      {...props}
    />
  );
});

SearchInput.displayName = "SearchInput";

export default SearchInput;
