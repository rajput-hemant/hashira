import Image from "next/image";
import Link from "next/link";
import { Bookmark, PlayCircle, Star, Youtube } from "lucide-react";

import { IAnimeResultV2, UpcomingAnimeData } from "@/types/anime";
import { cn, getAnimeTitle } from "@/lib/utils";
import { Button } from "../ui/button";
import { Skeleton } from "../ui/skeleton";
import { Small } from "../ui/topography";
import TrailerModal from "../youtube/trailer-modal";

type Item = IAnimeResultV2 | UpcomingAnimeData;

interface SwipercardProps {
  item: Item;
  isUpcoming?: boolean;
  className?: string;
}

const Swipercard = ({ item, isUpcoming, className }: SwipercardProps) => {
  const getHref = (item: Item) => {
    const anime = item as IAnimeResultV2;

    return `/anime/info/${anime.id}/${getAnimeTitle(anime)
      .toLowerCase()
      .replace(/[^\w\s]/gi, "")
      .replaceAll(" ", "-")}`;
  };

  const getImage = (item: Item) => {
    if (isUpcoming) {
      return (item as UpcomingAnimeData).images.webp.image_url ?? "";
    } else {
      return (item as IAnimeResultV2).image ?? "";
    }
  };

  const getTitle = (item: Item) => {
    if (isUpcoming) {
      return (item as UpcomingAnimeData).titles[0].title ?? "";
    } else {
      return getAnimeTitle(item as IAnimeResultV2);
    }
  };

  const getRating = (item: Item) => {
    return (item as IAnimeResultV2).rating;
  };

  const getSeason = (item: Item) => {
    return (item as UpcomingAnimeData).season ?? "N/A";
  };

  return (
    <Wrapper
      isUpcoming={isUpcoming}
      href={getHref(item)}
      className={cn(
        "group flex h-full w-fit cursor-pointer flex-col rounded-md border border-zinc-600 shadow-lg shadow-zinc-500 transition-transform duration-300 hover:-translate-y-2 hover:border-rose-500",
        "ring-1 ring-gray-400 ring-offset-2 ring-offset-white/50 hover:shadow-rose-500 hover:ring-rose-500 hover:ring-offset-rose-500",
        className
      )}
    >
      {/* image */}
      <div className="relative h-full overflow-hidden rounded-md">
        <Image
          src={getImage(item)}
          alt={getTitle(item)}
          width={300}
          height={200}
          className="-z-10 h-full rounded-md object-cover transition-transform duration-300 group-hover:scale-110 lg:w-56"
        />

        {/* overlay */}
        <div className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-between rounded-md bg-gradient-to-b from-transparent via-black/50 to-black text-center transition-all duration-300 group-hover:bg-none">
          <div className="flex w-full justify-between p-1 md:p-2">
            {isUpcoming ? (
              <>
                <div className="rounded-full border border-zinc-500 bg-black/25 px-1 py-0 capitalize backdrop-blur-lg group-hover:bg-black/50 md:px-3 md:py-1">
                  <Small className="mt-2">{getSeason(item)}</Small>
                </div>
              </>
            ) : (
              <>
                <div className="hidden items-center justify-center gap-1 rounded-full border border-zinc-500 bg-black/25 px-3 backdrop-blur-lg hover:bg-black/50 md:flex">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <Small className="mt-1">{getRating(item)}</Small>
                </div>

                <Button className="ml-auto rounded-full border-none bg-yellow-500 px-3 text-black backdrop-blur-lg hover:bg-yellow-400">
                  <Bookmark className="h-4 w-4" />
                </Button>
              </>
            )}
          </div>

          {isUpcoming ? (
            <TrailerModal
              id={(item as UpcomingAnimeData).trailer.youtube_id ?? ""}
              title={getTitle(item).slice(0, 40)}
            >
              <Youtube className="hidden h-10 w-10 rounded-full bg-red-500 p-2 group-hover:flex" />
            </TrailerModal>
          ) : (
            <PlayCircle className="invisible h-10 w-10 rounded-full bg-rose-500 p-2 fade-in group-hover:visible" />
          )}

          <Small
            className={cn(
              "line-clamp-2 w-full bg-black/25  px-1 py-4 font-bold group-hover:bg-black/50",
              !isUpcoming && `text-[${(item as IAnimeResultV2).color}]`
            )}
          >
            {getTitle(item).slice(0, 40)}
          </Small>
        </div>

        {/* skeleton loading */}
        <Skeleton className="bg-white/25" />
      </div>
    </Wrapper>
  );
};

type WrapperProps = {
  isUpcoming?: boolean;
  href: string;
  className: string;
  children: React.ReactNode;
};

/* if the card is upcoming, Wrap it in a div, else wrap it in a Link */
const Wrapper = ({ isUpcoming, href, children, className }: WrapperProps) => {
  return isUpcoming ? (
    <div className={className}>{children}</div>
  ) : (
    <Link href={{ pathname: href }} className={className}>
      {children}
    </Link>
  );
};

export default Swipercard;
