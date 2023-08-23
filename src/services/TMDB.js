import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const page = 100;

console.log("this app is create by Sameer Faridi | GitHub @sameerkali 🚀🍌6️⃣9️⃣")

// Get the TMDB API key from the environment
const tmdbApiKey = import.meta.env.VITE_REACT_APP_TMDB_KEY;

// Create the API
export const tmdbApi = createApi({
  reducerPath: "tmdbApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3" }),
  endpoints: (builder) => ({
    getMovies: builder.query({
      // Pass the `page` variable as an argument to the query function
      query: () => `movie/popular?page=${page}&api_key=${tmdbApiKey}`
    })
  })
});

// Export the `useGetMoviesQuery` hook
export const { useGetMoviesQuery } = tmdbApi;
