"use client";

import { useAppSelector } from "@/hooks/use-app-selector";

const SearchPage = () => {
  const search = useAppSelector((state) => state.search.query);

  return (
    <div className="container flex min-h-screen items-center justify-center text-lg">
      {search}
    </div>
  );
};

export default SearchPage;
