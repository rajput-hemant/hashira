import { SearchIcon } from "lucide-react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { buttonVariants } from "../ui/button";
import { Input } from "../ui/input";

const Search = () => {
  return (
    <>
      <div className="hidden md:flex">
        <Input
          icon={SearchIcon}
          placeholder="Search title, movies, shows..."
          className="h-10 w-64 md:flex md:w-72"
        />
      </div>

      <div className="md:hidden">
        <Popover>
          <PopoverTrigger>
            <div
              className={buttonVariants({
                variant: "ghost",
                className: "px-[6px]",
              })}
            >
              <SearchIcon />
            </div>
          </PopoverTrigger>

          <PopoverContent className="mx-2 h-48 w-[calc(100vw-1rem)]">
            <Input
              icon={SearchIcon}
              placeholder="Search title, movies, shows..."
              className="h-10 w-full sm:w-2/3"
            />
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
};

export default Search;
