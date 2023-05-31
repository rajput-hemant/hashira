import { Metadata } from "next";
import { META } from "@consumet/extensions";

import { animeStoreSelector, setTrendingAnime } from "@/store";
import SwiperCard from "@/components/swiper/swiper-card";
import { H1 } from "@/components/ui/topography";

export const metadata: Metadata = {
  title: "Trending Anime | Hashira",
  description: "Browse trending anime on Hashira",
};
const anilist = new META.Anilist();

const fetchTrendingAnime = async () => {
  const trending = await anilist.fetchTrendingAnime();

  // set trending anime in store
  setTrendingAnime(trending);

  return trending;
};

const RecentAnimePage = async () => {
  // get trending anime from store if it exists
  // otherwise fetch it
  const trending =
    animeStoreSelector().trending ?? (await fetchTrendingAnime());

  return (
    <>
      <H1 className="py-4 sm:py-6 md:py-8">Trending Anime</H1>

      <div className="grid-rows grid h-full w-full grid-cols-2 gap-8 py-4 sm:grid-cols-3 md:grid-cols-4 md:gap-12 lg:grid-cols-5 xl:grid-cols-6">
        {trending.results.map((anime) => (
          <SwiperCard
            key={anime.id}
            item={anime}
            className="mx-auto w-40 lg:w-48 xl:w-56"
          />
        ))}
      </div>
    </>
  );
};

export default RecentAnimePage;
