import React, { useState, useEffect } from "react";
import {
  Modal,
  Typography,
  Button,
  ButtonGroup,
  Grid,
  Box,
  CircularProgress,
  Rating
} from "@mui/material";
import {
  Movie as MovieIcon,
  Theaters,
  Language,
  PlusOne,
  Favorite,
  FavoriteBorderOutlined,
  Remove,
  ArrowBack
} from "@mui/icons-material";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import useStyles from "./styles";
import { MovieList } from "../index";
import {
  useGetMovieQuery,
  useGetRecommendationsQuery,
  useGetListQuery
} from "../../services/TMDB";
import { selectGenreOrCategory } from "../../features/currentGenreOrCategory";
import genreIcons from "../../assets/genres";

function MovieInfo() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { id } = useParams();
  const classes = useStyles();

  const { data, isFetching, error } = useGetMovieQuery(id);

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <CircularProgress size="8rem" style={{ color: "green" }} />
      </Box>
    );
  }
  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <Link to="/">Something has gone wrong return to home</Link>
      </Box>
    );
  }

  return (
    <>
      <Grid container className={classes.containerSpaceAround}>
        <Grid item sm={12} lg={4}>
          <img
            className={classes.poster}
            src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`}
            alt={data?.title}
            title={data?.title}
          ></img>
        </Grid>
        <Grid item container direction="column" lg={7}>
          <Typography variant="h3" align="center" gutterBottom>
            {data?.title} ({data.release_date.split("-")[0]})
          </Typography>
          <Typography variant="h5" align="center" gutterBottom>
            {data?.tagline}
          </Typography>
          <Grid item className={classes.containerSpaceAround}>
            <Box display="flex" align="center">
              <Rating
                readOnly
                title={data.vote_average}
                value={data.vote_average / 2}
              />

              <Typography
                variant="subtitle1"
                gutterBottom
                style={{ marginLeft: "10px" }}
              >
                {data?.vote_average} / 10
              </Typography>
            </Box>
            <Typography variant="16" align="center" gutterBottom>
              {data?.runtime}min{" "}
              {data?.spoken_languages.length > 0
                ? `/ ${data?.spoken_languages[0].name}`
                : ""}
            </Typography>
          </Grid>
          <Grid item className={classes.genresContainer}>
            {data?.genres?.map((genre) => {
              
              <Link
                key={genre.name}
                className={classes.links}
                to="/"
                onClick={() => {}}
              >

                <img
                  src={genreIcons[genre.name.toLowerCase()]}
                  className={classes.genreImage}
                  height={30}
                />

                <Typography color="textPrimary" variant="subtitle1">
                  {genre?.name}
                </Typography>
                
              </Link>;
            })}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
export default MovieInfo;
