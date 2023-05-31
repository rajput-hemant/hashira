import { Metadata } from "next";
import { META } from "@consumet/extensions";

import { animeStoreSelector, setRecentAnime } from "@/store";
import SwiperCard from "@/components/swiper/swiper-card";
import { H1 } from "@/components/ui/topography";

export const metadata: Metadata = {
  title: "Recently Released Episodes | Hashira",
  description: "Browse recently released episodes on Hashira",
};
const anilist = new META.Anilist();

const fetchPopularAnime = async () => {
  const recent = await anilist.fetchRecentEpisodes();

  // set recent anime in store
  setRecentAnime(recent);
  return recent;
};

const RecentAnimePage = async () => {
  // get recent anime from store if it exists
  // otherwise fetch it
  const recent = animeStoreSelector().recent ?? (await fetchPopularAnime());

  return (
    <>
      <H1 className="py-4 sm:py-6 md:py-8">Recent Episodes</H1>

      <div className="grid-rows grid h-full w-full grid-cols-2 gap-8 py-4 sm:grid-cols-3 md:grid-cols-4 md:gap-12 lg:grid-cols-5 xl:grid-cols-6">
        {recent.results.map((anime) => (
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
