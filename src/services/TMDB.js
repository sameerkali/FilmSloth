import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

console.log(
  "this app is create by Sameer Faridi | GitHub @sameerkali 🚀🍌6️⃣9️⃣"
);

// Get the TMDB API key from the environment
const tmdbApiKey = import.meta.env.VITE_TMDB_KEY;

// Create the API
export const tmdbApi = createApi({
  reducerPath: "tmdbApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3" }),
  endpoints: (builder) => ({
    //* Get Genres
    getGenres: builder.query({
      query: () => `genre/movie/list?api_key=${tmdbApiKey}`
    }),

    //* Get Movies By [Type]
    getMovies: builder.query({
      query: ({ genreIdOrCategoryName, page, searchQuery }) => {
        // Get Movies by Search
        if (searchQuery) {
          return `/search/movie?query=${searchQuery}&page=${page}&api_key=${tmdbApiKey}`;
        }

        // Get Movies by Category
        if (
          genreIdOrCategoryName &&
          typeof genreIdOrCategoryName === "string"
        ) {
          return `/movie/${genreIdOrCategoryName}?page=${page}&api_key=${tmdbApiKey}`;
        }

        // Get Movies by Genre (ID)
        if (
          genreIdOrCategoryName &&
          typeof genreIdOrCategoryName === "number"
        ) {
          return `discover/movie?with_genres=${genreIdOrCategoryName}&page=${page}&api_key=${tmdbApiKey}`;
        }

        // Get popular movies by default
        return `/movie/popular?page=${page}&api_key=${tmdbApiKey}`;
      }
    }),
    // Get Movie
    getMovie: builder.query({
      query: (id) =>
        `/movie/${id}?append_to_response=videos,credits&api_key=${tmdbApiKey}`
    }),
    // Get Actor
    getActor: builder.query({
      query: (id) => `person/${id}?api_key=${tmdbApiKey}`
    }),
    // Get Recommendations
    getRecommendations: builder.query({
      query: ({ movie_id, list }) => `/movie/${movie_id}/${list}?api_key=${tmdbApiKey}`,
    }),

    // Get Movies by Actor
    getMoviesByActorId: builder.query({
      query: ({ id, page }) =>
        `/discover/movie?with_cast=${id}&page=${page}&api_key=${tmdbApiKey}`
    }),

    // Get User Specific Lists
    getList: builder.query({
      query: ({ listName, accountId, sessionId, page }) =>
        `/account/${accountId}/${listName}?api_key=${tmdbApiKey}&session_id=${sessionId}&page=${page}`
    })
  })
});

// Export the `useGetMoviesQuery` hook

export const {
  useGetGenresQuery,
  useGetMoviesQuery,
  useGetMovieQuery,
  useGetRecommendationsQuery,
  useGetActorQuery,
  useGetMoviesByActorIdQuery,
  useGetListQuery
} = tmdbApi;
