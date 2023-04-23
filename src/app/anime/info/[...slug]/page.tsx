import Image from "next/image";
import { META } from "@consumet/extensions";

import { store } from "@/store";
import { setAnimeInfo } from "@/store/anime-slice";
import { getAnimeTitle } from "@/lib/utils";
import { H3, Small } from "@/components/ui/topography";

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

const AnimeInfo = async ({ params: { slug } }: AnimeInfoProps) => {
  const id = slug[0];

  const anime =
    store.getState().anime.animeInfo?.find((a) => a.id === id) ??
    (await fetchAnimeInfo(id));

  return (
    <div className="flex h-screen w-full flex-col">
      {/* cover image */}
      <div className="absolute left-0 top-0 h-60 w-full sm:h-64 md:h-72 lg:h-96">
        <Image
          src={anime.cover ?? ""}
          alt={getAnimeTitle(anime)}
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />

        {/* overlay */}
        <div className="absolute bottom-0 left-0 h-full w-full bg-gradient-to-b from-transparent to-fill-box/50" />
      </div>

      {/* info */}
      <div className=""></div>
    </div>
  );
};

export default AnimeInfo;
