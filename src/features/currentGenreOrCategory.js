// import { createSlice } from '@reduxjs/toolkit';

// export const genreOrCategory = createSlice({
//   name: 'genreOrCategory',
//   initialState: {
//     genreIdOrCategoryName: '',
//     page: 1,
//     searchQuery: '',
//   },
//   reducers: {
//     selectGenreOrCategory: (state, action) => {
//       state.genreIdOrCategoryName = action.payload;
//       state.searchQuery = '';
//     },
//     searchMovie: (state, action) => {
//       state.searchQuery = action.payload;
//     },
//   },
// });

// export const { selectGenreOrCategory, searchMovie } = genreOrCategory.actions;

// export default genreOrCategory.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  genreIdOrCategoryName: "",
  page: 1,
  searchQuery: ""
};

const genreOrCategorySlice = createSlice({
  name: "genreOrCategory",
  initialState,
  reducers: {
    selectGenreOrCategory: (state, action) => {
    //  /*Dubugging*/  console.log(action.payload);
      state.genreIdOrCategoryName = action.payload;
      state.searchQuery = "";
    },
    searchMovie: (state, action) => {
      state.searchQuery = action.payload;
    }
  }
});

export const { selectGenreOrCategory, searchMovie } =
  genreOrCategorySlice.actions;

export default genreOrCategorySlice.reducer;
