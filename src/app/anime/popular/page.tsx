import { Metadata } from "next";
import { META } from "@consumet/extensions";

import { animeStoreSelector, setPopularAnime } from "@/store";
import SwiperCard from "@/components/swiper/swiper-card";
import { H1 } from "@/components/ui/topography";

export const metadata: Metadata = {
  title: "Popular Anime | Hashira",
  description: "Browse popular anime on Hashira",
};

const anilist = new META.Anilist();

const fetchPopularAnime = async () => {
  const popular = await anilist.fetchPopularAnime();

  // set popular anime in store
  setPopularAnime(popular);

  return popular;
};

const PopularAnimePage = async () => {
  // get popular anime from store if it exists
  // otherwise fetch it
  const popular = animeStoreSelector().popular ?? (await fetchPopularAnime());

  return (
    <>
      <H1 className="py-4 sm:py-6 md:py-8">Popular Anime</H1>

      <div className="grid-rows grid h-full w-full grid-cols-2 gap-8 py-4 sm:grid-cols-3 md:grid-cols-4 md:gap-12 lg:grid-cols-5 xl:grid-cols-6">
        {popular.results.map((anime) => (
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

export default PopularAnimePage;
