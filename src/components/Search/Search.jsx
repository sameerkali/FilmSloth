import React, { useState } from 'react';
import { TextField, InputAdornment } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { useDispatch } from 'react-redux';

import useStyles from './styles';
import { searchMovie } from '../../features/currentGenreOrCategory';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

const Search = () => {
  const classes = useStyles();
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const location = useLocation();

  
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      //*  /*Debugging*/ console.log("search -> : ", query)
      dispatch(searchMovie(query));
    }
  };
  //* hide searchbar from every other pages except home page
  if( location.pathname !== '/') return null;
  
  return (
    <div className={classes.searchContainer}>
      <TextField
        onKeyPress={handleKeyPress}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        variant="standard"
        InputProps={{
          className: classes.input,
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
}

export default Search;
