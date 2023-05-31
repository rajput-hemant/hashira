"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IAnimeEpisode } from "@consumet/extensions";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { Button, buttonVariants } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

type EpisodeListProps = {
  id: string;
  items?: IAnimeEpisode[];
  mode: "list" | "grid";
};

const EpisodeList = ({ id, items = [], mode }: EpisodeListProps) => {
  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 10;
  const pagesCount = Math.ceil(items.length / itemsPerPage);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const prevButton = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const nextButton = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      {mode === "grid" &&
        items.length &&
        items?.slice(startIndex, endIndex).map((episode) => (
          <ELink id={id} episode={episode}>
            {episode.title ? (
              <p className="w-full truncate text-start font-bold">
                {episode.number} - {episode.title ?? ""}
              </p>
            ) : (
              <p className="truncate font-bold">Episode - {episode.number}</p>
            )}
          </ELink>
        ))}

      {mode === "list" &&
        items.length &&
        items?.slice(startIndex, endIndex).map((episode) => (
          <ELink id={id} episode={episode} className="p-0">
            <div className="group flex max-h-36 w-full">
              {/* image */}
              <div className="relative m-1 flex w-1/3 max-w-[16rem] items-center justify-center overflow-hidden rounded-md">
                <Image
                  src={episode.image ?? ""}
                  alt={episode.title ?? ""}
                  height={200}
                  width={300}
                  className="h-full w-full rounded-md object-cover transition-transform duration-300 group-hover:scale-110"
                />

                <Icons.play className="invisible absolute h-6 w-6 text-white/75 group-hover:visible md:h-10 md:w-10" />

                {/* skeleton loading */}
                <Skeleton className="absolute -z-10" />
              </div>

              {/* episode info */}
              <div className="flex w-full flex-col p-2">
                <p className="line-clamp-1 font-bold sm:text-lg md:text-xl lg:text-2xl">
                  {episode.title ?? ""}
                </p>

                <p className="line-clamp-3 text-xs leading-4 text-fill-light sm:line-clamp-4 sm:leading-5 md:text-base">
                  {episode.description ?? ""}
                </p>
              </div>
            </div>
          </ELink>
        ))}

      <div className="flex justify-between gap-2">
        <Button
          onClick={prevButton}
          disabled={currentPage == 0}
          className="group/prev-button flex w-full max-w-[16rem] gap-1 font-bold"
        >
          <ArrowLeft className="mb-1 h-4 w-4 duration-300 group-hover/prev-button:-translate-x-1" />
          Prev
        </Button>

        <Button
          onClick={nextButton}
          disabled={currentPage == pagesCount - 1}
          className="group/next-button flex w-full max-w-[16rem] gap-1 font-bold"
        >
          Next
          <ArrowRight className="mb-1 h-4 w-4 duration-300 group-hover/next-button:translate-x-1" />
        </Button>
      </div>
    </>
  );
};

export default EpisodeList;

type ELinkProps = {
  id: string;
  episode: IAnimeEpisode;
  className?: string;
  children: React.ReactNode;
};

const ELink = ({ id, episode, className, children }: ELinkProps) => {
  return (
    <Link
      key={episode.id}
      href={`/watch/${id}/${episode.id}`}
      className={cn(buttonVariants(), "h-full w-full", className)}
    >
      {children}
    </Link>
  );
};
