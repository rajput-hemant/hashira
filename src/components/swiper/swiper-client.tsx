"use client";

import React, { useRef } from "react";
import useIsClient from "@/hooks/use-client";
import useWindowSize from "@/hooks/use-window-size";
import { ISearch } from "@consumet/extensions";
import { ArrowLeft, ArrowRight, Loader2 } from "lucide-react";
import SwiperCore, { Keyboard, Mousewheel, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  IAnimeResultV2,
  UpcomingAnime,
  UpcomingAnimeData,
} from "@/types/anime";
import { cn } from "@/lib/utils";
// import AnimeInfoCard from "../anime/info-card";
// import {
//   HoverCard,
//   HoverCardContent,
//   HoverCardTrigger,
// } from "../ui/hover-card";
import { Skeleton } from "../ui/skeleton";
import Swipercard from "./swiper-card";
import "swiper/css/pagination";
import "swiper/swiper.min.css";

type SwiperClientProps = {
  items: ISearch<IAnimeResultV2> | UpcomingAnime;
  isUpcoming?: boolean;
};

type Item = IAnimeResultV2 | UpcomingAnimeData;

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
      return (items as ISearch<IAnimeResultV2>).results;
    }
  })();

  const getId = (item: Item) => {
    if (isUpcoming) {
      return (item as UpcomingAnimeData).mal_id.toString();
    } else {
      return (item as IAnimeResultV2).id;
    }
  };

  const prevSlide = () => {
    swiperRef.current?.slidePrev();
  };

  const nextSlide = () => {
    swiperRef.current?.slideNext();
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
    <div className="mb-4 h-56 w-full sm:h-72 md:mb-10 md:mt-2 md:h-80 lg:h-96">
      {isClient ? (
        <Swiper
          onBeforeInit={(swiper) => (swiperRef.current = swiper)}
          slidesPerView={slideCount}
          spaceBetween={spaceBetween}
          slidesPerGroup={slidesPerGroup}
          modules={[Pagination, Keyboard, Mousewheel]}
          mousewheel
          keyboard
          grabCursor
          pagination={{ clickable: true }}
          className="flex h-full w-full items-center justify-between gap-6 px-1 pb-8 pt-4"
        >
          {data.map((item) => (
            <SwiperSlide
              key={getId(item)}
              className="h-full rounded-md lg:w-48"
            >
              <Swipercard item={item} isUpcoming={isUpcoming} />
              {/*
              <HoverCard openDelay={5} closeDelay={5}>
                <HoverCardTrigger>
                  <Swipercard item={item} isUpcoming={isUpcoming} />
                </HoverCardTrigger>

                {!isUpcoming && (
                  <HoverCardContent
                    side="right"
                    sideOffset={10}
                    className="hidden sm:flex"
                  >
                    <Suspense
                      fallback={
                        <Loader2 className="flex w-full animate-spin items-center justify-center" />
                      }
                    >
                      @ts-ignore // comment this line 
                      <AnimeInfoCard id={getId(item)} />
                    </Suspense>
                  </HoverCardContent>
                )}
              </HoverCard>
              */}
            </SwiperSlide>
          ))}

          {/* swiper previous button */}
          <NavigationButton onClick={prevSlide} className="left-0">
            <ArrowLeft />
          </NavigationButton>

          {/* swiper next button */}
          <NavigationButton onClick={nextSlide} className="right-0">
            <ArrowRight />
          </NavigationButton>
        </Swiper>
      ) : (
        <div className="relative grid h-full w-full place-items-center">
          {/* skeleton loading */}
          <Skeleton />

          <Loader2 className="absolute animate-spin" />
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
        "absolute z-10 rounded-full bg-white/80 p-2 text-black hover:bg-white",
        className
      )}
    >
      {children}
    </button>
  );
};
