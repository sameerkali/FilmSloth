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
import { MovieList } from "../index";
import { selectGenreOrCategory } from '../../features/currentGenreOrCategory';

const Movies = () => {
  const [page, setPage] = useState(1)
  const { genreIdOrCategoryName, searchQuery } = useSelector(
    (state) => state.currentGenreOrCategory
  );
  // console.log(genreIdOrCategoryName)

  // Fetch movie data using the useGetMoviesQuery hook
  const { data, error, isFetching } = useGetMoviesQuery({genreIdOrCategoryName, page, searchQuery});

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
      <MovieList movies={data.results} />
    </div>
  );
};

export default Movies;
