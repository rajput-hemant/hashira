import { SearchIcon } from "lucide-react";

import { Input } from "../../components/ui/input";

const SearchInput = () => {
  return (
    <Input
      icon={SearchIcon}
      placeholder="Search title, movies, shows..."
      className="h-10 border-none"
    />
  );
};

export default SearchInput;
