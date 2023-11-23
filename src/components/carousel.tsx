"use client";

import type { CarouselProps } from "nuka-carousel";
import Carousel from "nuka-carousel";

export default function CarouselSlider({ children }: CarouselProps) {
  return (
    <Carousel
      autoplay
      pauseOnHover
      adaptiveHeight
      wrapAround
      defaultControlsConfig={{
        // nextButtonText: <ChevronRight />,
        // prevButtonText: <ChevronLeft />,
        pagingDotsClassName: "hidden",
      }}
    >
      {children}
    </Carousel>
  );
}
