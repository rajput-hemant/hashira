import { useState } from "react";

const useSearch = () => {
  const [query, setQuery] = useState("");

  return { query, setQuery };
};

export default useSearch;
