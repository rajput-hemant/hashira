import Image from "next/image";
import Link from "next/link";
import { META } from "@consumet/extensions";
import {
  Bookmark,
  Construction,
  LayoutGrid,
  LayoutList,
  Smile,
} from "lucide-react";

import { store } from "@/store";
import { setAnimeInfo } from "@/store/anime-slice";
import { getAnimeTitle } from "@/lib/utils";
import EpisodeList from "@/components/anime/epidode-list";
import InfoSidebar from "@/components/anime/info-aside";
import InfoTitle from "@/components/anime/info-title";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type AnimeInfoProps = {
  params: {
    slug: string[];
  };
};

const anilist = new META.Anilist();

const fetchAnimeInfo = async (id: string) => {
  const anime = await anilist.fetchAnimeInfo(id);

  store.dispatch(setAnimeInfo(anime));

  return anime;
};

const TAB = {
  Overview: "Overview",
  Episodes: "Episode",
  EpisodeMode: {
    List: "list",
    Grid: "grid",
  },
  Characters: "Characters",
  Staff: "Staff",
};

const AnimeInfo = async ({ params: { slug } }: AnimeInfoProps) => {
  const id = slug[0];
  const title = slug[1];

  const anime =
    store.getState().anime.animeInfo?.find((a) => a.id === id) ??
    (await fetchAnimeInfo(id));

  const hasSubDub = (() => {
    if (anime.hasSub && anime.hasDub) {
      return "Sub | Dub";
    } else if (anime.hasSub) {
      return "Subtitled";
    } else if (anime.hasDub) {
      return "Dubbed";
    } else {
      return anime.subOrDub ?? "N/A";
    }
  })();

  return (
    <div className="flex w-full flex-col">
      {/* cover image */}
      <div className="absolute -top-16 left-0 h-56 w-full sm:h-64 md:h-72 lg:h-96">
        <Image
          src={anime.cover ?? ""}
          alt={getAnimeTitle(anime)}
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />

        {/* overlay */}
        <div className="absolute bottom-0 left-0 h-full w-full bg-gradient-to-b from-transparent to-fill-box/70" />
      </div>

      {/* info */}
      <div className="mt-40 flex w-full flex-col sm:mt-48 md:mt-56 lg:mt-80">
        <div className="-mt-28 flex h-40 items-end gap-4">
          <Image
            src={anime.image ?? ""}
            alt={getAnimeTitle(anime)}
            width={480}
            height={720}
            className="z-10 h-40 w-28 rounded-md object-cover sm:w-44"
          />

          <div className="flex w-full gap-4 sm:hidden">
            <div
              className={buttonVariants({
                variant: "destructive",
                className: "w-full font-bold max-w-[8rem]",
              })}
            >
              <Link href={`/watch/${id}/${title}`}>Watch Now</Link>
            </div>

            <Button className="ml-auto bg-yellow-500 px-2 text-black hover:bg-yellow-400">
              <Bookmark />
            </Button>
          </div>

          <InfoTitle
            id={id}
            title={title}
            anime={anime}
            classname="hidden sm:flex"
          />
        </div>
      </div>

      <InfoTitle id={id} title={title} anime={anime} classname="sm:hidden" />

      <div className="flex w-full py-4">
        <Badge className="capitalize">{hasSubDub}</Badge>

        <p className="ml-auto flex items-center gap-1 font-semibold">
          <Smile className="h-5 w-5 text-green-500" />
          {anime.rating ?? ""}%
        </p>
      </div>

      <div className="flex h-full w-full gap-2 py-4">
        <InfoSidebar anime={anime} />

        {/* anime overview & episodes tab */}
        <Tabs
          defaultValue={TAB.Overview}
          className="flex h-full w-full flex-col items-center  pt-2"
        >
          <TabsList className="bg-transparent md:bg-fill-dark/75">
            <TabsTrigger value={TAB.Overview}>Overview</TabsTrigger>
            <TabsTrigger value={TAB.Episodes}>Episodes</TabsTrigger>
            <TabsTrigger value={TAB.Characters}>Characters</TabsTrigger>
            <TabsTrigger value={TAB.Staff} className="hidden md:flex">
              Staff
            </TabsTrigger>
          </TabsList>

          {/* overview tab */}
          <TabsContent
            value={TAB.Overview}
            className="grid h-full w-full place-items-center border-white/10"
          >
            <Construction className="text-yellow-500" />
            Under Development
          </TabsContent>

          {/* episodes tab */}
          <TabsContent
            value={TAB.Episodes}
            className="w-full border-white/10 p-2"
          >
            {/* list view OR grid view  */}
            <Tabs defaultValue={TAB.EpisodeMode.List} className="h-full">
              {/* episode tab list */}
              <TabsList className="flex items-center bg-transparent">
                {/* list view */}
                <TabsTrigger value={TAB.EpisodeMode.List} className="min-w-fit">
                  <LayoutList className="h-5 w-5" />
                </TabsTrigger>

                {/* grid view */}
                <TabsTrigger value={TAB.EpisodeMode.Grid} className="min-w-fit">
                  <LayoutGrid className="h-5 w-5" />
                </TabsTrigger>
              </TabsList>

              {/* episode list */}
              <TabsContent
                value={TAB.EpisodeMode.List}
                className="flex h-full flex-col gap-2 border-none p-2"
              >
                <EpisodeList id={id} items={anime.episodes} mode="list" />
              </TabsContent>

              {/* episode grid */}
              <TabsContent
                value={TAB.EpisodeMode.Grid}
                className="grid grid-cols-1 gap-2 border-none p-2"
              >
                <EpisodeList id={id} items={anime.episodes} mode="grid" />
              </TabsContent>
            </Tabs>
          </TabsContent>

          {/* characters tab */}
          <TabsContent
            value={TAB.Characters}
            className="grid h-full w-full place-items-center  border-white/10"
          >
            <Construction className="text-yellow-500" />
            Under Development
          </TabsContent>

          {/* staff tab */}
          <TabsContent
            value={TAB.Staff}
            className="grid h-full w-full place-items-center  border-white/10"
          >
            <Construction className="text-yellow-500" />
            Under Development
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AnimeInfo;
