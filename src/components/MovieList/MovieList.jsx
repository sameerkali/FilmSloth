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





// import React, {useState, useEffect} from 'react';
// import { Grid } from '@mui/material';
// import PropTypes from 'prop-types';
// import useStyles from './styles';
// import { Movie } from '../index.js';

// function MovieList({ movies }) {
//   const classes = useStyles();
//   const startFrom = 0;
  
//   const moviesState = movies?.results || [];
  
//   console.log(moviesState)

//   return (
//     <Grid container className={classes.moviesContainer}>
//       {moviesState.map((movie, i) => (
//         <Movie key={i} movie={movie} i={i} />
//       ))}
//     </Grid>
//   );
// }

// MovieList.propTypes = {
//   movies: PropTypes.arrayOf(PropTypes.object),
// };

// export default MovieList;




// /* eslint-disable quotes */
// import React from "react";
// import { Grid } from "@mui/material";

// import useStyles from "./styles";
// import { Movie } from '../index';

// function MovieList({ movies, numberOfMovies, excludeFirst }) {
//   const classes = useStyles();
//   const startFrom = excludeFirst ? 1 : 0;
//   // console.log(movies)
// const newMovieArray = JSON.parse(JSON.stringify(movies))
// // console.log("haihaihai"+newMovieArray)
//   const moviesArray = Array.isArray(movies) ? movies: [];

//   return (
//     <Grid container className={classes.moviesContainer}>
//       {moviesArray.map((movie, i) => (
//         <Movie key={i} movie={movie} i={i} />
//       ))}
//     </Grid>
//   );
// }

// export default MovieList;

