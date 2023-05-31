"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ISearch } from "@consumet/extensions";
import {
  Bookmark,
  Calendar,
  Folder,
  Info,
  LucideIcon,
  Tv,
  Youtube,
} from "lucide-react";
import { useSession } from "next-auth/react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { IAnimeResultV2 } from "@/types/anime";
import { cleanHTML, cn, getAnimeTitle } from "@/lib/utils";
import { Icons } from "../icons";
import { Badge } from "../ui/badge";
import { Button, buttonVariants } from "../ui/button";
import { Skeleton } from "../ui/skeleton";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { H3, H4, Small } from "../ui/topography";
import TrailerModal from "../youtube/trailer-modal";
// Import Swiper styles
import "swiper/swiper.min.css";

interface HeroProps {
  trending: ISearch<IAnimeResultV2>;
}

const Hero = ({ trending }: HeroProps) => {
  const { status } = useSession();

  const progressRef = React.useRef<HTMLDivElement>(null);

  const autoplayProgressHandler = (_: any, __: any, percentage: number) => {
    if (progressRef.current) {
      progressRef.current.style.width = `${100 - percentage * 100}%`;
    }
  };

  return (
    /* main wrapper */
    <section id="trending" className="flex flex-col items-center py-4 md:pb-8">
      <div className="flex w-full flex-col gap-4 py-3 md:flex-row md:py-6">
        <div
          className={cn(
            "relative h-44 w-full rounded-lg border border-zinc-600 shadow-lg hover:border-rose-500 md:h-[18rem] md:w-3/4 lg:h-[24rem]",
            "ring-1 ring-gray-400 ring-offset-2 ring-offset-gray-300 hover:shadow-rose-500 hover:ring-rose-500 hover:ring-offset-rose-500"
          )}
        >
          {trending && (
            <Swiper
              className="h-full"
              slidesPerView={1}
              modules={[Autoplay]}
              loop
              mousewheel={false}
              autoplay={{
                delay: 3000,
                pauseOnMouseEnter: true,
              }}
              onAutoplayTimeLeft={autoplayProgressHandler}
            >
              {trending.results.slice(0, -4).map((anime) => {
                return (
                  <SwiperSlide key={anime.id} className="rounded-lg">
                    {/* banner image */}
                    <Image
                      priority
                      src={anime.cover ?? ""}
                      alt={getAnimeTitle(anime)}
                      width={1440}
                      height={810}
                      className="absolute -z-10 h-full rounded-lg object-cover blur-sm"
                    />

                    {/* overlay */}
                    <div className="relative flex h-full w-full rounded-lg bg-gradient-to-r from-black/75 via-black/50 to-black/25">
                      <div className="relative flex w-3/4 flex-col gap-1 px-5 py-2 md:py-5 lg:p-10">
                        {/* title */}
                        <Tooltip>
                          <TooltipTrigger>
                            <H3 className="truncate text-start font-bold">
                              {getAnimeTitle(anime)}
                            </H3>
                          </TooltipTrigger>
                          <TooltipContent side="bottom">
                            <H4 fontInter>{getAnimeTitle(anime)}</H4>
                          </TooltipContent>
                        </Tooltip>

                        {/* description */}
                        <Small className="line-clamp-3 md:line-clamp-[6] lg:line-clamp-[7]">
                          {cleanHTML(anime.description ?? "")}
                        </Small>

                        {/* meta */}
                        <div className="absolute bottom-16 flex place-items-center items-center gap-0.5 font-semibold md:bottom-20 md:gap-1 lg:bottom-24 lg:gap-2">
                          {/* anime type */}
                          <MetaPara icon={Tv}>{anime.type ?? "N/A"}</MetaPara>

                          {/* total episodes */}
                          <MetaPara icon={Folder}>
                            {anime.totalEpisodes === 1
                              ? "1 Episode"
                              : `${anime.totalEpisodes} Episodes` ?? "N/A"}
                          </MetaPara>

                          {/* anime release date */}
                          <MetaPara icon={Calendar}>
                            {anime.releaseDate ?? "N/A"}
                          </MetaPara>
                        </div>

                        <div className="absolute bottom-4 flex w-full gap-2 font-bold tracking-tight md:bottom-6 md:gap-3 lg:bottom-8 lg:text-lg">
                          {/* play button */}
                          <Link
                            href={`/watch/${anime.id}/${getAnimeTitle(anime)}`}
                            className={cn(
                              buttonVariants({ variant: "green" }),
                              "h-9 gap-1 px-2 text-black md:h-10 lg:h-10 lg:px-4"
                            )}
                          >
                            <Icons.play className="-mt-0.5 h-4 w-4 md:-mt-1" />
                            Play
                          </Link>

                          {/* youtube trailer button */}
                          <TrailerModal
                            id={anime.trailer?.id ?? ""}
                            title={getAnimeTitle(anime)}
                          >
                            <div
                              className={cn(
                                buttonVariants(),
                                "h-9 px-2 md:h-10 lg:h-10 lg:px-4"
                              )}
                            >
                              <Icons.youtube className="h-8 w-8" />
                            </div>
                          </TrailerModal>

                          {/* add to watchlist button */}
                          {status == "authenticated" && (
                            <Button>
                              <Bookmark className="h-5 w-5 md:h-6 md:w-6" />
                            </Button>
                          )}

                          {/* more info button */}
                          <Link
                            href={`/anime/info/${anime.id}/${getAnimeTitle(
                              anime
                            )}`}
                            className={cn(
                              buttonVariants(),
                              "ml-auto mr-8 h-9 px-2 md:h-10 lg:h-10 lg:px-4"
                            )}
                          >
                            <Info className="h-5 w-5 md:h-6 md:w-6" />
                          </Link>
                          {/* <Button className="ml-auto mr-8 h-9 gap-1 px-2 md:h-10 md:px-2 lg:mr-14 lg:h-10 lg:px-4">
                          </Button> */}
                        </div>
                      </div>

                      {/* anime image */}
                      <div className="relative h-full w-1/4 rounded-lg px-1 py-2 sm:pl-5 md:px-2 md:py-5 lg:px-5 lg:py-6">
                        <div className="group h-full w-full overflow-hidden rounded-md border border-zinc-600">
                          <Image
                            src={anime.image ?? ""}
                            alt={getAnimeTitle(anime)}
                            width={480}
                            height={270}
                            className="h-full rounded-md object-cover transition-transform duration-300 group-hover:scale-110"
                          />

                          {/* skeleton loading */}
                          <Skeleton className="bg-white/25" />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          )}

          {/* autoplay progress */}
          <div
            ref={progressRef}
            className="absolute -bottom-1 z-10 mx-0.5 h-1 rounded-b-lg bg-rose-500"
          />
        </div>

        {/* anime grid */}
        <div className="grid h-32 w-full grid-cols-2 justify-between gap-2 rounded-lg md:flex md:h-[18rem] md:w-1/4 md:flex-col lg:h-[24rem]">
          {trending.results.slice(-4).map((anime) => {
            return (
              <div
                key={anime.id}
                className={cn(
                  "group relative flex h-full overflow-hidden rounded-lg border border-zinc-600 shadow-lg hover:border-rose-500",
                  "ring-1 ring-gray-400 ring-offset-2 ring-offset-gray-300 hover:shadow-rose-500 hover:ring-rose-500 hover:ring-offset-rose-500"
                )}
              >
                <Image
                  src={anime.image ?? ""}
                  alt={getAnimeTitle(anime)}
                  width={480}
                  height={270}
                  className="h-full rounded-lg object-cover transition-transform duration-300 group-hover:scale-110"
                />

                <Small className="absolute flex h-full w-full items-center justify-center bg-gradient-to-tr from-gray-900 to-transparent text-center font-bold group-hover:bg-none">
                  {getAnimeTitle(anime)}
                </Small>

                {/* skeleton loading */}
                <Skeleton className="absolute -z-10 bg-white/25" />
              </div>
            );
          })}
        </div>
      </div>

      <Link
        href="/anime/trending"
        className="block items-center gap-1 font-semibold text-fill-light underline-offset-4 hover:text-white hover:underline"
      >
        Show More
      </Link>
    </section>
  );
};

export default Hero;

const MetaPara = ({
  children,
  className,
  icon: Icon,
}: {
  children: React.ReactNode;
  className?: string;
  icon: LucideIcon;
}) => {
  return (
    <Badge className={cn("flex gap-0.5 md:gap-1", className)}>
      <Icon size={16} />
      <span className="mt-1">{children}</span>
    </Badge>
  );
};
