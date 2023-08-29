import alanBtn from "@alan-ai/alan-sdk-web";
import { useEffect, useContext } from "react";
import { ColorModeContext } from "./utils/ToggleColorMode";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchToken } from "./utils";
import {
  selectGenreOrCategory,
  searchMovie
} from "./features/currentGenreOrCategory";

const Alan = () => {
  const { setMode } = useContext(ColorModeContext);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    alanBtn({
      key: import.meta.env.VITE_ALAN_SDK_KEY,
      onCommand: ({ command, mode, genres, genreOrCategory, query }) => {
        if (command === "chooseGenre") {
          const genresArray = Array.from(genres);
          const foundGenre = genresArray.find(
            (g) => g.name.toLowerCase() === genreOrCategory.toLowerCase()
          );
          if (foundGenre) {
            history.push("/");
            dispatch(selectGenreOrCategory(foundGenre.id));
          } else {
            const category = genreOrCategory.startsWith("top")
              ? "top_rated"
              : genreOrCategory;
            history.push("/");
            dispatch(selectGenreOrCategory(category));
          }
        } else if (command === "changeMode") {
          if (mode === "dark") {
            setMode("dark");
          } else {
            setMode("light");
          }
        } else if (command === "login") {
          fetchToken();
        } else if (command === "logout") {
          localStorage.clear();
          history.push("/");
        } else if (command === "search") {
          dispatch(searchMovie(query));
        }
      }
    });
  }, []);
  return <></>;
};

export default Alan;

// import alanBtn from "@alan-ai/alan-sdk-web";
// import { useEffect, useContext } from "react";
// import { ColorModeContext } from "./utils/ToggleColorMode";
// import { useHistory } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { fetchToken } from "./utils";
// import {
//   selectGenreOrCategory,
//   searchMovie
// } from "./features/currentGenreOrCategory";

// const Alan = () => {
//   const { setMode } = useContext(ColorModeContext);
//   const dispatch = useDispatch();
//   const history = useHistory();

//   useEffect(() => {
//     alanBtn({
//       key: import.meta.env.VITE_ALAN_SDK_KEY,
//       onCommand: ({ command, mode, genres, genreOrCategory, query }) => {
//         if (command === "chooseGenre") {
//           const genreOrCategoryValue = genreOrCategory || "comedy";
//           console.log(genreOrCategory)
//           const genresValue = genres || [];
//           console.log(genres)
//           const foundGenre = genresValue.find(
//             (g) => g.name.toLowerCase() === genreOrCategoryValue.toLowerCase()
//           );
//           if (foundGenre) {
//             history.push("/");
//             dispatch(selectGenreOrCategory(foundGenre.id));
//           } else {
//             const category = genreOrCategoryValue.startsWith("top")
//               ? "top_rated"
//               : genreOrCategoryValue;
//             history.push("/");
//             dispatch(selectGenreOrCategory(category));
//           }
//         } else if (command === "changeMode") {
//           if (mode === "dark") {
//             setMode("dark");
//           } else {
//             setMode("light");
//           }
//         } else if (command === "login") {
//           fetchToken();
//         } else if (command === "logout") {
//           localStorage.clear();
//           history.push("/");
//         } else if (command === "search") {
//           dispatch(searchMovie(query));
//         }
//       }
//     });
//   }, []);

//   return <></>;
// };

// export default Alan;
