import { Suspense } from "react";
import Link from "next/link";
import { META } from "@consumet/extensions";
import { ExternalLink } from "lucide-react";
import Hero from "~/src/components/anime/hero";

import { UpcomingAnime } from "@/types/anime";
import SwiperClient from "@/components/swiper/swiper-client";
import { H2 } from "@/components/ui/topography";

const anilist = new META.Anilist();

const getUpcomingAnime = async () => {
  const res = await fetch("https://api.jikan.moe/v4/top/anime?filter=upcoming");
  const data: UpcomingAnime = await res.json();

  return data;
};

const getAnime = async () => {
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

const Anime = async () => {
  const { trending, popular, recentReleases, upcomingAnime } = await getAnime();

  return (
    <Suspense>
      <div className="container">
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
      </div>
    </Suspense>
  );
};
type TitleProps = {
  href: string;
  children: React.ReactNode;
};

const Title = ({ href, children }: TitleProps) => {
  return (
    <div className="flex w-full items-center justify-between">
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
