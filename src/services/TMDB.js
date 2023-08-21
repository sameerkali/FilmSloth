/* eslint-disable no-undef */
import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const page = 1;
// const tmdbApiKey = process.env.REACT_APP_TMDB_KEY;
const tmdbApiKey ='48386cea6d36fadd5bb54bb27b60e075';

export const tmdbApi = createApi({
    reducerPath: 'tmdbApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.themoviedb.org/3'}),
    endpoints: (builder) => ({
        getMovies: builder.query({
            query: () => `movie/popular?page=${page}&api_key=${tmdbApiKey}`,
        })
    }),
})

export const {
    useGetMoviesQuery,
} = tmdbApi;