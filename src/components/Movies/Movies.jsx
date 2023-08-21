// import React, {useState, useEffect} from "react";
// import {Box, CircularProgress, useMediaQuery, Typography} from '@mui/material'
// import { UseSelector } from "react-redux/es/hooks/useSelector";
// import { UseSelector } from "react-redux";
import { useGetMoviesQuery } from "../../services/TMDB";



const Movies = () => {
  const {data} = useGetMoviesQuery();
  console.log(data) 
  return <div>Movies by sameer</div>;
};

export default Movies;
