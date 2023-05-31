"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import useEventListener from "@/hooks/use-event-listner";
import { SearchIcon } from "lucide-react";

import { buttonVariants } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { H3 } from "../ui/topography";
import SearchInput from "./search-input";

const Search = () => {
  const pathname = usePathname();

  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  // toggle back input focus when popover is open
  useEffect(() => {
    if (isFocused) {
      inputRef.current?.focus();
    } else {
      inputRef.current?.blur();
    }
  }, [isFocused]);

  // prevent spacebar from scrolling when input is focused
  useEventListener("keyup", (e) => {
    if (e.key === " " && isFocused) {
      e.preventDefault();
    }
  });

  return (
    <Popover onOpenChange={() => setIsFocused(!isFocused)}>
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
          <SearchInput ref={inputRef} />
        </div>
      </PopoverTrigger>

      {pathname !== "/search" && (
        <PopoverContent className="mx-2 flex h-48 w-[calc(100vw-1rem)] flex-col items-center justify-start gap-4 md:flex-row md:justify-center">
          <div className="mx-auto flex sm:w-2/3 md:hidden">
            <SearchInput />
          </div>

          <H3>Start Searching...</H3>
        </PopoverContent>
      )}
    </Popover>
  );
};

export default Search;
