export interface UpcomingAnime {
  pagination: Pagination;
  data: UpcomingAnimeData[];
}

interface Pagination {
  last_visible_page: number;
  has_next_page: boolean;
  current_page: number;
  items: Items;
}

interface Items {
  count: number;
  total: number;
  per_page: number;
}

export interface UpcomingAnimeData {
  mal_id: number;
  url: string;
  images: Images;
  trailer: Trailer;
  approved: boolean;
  titles: Title[];
  /** @deprecated */
  title: string;
  /** @deprecated */
  title_english?: string;
  /** @deprecated */
  title_japanese?: string;
  /** @deprecated */
  title_synonyms: string[];
  type?: string;
  source?: string;
  episodes?: number;
  status?: string;
  airing: boolean;
  aired: Aired;
  duration?: string;
  rating?:
    | "G - All Ages"
    | "PG - Children"
    | "PG-13 - Teens 13 or older"
    | "R - 17+ (violence & profanity)"
    | "R+ - Mild Nudity"
    | "Rx - Hentai"
    | string;
  score?: number;
  scored_by?: number;
  rank?: number;
  popularity?: number;
  members?: number;
  favorites?: number;
  synopsis?: string;
  background?: string;
  season?: string;
  year?: number;
  broadcast: MalProp;
  producers: MalProp[];
  licensors: MalProp[];
  studios: MalProp[];
  genres: MalProp[];
  explicit_genres: MalProp[];
  themes: MalProp[];
  demographics: MalProp[];
}

interface Images {
  jpg: Image;
  webp: Image;
}

interface Image {
  image_url?: string;
  small_image_url?: string;
  large_image_url?: string;
}

interface Trailer {
  youtube_id?: string;
  url?: string;
  embed_url?: string;
}

interface Title {
  type: string;
  title: string;
}

interface Aired {
  from?: string;
  to?: string;
  prop: {
    from: DateProp;
    to: DateProp;
  };
  string: string;
}

interface DateProp {
  day?: number;
  month?: number;
  year?: number;
}

interface MalProp {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}
