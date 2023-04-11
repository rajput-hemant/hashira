"use client";

import React from "react";
import Image from "next/image";
import { IAnimeInfo, ISearch } from "@consumet/extensions";
import {
  Bookmark,
  Calendar,
  Folder,
  Info,
  PlayCircle,
  Tv,
  Youtube,
} from "lucide-react";
import { useSession } from "next-auth/react";
import { A11y, Autoplay, Mousewheel } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { overpass } from "@/lib/fonts";
import { cleanHTML } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "../ui/button";
// Import Swiper styles
import "swiper/swiper.min.css";

interface HeroProps {
  trending: ISearch<IAnimeInfo>;
}

const Hero = ({ trending }: HeroProps) => {
  const { status } = useSession();

  const getAnimeTitle = (anime: IAnimeInfo) => {
    if (typeof anime.title == "string") {
      return anime.title;
    } else {
      return anime.title.english ?? "";
    }
  };

  return (
    /* main wrapper */
    <section className="flex w-full flex-col gap-4 py-6 md:flex-row">
      <div className="h-44 w-full rounded-lg md:h-[18rem] md:w-3/4 lg:h-[24rem]">
        {trending && (
          <Swiper
            className="h-full"
            slidesPerView={1}
            onSlideChange={() => {}}
            modules={[Autoplay, Mousewheel, A11y]}
            loop={true}
            autoplay={{
              delay: 3000,
              pauseOnMouseEnter: true,
            }}
            mousewheel={true}
            a11y={{
              prevSlideMessage: "previous slide",
              nextSlideMessage: "next slide",
            }}
          >
            {trending.results.map((anime) => {
              return (
                <SwiperSlide key={anime.id} className="rounded-lg">
                  <Image
                    src={anime.cover ?? ""}
                    alt={getAnimeTitle(anime)}
                    width={1440}
                    height={810}
                    className="absolute -z-10 h-full rounded-lg object-cover opacity-50"
                  />

                  <div className="relative flex h-full w-full rounded-lg bg-gradient-to-tr from-black to-transparent">
                    <div className="relative flex w-3/4 flex-col gap-1 px-5 py-2 md:py-5 lg:p-10">
                      {/* title */}
                      <Tooltip>
                        <TooltipTrigger className="w-full truncate text-start font-bold sm:text-lg md:py-1 md:text-2xl lg:text-3xl">
                          {getAnimeTitle(anime)}
                        </TooltipTrigger>
                        <TooltipContent side="bottom">
                          {getAnimeTitle(anime)}
                        </TooltipContent>
                      </Tooltip>

                      {/* description */}
                      <p
                        className={
                          "line-clamp-3 text-xs md:line-clamp-[6] lg:line-clamp-[7] md:text-sm lg:text-base " +
                          overpass.className
                        }
                      >
                        {cleanHTML(anime.description ?? "")}
                      </p>

                      {/* meta */}
                      <div className="absolute bottom-16 flex place-items-center items-center gap-3 font-semibold md:bottom-20 lg:bottom-24">
                        {/* anime type */}
                        <MetaPara>
                          <Tv size={16} />
                          {anime.type ?? "N/A"}
                        </MetaPara>

                        {/* total episodes */}
                        <MetaPara>
                          <Folder size={16} />
                          {anime.totalEpisodes === 1
                            ? "1 Episode"
                            : `${anime.totalEpisodes} Episodes` ?? "N/A"}
                        </MetaPara>

                        {/* anime release date */}
                        <MetaPara>
                          <Calendar size={16} />
                          {anime.releaseDate ?? "N/A"}
                        </MetaPara>
                      </div>

                      <div className="absolute bottom-4 flex w-full gap-3 font-bold tracking-tight md:bottom-6 lg:bottom-8 lg:text-lg">
                        {/* play button */}
                        <Button
                          variant="green"
                          className="h-9 gap-1 px-2 md:h-10 md:px-2 lg:h-10 lg:px-4"
                        >
                          <PlayCircle className="h-5 w-5 md:h-6 md:w-6" />
                          Play
                        </Button>

                        {/* youtube trailer button */}
                        <Button
                          variant="destructive"
                          className="h-9 gap-1 px-2 md:h-10 md:px-2 lg:h-10 lg:px-4"
                        >
                          <Youtube className="h-5 w-5 md:h-6 md:w-6" />
                        </Button>

                        {/* add to watchlist button */}
                        {status == "authenticated" && (
                          <Button className="h-9 gap-1 px-2 md:h-10 md:px-2 lg:h-10 lg:px-4">
                            <Bookmark className="h-5 w-5 md:h-6 md:w-6" />
                          </Button>
                        )}

                        {/* more info button */}
                        <Button className="ml-auto mr-8 h-9 gap-1 px-2 md:h-10 md:px-2 lg:mr-14 lg:h-10 lg:px-4">
                          <Info className="h-5 w-5 md:h-6 md:w-6" />
                        </Button>
                      </div>
                    </div>

                    <div className="relative h-full w-1/4 rounded-lg p-1">
                      <div className="flex h-full w-full items-center justify-center rounded-md p-1 backdrop-blur-md md:p-2 lg:px-5 lg:py-3">
                        <Image
                          src={anime.image ?? ""}
                          alt={getAnimeTitle(anime)}
                          width={480}
                          height={270}
                          className="h-full rounded-md object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}
      </div>

      <div className="grid h-32 w-full grid-cols-2 justify-between gap-2 rounded-lg md:flex md:h-[18rem] md:w-1/4 md:flex-col lg:h-[24rem]">
        {[...trending.results].slice(0, 4).map((anime, i) => {
          return (
            <div key={anime.id} className="relative h-full rounded-lg">
              <Image
                src={anime.image ?? ""}
                alt={getAnimeTitle(anime)}
                width={480}
                height={270}
                className="absolute -z-10 h-full rounded-lg object-cover"
              />

              <p className="flex h-full w-full items-center justify-center bg-gradient-to-tr from-gray-900 to-transparent text-center text-sm font-bold md:text-base">
                {getAnimeTitle(anime)}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Hero;

const MetaPara = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className="flex gap-1 text-xs tracking-tight md:text-sm">{children}</p>
  );
};
