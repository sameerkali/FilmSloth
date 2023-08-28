//* the solution working with main page

// import { Grid } from "@mui/material";
// import PropTypes from "prop-types";
// import useStyles from "./styles";
// import { Movie } from "../index.js";

// function MovieList({ movies }) {
//   const some = JSON.stringify(movies);
//   const classes = useStyles();
//   return (
//     <Grid container className={classes.moviesContainer}>
//       {JSON.parse(some).map((movie, i) => {
//         return <Movie key={i} movie={movie} i={i} />;
//       })}
//     </Grid>
//   );
// }

// MovieList.propTypes = {
//   movies: PropTypes.arrayOf(
//     PropTypes.shape({
//       title: PropTypes.string.isRequired,
//       // Add other required or optional properties here
//     })
//   ).isRequired,
// };

// export default MovieList;

//* the solution working with movie recommendation

import React from "react";
import { Grid } from "@mui/material";
import useStyles from "./styles";
import { Movie } from "../index";
import PropTypes from "prop-types";

function MovieList({ movies, numberOfMovies, excludeFirst }) {
  const classes = useStyles();
  const startFrom = excludeFirst ? 1 : 0;

  const moviesArray = movies.results || [];

  // console.log("Movies object:", movies);
  // console.log("Movies array:", moviesArray);

  return (
    <Grid container className={classes.moviesContainer}>
      {moviesArray
        .slice(startFrom, startFrom + numberOfMovies)
        .map((movie, i) => (
          <Movie key={i} movie={movie} i={i} />
        ))}
    </Grid>
  );
}
MovieList.propTypes = {
  movies: PropTypes.shape({
    results: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default MovieList;
