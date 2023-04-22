import { ISearch } from "@consumet/extensions";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { IAnimeResultV2, UpcomingAnime } from "../types/anime";

type AnimeResult = ISearch<IAnimeResultV2>;

type AnimeState = {
  [T in "trending" | "popular" | "recent"]: AnimeResult | null;
} & {
  upcoming: UpcomingAnime | null;
};

const animeInitialState: AnimeState = {
  upcoming: null,
  trending: null,
  popular: null,
  recent: null,
};

const animeSlice = createSlice({
  name: "anime",
  initialState: animeInitialState,
  reducers: {
    setTrending(state, action: PayloadAction<AnimeResult>) {
      state.trending = action.payload;
    },

    setUpcoming(state, action: PayloadAction<UpcomingAnime>) {
      state.upcoming = action.payload;
    },

    setPopular(state, action: PayloadAction<AnimeResult>) {
      state.popular = action.payload;
    },

    setRecent(state, action: PayloadAction<AnimeResult>) {
      state.recent = action.payload;
    },
  },
});

export const { setTrending, setUpcoming, setPopular, setRecent } =
  animeSlice.actions;

export default animeSlice.reducer;
