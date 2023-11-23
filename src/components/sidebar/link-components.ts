import type { IconProps } from "../icons";
import {
  Category,
  Discover,
  History,
  Home,
  Search,
  Settings2,
  Trending,
  TwoUser,
} from "../icons";

export type LinkComponent = {
  title: string;
  href: string;
  description?: string;
  icon: React.FC<IconProps>;
};

export const linkComponents: LinkComponent[] = [
  { icon: Home, title: "Home", href: "/home" },
  { icon: Trending, title: "Trending", href: "/trending" },
  { icon: Discover, title: "Discover", href: "/discover" },
  { icon: TwoUser, title: "People", href: "/people" },
  { icon: Category, title: "Featured List", href: "/featured-list" },
  { icon: History, title: "History", href: "/watch-history" },
  { icon: Settings2, title: "Settings", href: "/settings" },

  // search
  { icon: Search, title: "Search Anime", href: "/search/anime" },
  { icon: Search, title: "Search Movies", href: "/search/movies" },
  { icon: Search, title: "Search TV Shows", href: "/search/tv-shows" },
  { icon: Search, title: "Search People", href: "/search/people" },

  // anime
  {
    icon: Discover,
    title: "Popular",
    href: "/anime/popular",
    description: "Widely watched and buzzed about anime.",
  },
  {
    icon: Discover,
    title: "Trending",
    href: "/anime/trending",
    description: "Currently gaining popularity et attention among viewers.",
  },
  {
    icon: Discover,
    title: "Recent Episodes",
    href: "/anime/recent-episodes",
    description: "Latest Episodes on ongoing anime series.",
  },
  {
    icon: Discover,
    title: "Random Anime",
    href: "/anime/random-anime",
    description: "Randomly selected anime without any filters.",
  },

  // movies
  {
    icon: Discover,
    title: "Popular",
    href: "/movies/popular",
    description: "Widely watched and buzzed about filems.",
  },
  {
    icon: Discover,
    title: "Now Playing",
    href: "/movies/now-playing",
    description: "Currently showing in theaters.",
  },
  {
    icon: Discover,
    title: "Upcoming",
    href: "/movies/upcoming",
    description: "Releases Coming soon to theatres.",
  },
  {
    icon: Discover,
    title: "Top Rated",
    href: "/movies/top-rated",
    description:
      "Highest rated films, based on viewers ratings & critic reviews.",
  },

  // tv shows
  {
    icon: Discover,
    title: "Popular",
    href: "/tv-shows/popular",
    description: "Widely watched and buzzed about tv shows.",
  },
  {
    icon: Discover,
    title: "Airing Today",
    href: "/tv-shows/airing",
    description: "Currently playing on TV Networks & streaming services.",
  },
  {
    icon: Discover,
    title: "On TV",
    href: "/tv-shows/on-tv",
    description: "Available to watch.",
  },
  {
    icon: Discover,
    title: "Top Rated",
    href: "/tv-shows/top-rated",
    description:
      "Highest rated TV Shows, based on viewers ratings & critic reviews.",
  },
];
