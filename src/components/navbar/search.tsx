import { SearchIcon } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import SearchInput from "../../app/search/search-input";
import { H3 } from "../ui/topography";

const Search = () => {
  return (
    <Popover>
      <PopoverTrigger>
        {/* show search icon on small screens */}
        <div
          className={buttonVariants({
            variant: "ghost",
            className: "px-[6px] md:hidden",
          })}
        >
          <SearchIcon />
        </div>

        {/* show search input on medium and large screens */}
        <div className="hidden md:flex">
          <SearchInput />
        </div>
      </PopoverTrigger>

      <PopoverContent className="mx-2 flex h-48 w-[calc(100vw-1rem)] items-center justify-center">
        <div className="mx-auto flex sm:w-2/3 md:hidden">
          <SearchInput />
        </div>

        <H3>Start Searching...</H3>
      </PopoverContent>
    </Popover>
  );
};

export default Search;
