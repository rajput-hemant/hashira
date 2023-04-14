import { META } from "@consumet/extensions";

import { UpcomingAnime } from "@/types/anime";
import Hero from "@/components/home/hero";
import SwiperClient from "@/components/swiper-client";
import { H2 } from "@/components/ui/topography";

const getUpcomingAnime = async () => {
  const res = await fetch("https://api.jikan.moe/v4/top/anime?filter=upcoming");
  const data: UpcomingAnime = await res.json();

  return data;
};

const getAnime = async () => {
  const anilist = new META.Anilist();

  try {
    const [trending, popular, recentReleases, upcomingAnime] =
      await Promise.all([
        anilist.fetchTrendingAnime(),
        anilist.fetchPopularAnime(),
        anilist.fetchRecentEpisodes(),
        getUpcomingAnime(),
      ]);

    return { trending, popular, recentReleases, upcomingAnime };
  } catch (error) {
    throw new Error(error as any);
  }
};

const Home = async () => {
  const { trending, popular, recentReleases, upcomingAnime } = await getAnime();

  return (
    <div className="container">
      {/* hero */}
      <Hero trending={trending} />

      <H2>Upcoming Anime</H2>
      <SwiperClient items={upcomingAnime} isUpcoming />

      <H2>Popular Anime</H2>
      <SwiperClient items={popular} />

      <H2>Recent Releases</H2>
      <SwiperClient items={recentReleases} />
    </div>
  );
};

export default Home;
