"use client";

import React, { useRef } from "react";
import Image from "next/image";
import useWindowSize from "@/hooks/use-window-size";
import { IAnimeInfo, ISearch } from "@consumet/extensions";
import {
  ArrowLeft,
  ArrowRight,
  Loader2,
  PlayCircle,
  Star,
  Youtube,
} from "lucide-react";
import SwiperCore, {
  Keyboard,
  Mousewheel,
  Pagination,
  Scrollbar,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { UpcomingAnime, UpcomingAnimeData } from "@/types/anime";
import { cn, getAnimeTitle } from "@/lib/utils";
import { Badge } from "./ui/badge";
import { Small } from "./ui/topography";
import "swiper/css/pagination";
import "swiper/swiper.min.css";
import useIsClient from "@/hooks/use-client";

import { Skeleton } from "./ui/skeleton";
import TrailerModal from "./youtube/trailer-modal";

type SwiperClientProps = {
  items: ISearch<IAnimeInfo> | UpcomingAnime;
  isUpcoming?: boolean;
};

type Item = IAnimeInfo | UpcomingAnimeData;

const SwiperClient = ({ items, isUpcoming }: SwiperClientProps) => {
  const swiperRef = useRef<SwiperCore>();
  const isClient = useIsClient();
  const {
    windowDimension: { winWidth },
  } = useWindowSize();

  const data = (() => {
    if (isUpcoming) {
      return (items as UpcomingAnime).data;
    } else {
      return (items as ISearch<IAnimeInfo>).results;
    }
  })();

  const id = (item: Item, i: number) => {
    if (isUpcoming) {
      return i + "_swiper";
    } else {
      return (item as IAnimeInfo).id;
    }
  };

  const getImage = (item: Item) => {
    if (isUpcoming) {
      return (item as UpcomingAnimeData).images.webp.image_url ?? "";
    } else {
      return (item as IAnimeInfo).image ?? "";
    }
  };

  const getTitle = (item: Item) => {
    if (isUpcoming) {
      return (item as UpcomingAnimeData).titles[0].title ?? "";
    } else {
      return getAnimeTitle(item as IAnimeInfo);
    }
  };

  const prevSlide = () => {
    swiperRef.current?.slidePrev();
  };

  const nextSlide = () => {
    swiperRef.current?.slideNext();
  };

  const getRating = (item: Item) => {
    if (isUpcoming) {
      return null;
    } else {
      return (item as IAnimeInfo).rating;
    }
  };

  const hasSubDub = (item: Item) => {
    if (isUpcoming) {
      return null;
    } else {
      const anime = item as IAnimeInfo;

      if (anime.hasSub && anime.hasDub) {
        return "Sub | Dub";
      } else if (anime.hasSub) {
        return "Subtitled";
      } else if (anime.hasDub) {
        return "Dubbed";
      } else {
        return null;
      }
    }
  };

  const [slideCount, spaceBetween, slidesPerGroup] = (() => {
    if (winWidth <= 500) {
      return [3, 10, 1];
    }
    if (winWidth > 500 && winWidth <= 800) {
      return [4, 10, 3];
    }
    if (winWidth > 800 && winWidth <= 1440) {
      return [5, 15, 4];
    }
    if (winWidth > 1440 && winWidth <= 1790) {
      return [6, 30, 5];
    } else {
      return [7, 30, 6];
    }
  })();

  return (
    <div className="mb-5 h-56 w-full pt-2 sm:h-72 md:mb-10 md:h-80 md:pt-6 lg:h-96">
      {isClient ? (
        <Swiper
          onBeforeInit={(swiper) => (swiperRef.current = swiper)}
          slidesPerView={slideCount}
          spaceBetween={spaceBetween}
          slidesPerGroup={slidesPerGroup}
          modules={[Pagination, Mousewheel, Keyboard, Scrollbar, Mousewheel]}
          mousewheel
          keyboard
          grabCursor
          pagination={{ clickable: true }}
          className="flex h-full w-full items-center justify-between gap-6 pb-8 md:pb-10"
        >
          {data.map((item, i) => (
            <SwiperSlide
              key={id(item, i)}
              className={cn(
                "h-full rounded-md lg:w-48",
                isUpcoming && "md:w-96"
              )}
            >
              <div className="group flex h-full w-fit cursor-pointer flex-col rounded-md border border-zinc-600 hover:border-rose-500">
                <div className="relative h-full w-full overflow-hidden rounded-t-md">
                  <Image
                    src={getImage(item)}
                    alt={getTitle(item)}
                    width={300}
                    height={200}
                    className="h-full object-cover transition-transform duration-300 group-hover:scale-110 lg:w-56"
                  />

                  <div className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center bg-gradient-to-tr from-gray-900 to-transparent text-center transition-all duration-300 group-hover:bg-none">
                    <Small className="rounded-md font-bold group-hover:hidden">
                      {getTitle(item)}
                    </Small>

                    {isUpcoming ? (
                      <TrailerModal
                        id={
                          (item as UpcomingAnimeData).trailer.youtube_id ?? ""
                        }
                        title={getTitle(item)}
                      >
                        <PlayCircle className="hidden h-10 w-10 rounded-full bg-rose-500 p-2 group-hover:flex" />
                      </TrailerModal>
                    ) : (
                      <div className="hidden h-10 w-10 items-center justify-center rounded-full bg-rose-500 group-hover:flex">
                        <PlayCircle className="" />
                      </div>
                    )}
                  </div>
                </div>

                {
                  <div
                    className={cn(
                      "group flex h-14 items-center justify-center gap-1 rounded-b-md border-t border-inherit md:h-16",
                      !hasSubDub(item) && "h-10"
                    )}
                  >
                    {isUpcoming ? (
                      <TrailerModal
                        id={
                          (item as UpcomingAnimeData).trailer.youtube_id ?? ""
                        }
                        title={getTitle(item)}
                      >
                        <Badge
                          variant="destructive"
                          className="gap-1 md:gap-1.5"
                        >
                          <Youtube size={16} />
                          <span className="-mr-1 hidden md:flex">Watch</span>
                          Trailer
                        </Badge>
                      </TrailerModal>
                    ) : (
                      <>
                        {getRating(item) && (
                          <Badge
                            variant="secondary"
                            className="flex gap-1 md:gap-2 lg:gap-3"
                          >
                            <Star className="h-4 w-4 rounded-full bg-yellow-500 p-[1px] text-black md:h-5 md:w-5 md:p-[3px]" />

                            <span className="mt-1 md:text-base">
                              {getRating(item)}
                            </span>
                          </Badge>
                        )}
                        {hasSubDub(item) ?? ""}
                      </>
                    )}
                  </div>
                }
              </div>
            </SwiperSlide>
          ))}
          {/* swiper previous button */}
          <NavigationButton onClick={prevSlide} className="left-2">
            <ArrowLeft />
          </NavigationButton>

          {/* swiper next button */}
          <NavigationButton onClick={nextSlide} className="right-2">
            <ArrowRight />
          </NavigationButton>
        </Swiper>
      ) : (
        <div className="relative flex h-full w-full">
          <Skeleton />
          <Loader2 className="absolute left-1/2 top-1/2 animate-spin" />
        </div>
      )}
    </div>
  );
};

export default SwiperClient;

interface NavigationButtonProps {
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  children: React.ReactNode;
}

const NavigationButton = ({
  onClick,
  className,
  children,
}: NavigationButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "absolute z-10 rounded-full p-2 backdrop-blur-lg hover:bg-red-500",
        className
      )}
    >
      {children}
    </button>
  );
};
