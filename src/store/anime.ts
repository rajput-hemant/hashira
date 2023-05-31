import { IAnimeInfo, ISearch } from "@consumet/extensions";
import { create } from "zustand";

import { IAnimeResultV2, UpcomingAnime } from "@/types/anime";

type AnimeResult = ISearch<IAnimeResultV2>;

type AnimeState = {
  provider:
    | "Gogoanime"
    | "NineAnime"
    | "AnimePahe"
    | "Zoro"
    | "AnimeFox"
    | "Enime"
    | "Crunchyroll"
    | "Bilibili"
    | "Marin";
  upcoming: UpcomingAnime | null;
  animeInfo: IAnimeInfo[] | null;
} & {
  [T in "trending" | "popular" | "recent"]: AnimeResult | null;
};

export const useAnimeStore = create<AnimeState>(() => ({
  provider: "Gogoanime",
  upcoming: null,
  trending: null,
  popular: null,
  recent: null,
  animeInfo: null,
}));

// selector to access the store
export const animeStoreSelector = useAnimeStore.getState;

//  actions to update the store
export const setTrendingAnime = (trending: AnimeResult) => {
  useAnimeStore.setState({ trending });
};

export const setUpcomingAnime = (upcoming: UpcomingAnime) => {
  useAnimeStore.setState({ upcoming });
};

export const setPopularAnime = (popular: AnimeResult) => {
  useAnimeStore.setState({ popular });
};

export const setRecentAnime = (recent: AnimeResult) => {
  useAnimeStore.setState({ recent });
};

export const setAnimeInfo = (animeInfo: IAnimeInfo) => {
  useAnimeStore.setState((state) => {
    if (state.animeInfo) {
      state.animeInfo.push(animeInfo);
    } else {
      state.animeInfo = [animeInfo];
    }

    return state;
  });
};
