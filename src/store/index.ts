import { configureStore } from "@reduxjs/toolkit";

import animeReducer from "./anime-slice";
import searchReducer from "./search-slice";

export const store = configureStore({
  reducer: {
    anime: animeReducer,
    search: searchReducer,
  },

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});

// https://redux.js.org/usage/usage-with-typescript#define-root-state-and-dispatch-types
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
