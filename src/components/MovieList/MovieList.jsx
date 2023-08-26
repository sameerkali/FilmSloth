import { Grid } from "@mui/material";
import PropTypes from "prop-types";
import useStyles from "./styles";
import { Movie } from "../index.js";

function MovieList({ movies }) {
  const some = JSON.stringify(movies);
  const classes = useStyles();
  return (
    <Grid container className={classes.moviesContainer}>
      {JSON.parse(some).map((movie, i) => {
        return <Movie key={i} movie={movie} i={i} />;
      })}
    </Grid>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      // Add other required or optional properties here
    })
  ).isRequired,
};

export default MovieList;






