import Link from "next/link";
import { ANIME, META } from "@consumet/extensions";

import { UpcomingAnime } from "@/types/anime";
import {
  animeStoreSelector,
  setPopularAnime,
  setRecentAnime,
  setTrendingAnime,
  setUpcomingAnime,
} from "@/store";
import Hero from "@/components/anime/hero";
import SwiperClient from "@/components/swiper/swiper-client";
import { H2 } from "@/components/ui/topography";

export const revalidate = 600; // revalidate every 10 minutes
// set it to 0 for dynamically rendered pages

const anilist = new META.Anilist(new ANIME[animeStoreSelector().provider]());

const getUpcomingAnime = async () => {
  try {
    const res = await fetch(
      "https://api.jikan.moe/v4/top/anime?filter=upcoming"
    );
    const data: UpcomingAnime = await res.json();

    return data;
  } catch (error) {
    throw error;
  }
};

/*
 * return the data from store if exists,
 * else fetch the data
 */
const getAnime = async () => {
  try {
    const animeStore = animeStoreSelector();

    const [trending, popular, recent, upcoming] = await Promise.all([
      animeStore.trending ?? anilist.fetchTrendingAnime(),
      animeStore.popular ?? anilist.fetchPopularAnime(),
      animeStore.recent ?? anilist.fetchRecentEpisodes(),
      animeStore.upcoming ?? getUpcomingAnime(),
    ]);

    if (!animeStore.trending) setTrendingAnime(trending);
    if (!animeStore.popular) setPopularAnime(popular);
    if (!animeStore.recent) setRecentAnime(recent);
    if (!animeStore.upcoming) setUpcomingAnime(upcoming);

    return { trending, popular, recent, upcoming };
  } catch (error) {
    throw error;
  }
};

const Anime = async () => {
  const { trending, popular, recent, upcoming } = await getAnime();

  return (
    <>
      {/* hero */}
      <Hero trending={trending} />

      {/* upcoming anime */}
      <Title href="/anime/upcoming">Upcoming Anime</Title>
      <SwiperClient items={upcoming} isUpcoming />

      {/* popular anime */}
      <Title href="/anime/popular">Popular Anime</Title>
      <SwiperClient items={popular} />

      {/* recent releases */}
      <Title href="/anime/recent-releases">Recent Releases</Title>
      <SwiperClient items={recent} />
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
