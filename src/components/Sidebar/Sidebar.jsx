import React from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  ListItemIcon,
  Box,
  CircularProgress 
} from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { useGetGenresQuery } from "../../services/TMDB";
import useStyles from "./styles";

const categories = [
  { label: "Popular", value: "popular" },
  { label: "Top Rated", value: "top_rated" },
  { label: "Upcoming", value: "upcoming" }
];

const demoCategories = [
  { label: "Comedy", value: "comedy" }, 
  { label: "Horror", value: "horror" }, 
  { label: "Action", value: "action" },
  { label: "Animation", value: "animation" }
];
const lightLogo =
  "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg";

const Sidebar = ({ setMobileOpen }) => {
  const theme = useTheme();
  const classes = useStyles();
  const { data, isFetching } = useGetGenresQuery();
  // /* For Debugging */ console.log(data)

  return (
    <>
      <Link to="/" className={classes.imageLink}>
        <img
          className={classes.image}
          src={theme.palette.mode === "light" ? lightLogo : lightLogo}
          alt="Filmpire Logo"
        />
      </Link>
      <Divider />
      <List>
        <ListSubheader>Categories</ListSubheader>
        {categories.map(({ label, value }) => (
          <Link key={value} className={classes.links} to="/">
            <ListItem onClick={() => {}} button>
              <ListItemIcon>
                {/* <img
                  src={lightLogo} 
                  className={classes.genreImages}
                  height={30}
                  alt={label} 
                /> */}
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        <ListSubheader>Genres</ListSubheader>
        {isFetching ? (
          <Box display="flex" justifyContent="center">
        <CircularProgress />
      </Box>
          ) : data.genres.map(({ name, id }) => (
          <Link title={name} key={id} className={classes.links} to="/">
            <ListItem onClick={() => {}} button>
              <ListItemIcon>
                {/* <img
                  src={lightLogo} 
                  className={classes.genreImages}
                  height={30}
                  alt={label} 
                /> */}
              </ListItemIcon>
              <ListItemText primary={name} />
            </ListItem>
          </Link>
        ))}
      </List>
    </>
  );
};

export default Sidebar;
