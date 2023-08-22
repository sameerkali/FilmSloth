import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const page = 1;
// I dont know why the dotenv is not working with react 18 vite app, please dont use this api key use your own (aapko vsCode ki kasam)
const tmdbApiKey = "48386cea6d36fadd5bb54bb27b60e075";

export const tmdbApi = createApi({
  reducerPath: "tmdbApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3" }),
  endpoints: (builder) => ({
    getMovies: builder.query({
      // Pass the 'page' variable as an argument to the query function
      query: () => `movie/popular?page=${page}&api_key=${tmdbApiKey}`
    })
  })
});

export const { useGetMoviesQuery } = tmdbApi;
