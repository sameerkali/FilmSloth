import React from "react";
import { Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import useStyles from "./styles";

const Movie = ({ movie, i }) => {
  // console.log(movie, i);
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2} className={classes.movie}>
      <Typography className={classes.title} variant="h5">
        {movie.title}
      </Typography>
    </Grid>
  );
};

export default Movie;
