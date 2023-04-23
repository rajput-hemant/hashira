import Link from "next/link";
import { META } from "@consumet/extensions";

import { UpcomingAnime } from "@/types/anime";
import { store } from "@/store";
import {
  setPopular,
  setRecent,
  setTrending,
  setUpcoming,
} from "@/store/anime-slice";
import Hero from "@/components/anime/hero";
import SwiperClient from "@/components/swiper/swiper-client";
import { H2 } from "@/components/ui/topography";

export const revalidate = 600; // revalidate every 10 minutes
// set it to 0 for dynamically rendered pages

const anilist = new META.Anilist();

const getUpcomingAnime = async () => {
  const res = await fetch("https://api.jikan.moe/v4/top/anime?filter=upcoming");
  const data: UpcomingAnime = await res.json();

  return data;
};

/*
 * return the data from store if exists,
 * else fetch the data
 */
const getAnime = async () => {
  try {
    const animeSlice = store.getState().anime;

    const [trending, popular, recentReleases, upcomingAnime] =
      await Promise.all([
        animeSlice.trending ?? anilist.fetchTrendingAnime(),
        animeSlice.popular ?? anilist.fetchPopularAnime(),
        animeSlice.recent ?? anilist.fetchRecentEpisodes(),
        animeSlice.upcoming ?? getUpcomingAnime(),
      ]);

    if (!animeSlice.trending) store.dispatch(setTrending(trending));
    if (!animeSlice.popular) store.dispatch(setPopular(popular));
    if (!animeSlice.recent) store.dispatch(setRecent(recentReleases));
    if (!animeSlice.upcoming) store.dispatch(setUpcoming(upcomingAnime));

    return { trending, popular, recentReleases, upcomingAnime };
  } catch (error) {
    throw error;
  }
};

const Anime = async () => {
  const { trending, popular, recentReleases, upcomingAnime } = await getAnime();

  return (
    <>
      {/* hero */}
      <Hero trending={trending} />

      {/* upcoming anime */}
      <Title href="/anime/upcoming">Upcoming Anime</Title>
      <SwiperClient items={upcomingAnime} isUpcoming />

      {/* popular anime */}
      <Title href="/anime/popular">Popular Anime</Title>
      <SwiperClient items={popular} />

      {/* recent releases */}
      <Title href="/anime/recent-releases">Recent Releases</Title>
      <SwiperClient items={recentReleases} />
    </>
  );
};

type TitleProps = {
  href: string;
  children: React.ReactNode;
};

const Title = ({ href, children }: TitleProps) => {
  return (
    <div
      id={href.split("/")[2]}
      className="flex w-full items-center justify-between"
    >
      <H2>{children}</H2>

      <Link
        href={href}
        className="flex items-center gap-1 font-semibold text-fill-light underline-offset-4 hover:text-white hover:underline"
      >
        View All
      </Link>
    </div>
  );
};

export default Anime;
