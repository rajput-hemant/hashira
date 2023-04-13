"use client";

import Image from "next/image";
import useWindowSize from "@/hooks/use-window-size";
import { IAnimeInfo } from "@consumet/extensions";
import {
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/pagination";
import "swiper/swiper.min.css";
import { PlayCircle } from "lucide-react";

import { getAnimeTitle } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import { Small } from "./ui/topography";

interface RecentProps {
  items: any;
}

const SwiperClient = ({ items }: RecentProps) => {
  const {
    windowDimension: { winWidth },
  } = useWindowSize();

  const [slideCount, spaceBetween] = (() => {
    if (winWidth <= 500) {
      return [3, 10];
    }
    if (winWidth > 500 && winWidth <= 800) {
      return [4, 10];
    }
    if (winWidth > 800 && winWidth <= 1440) {
      return [5, 15];
    }
    if (winWidth > 1440 && winWidth <= 1790) {
      return [6, 30];
    }
    if (winWidth > 1790) {
      return [7, 30];
    }
  })()!;

  return (
    <div className="mb-10 h-52 w-full pt-2 sm:h-64 md:mb-20 md:h-72 md:pt-6 lg:h-96">
      <Swiper
        slidesPerView={slideCount}
        spaceBetween={spaceBetween}
        modules={[
          Navigation,
          Pagination,
          Mousewheel,
          Keyboard,
          Scrollbar,
          Mousewheel,
        ]}
        mousewheel={true}
        keyboard={{ enabled: true }}
        className="flex h-full w-full items-center justify-between gap-6"
      >
        {items.results.map((item: IAnimeInfo) => (
          <SwiperSlide key={item.id} className="h-full rounded-md lg:w-48">
            <div className="group relative h-full w-fit cursor-pointer overflow-hidden rounded-md">
              <Image
                src={item.image ?? ""}
                alt={getAnimeTitle(item)}
                width={200}
                height={300}
                className="h-full rounded-md object-cover transition-transform duration-300 group-hover:scale-110 lg:w-56"
              />

              <div className="absolute left-0 top-0 z-10 flex h-full w-full flex-col items-center justify-center bg-gradient-to-tr from-gray-900 to-transparent text-center transition-all duration-300 group-hover:bg-none">
                <Small className="rounded-md font-bold group-hover:hidden">
                  {getAnimeTitle(item)}
                </Small>
                <div
                  className={buttonVariants({
                    className:
                      "hidden rounded-full group-hover:flex backdrop-blur-lg",
                  })}
                >
                  <PlayCircle className="" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperClient;
