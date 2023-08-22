import { configureStore } from "@reduxjs/toolkit";
import { tmdbApi } from "../services/TMDB";

export default configureStore({
  reducer: {
    // Use the reducerPath of tmdbApi and its reducer
    [tmdbApi.reducerPath]: tmdbApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tmdbApi.middleware)
});
