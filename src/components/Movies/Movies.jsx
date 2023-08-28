import React, { useState } from "react";
import {
  Typography,
  Grid,
  Grow,
  Tooltip,
  Rating,
  Box,
  CircularProgress,
  useMediaQuery
} from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useGetMoviesQuery } from "../../services/TMDB";
import { MovieList, Pagination} from "../index";
import { selectGenreOrCategory } from "../../features/currentGenreOrCategory";

const Movies = () => {
  const [page, setPage] = useState(1);
  const { genreIdOrCategoryName, searchQuery } = useSelector(
    (state) => state.currentGenreOrCategory
  );
  const lg = useMediaQuery((theme) => theme.breakpoints.only('lg'));
  const numberOfMovies = lg ? 16 : 18;
  // console.log(genreIdOrCategoryName);

  // Fetch movie data using the useGetMoviesQuery hook
  const { data, error, isFetching } = useGetMoviesQuery({
    genreIdOrCategoryName,
    page,
    searchQuery
  });

  // console.log(data);
  // console.log(data);
  // Display a loading spinner while fetching data
  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="4rem" />
      </Box>
    );
  }

  // Display an error message if data fetching encounters an error
  if (error) {
    return "An Error Has Occured.";
  }

  // Display a message if no movies match the search criteria
  if (!data?.results?.length) {
    return (
      <Box display="flex" alignItems="center" mt="20px">
        <Typography variant="h4">
          No Movies That Match That Name.
          <br />
          Please Search For Something Else.
        </Typography>
      </Box>
    );
  }
  // Render the MovieList component with fetched movie data
  return (

    <div>
      {
        <MovieList movies={data} numberOfMovies={numberOfMovies} excludeFirst />
      }
      <Pagination currentPage={page} setPage={setPage} totalPages={data.total_pages} />

      <Box marginTop="5rem" width="100%">
          <h4
            style={{
              textAlign: "center",
              color: "#ccc",
              marginBottom: "-1.5rem",
            }}
          >
            This app is created by @sameerkali
          </h4>
        </Box>
    </div>
  );
};

export default Movies;
