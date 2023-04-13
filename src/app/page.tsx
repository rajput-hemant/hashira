import { META } from "@consumet/extensions";

import Hero from "@/components/home/hero";
import SwiperClient from "@/components/swiper-client";
import { H2 } from "@/components/ui/topography";

const getAnime = async () => {
  const meta = new META.Anilist();
  try {
    const [trending, popular, recentReleases] = await Promise.all([
      meta.fetchTrendingAnime(),
      meta.fetchPopularAnime(),
      meta.fetchRecentEpisodes(),
    ]);

    return { trending, popular, recentReleases };
  } catch (error) {
    throw new Error(error as any);
  }
};

const Home = async () => {
  const { trending, popular, recentReleases } = await getAnime();

  return (
    <div className="container">
      {/* hero */}
      <Hero trending={trending} />

      <H2>Popular Anime</H2>
      <SwiperClient items={popular} />

      <H2>Recent Releases</H2>
      <SwiperClient items={recentReleases} />
    </div>
  );
};

export default Home;
