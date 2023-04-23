"use client";

import { forwardRef } from "react";
import { useAppDispatch } from "@/hooks/use-app-dispatch";
import { useAppSelector } from "@/hooks/use-app-selector";
import { SearchIcon } from "lucide-react";

import { setSearch } from "@/store/search-slice";
import { Input } from "../ui/input";

const SearchInput = forwardRef<HTMLInputElement>(({ ...props }, ref) => {
  const dispatch = useAppDispatch();

  const search = useAppSelector((state) => state.search.query);

  return (
    <Input
      ref={ref}
      icon={SearchIcon}
      value={search}
      onChange={(e) => dispatch(setSearch(e.target.value))}
      placeholder="Search title, movies, shows..."
      className="h-10 border-none"
      {...props}
    />
  );
});

SearchInput.displayName = "SearchInput";

export default SearchInput;
