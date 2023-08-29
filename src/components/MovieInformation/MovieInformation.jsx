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
import { BottomNavigation } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import useStyles from "./styles";
import { MovieList, Pagination } from "../index";
import {
  useGetMovieQuery,
  useGetRecommendationsQuery,
  useGetListQuery,
  useGetMoviesByActorIdQuery
} from "../../services/TMDB";
import { selectGenreOrCategory } from "../../features/currentGenreOrCategory";
import genreIcons from "../../assets/genres";
// ------------------------------------------------------------------------------------------
function MovieInfo() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const { user } = useSelector((state) => state.user);
  const { id } = useParams();
  const classes = useStyles();
  const { data: movies } = useGetMoviesByActorIdQuery({ id, page });

  const { data, isFetching, error } = useGetMovieQuery(id);
  const [open, setOpen] = useState(false);
  const [isMovieFavorited, setIsMovieFavorited] = useState(false);
  const [isMovieWatchlisted, setIsMovieWatchlisted] = useState(false);
  const { data: recommendations } = useGetRecommendationsQuery({
    list: "/recommendations",
    movie_id: id
  });
  // console.log(recommendations);
  const tmdbApiKey = import.meta.env.VITE_TMDB_KEY;

  // watchlist and favorite starts
  const { data: favoriteMovies } = useGetListQuery({
    listName: "favorite/movies",
    accountId: user.id,
    sessionId: localStorage.getItem("session_id"),
    page: 1
  });
  const { data: watchlistMovies } = useGetListQuery({
    listName: "watchlist/movies",
    accountId: user.id,
    sessionId: localStorage.getItem("session_id"),
    page: 1
  });

  useEffect(() => {
    setIsMovieFavorited(
      !!favoriteMovies?.results?.find((movie) => movie?.id === data?.id)
    );
  }, [favoriteMovies, data]);
  useEffect(() => {
    setIsMovieWatchlisted(
      !!watchlistMovies?.results?.find((movie) => movie?.id === data?.id)
    );
  }, [watchlistMovies, data]);

  const addToWatchList = async () => {
    await axios.post(
      `https://api.themoviedb.org/3/account/${
        user.id
      }/watchlist?api_key=${tmdbApiKey}&session_id=${localStorage.getItem(
        "session_id"
      )}`,
      {
        media_type: "movie",
        media_id: id,
        watchlist: !isMovieWatchlisted
      }
    );

    setIsMovieWatchlisted((prev) => !prev);
  };

  const addToFavorites = async () => {
    await axios.post(
      `https://api.themoviedb.org/3/account/${
        user.id
      }/favorite?api_key=${tmdbApiKey}&session_id=${localStorage.getItem(
        "session_id"
      )}`,
      {
        media_type: "movie",
        media_id: id,
        favorite: !isMovieFavorited
      }
    );
    setIsMovieFavorited((prev) => !prev);
  };
  // watchlist and favorite ends

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
        <Grid
          className={classes.makeImageCenter}
          item
          sm={12}
          lg={4}
          style={{
            display: "block",
            marginBottom: "30px",
            textAlign: "center"
          }}
        >
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
                title={data?.vote_average}
                value={data.vote_average / 2}
              />

              <Typography
                variant="subtitle1"
                gutterBottom
                style={{ marginLeft: "10px" }}
                title={data?.vote_average}
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
            {data?.genres?.map((genre) => (
              <Link
                className={classes.links}
                key={genre.name}
                to="/"
                onClick={() => dispatch(selectGenreOrCategory(genre.id))}
              >
                <img
                  src={genreIcons[genre.name.toLowerCase()]}
                  className={classes.genreImage}
                  height={30}
                />

                <Typography color="textPrimary" variant="subtitle1">
                  {genre?.name}
                </Typography>
              </Link>
            ))}
          </Grid>
          <Typography variant="h5" gutterBottom style={{ marginTop: "20px" }}>
            Overview
          </Typography>
          <Typography style={{ marginTop: "0rem" }}>
            {data?.overview}
          </Typography>
          <Typography gutterBottom variant="h5" style={{ marginTop: "1rem" }}>
            Top Cast
          </Typography>
          <Grid item container spacing={2}>
            {data &&
              data?.credits?.cast
                ?.map(
                  (character, i) =>
                    character.profile_path && (
                      <Grid
                        key={i}
                        item
                        xs={4}
                        md={2}
                        component={Link}
                        to={`/actors/${character.id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <img
                          className={classes.castImage}
                          src={`https://image.tmdb.org/t/p/w500/${character.profile_path}`}
                          alt={character.name}
                          title={character.name}
                        />
                        <Typography
                          color="textPrimary"
                          align="center"
                          title={character?.name}
                        >
                          {character?.name}
                        </Typography>
                        <Typography
                          title={character.character}
                          color="textSecondary"
                          align="center"
                        >
                          {character.character.split("/")[0]}
                        </Typography>
                      </Grid>
                    )
                )
                .slice(0, 12)}
          </Grid>
          <Grid item container style={{ marginTop: "2rem" }}>
            <div className={classes.buttonContainer}>
              <Grid item xs={12} sm={6} className={classes.buttonContainer}>
                <ButtonGroup size="small" variant="outlined">
                  <Button
                    target="_blank"
                    rel="noopener noreferrer"
                    href={data?.homepage}
                    endIcon={<Language />}
                  >
                    Website
                  </Button>
                  <Button
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://www.imdb.com/title/${data?.imdb_id}`}
                    endIcon={<MovieIcon />}
                  >
                    IMDB
                  </Button>
                  <Button
                    onClick={() => setOpen(true)}
                    target="_blank"
                    // href={`https://www.imdb.com/title/${data?.imdb_id}/videogallery`}
                    endIcon={<Theaters />}
                  >
                    Trailer
                  </Button>
                </ButtonGroup>
              </Grid>
              <Grid item xs={12} sm={6} className={classes.buttonContainer}>
                <ButtonGroup size="small" variant="outlined">
                  <Button
                    onClick={addToFavorites}
                    endIcon={
                      isMovieFavorited ? (
                        <FavoriteBorderOutlined />
                      ) : (
                        <Favorite />
                      )
                    }
                  >
                    {isMovieFavorited ? "Unfavorite" : "Favorite"}
                  </Button>
                  <Button
                    onClick={addToWatchList}
                    endIcon={isMovieWatchlisted ? <Remove /> : <PlusOne />}
                  >
                    Watchlist
                  </Button>
                  <Button
                    endIcon={<ArrowBack />}
                    sx={{ borderColor: "primary.main" }}
                  >
                    <Typography
                      variant="subtitle2"
                      component={Link}
                      to="/"
                      color="inherit"
                      sx={{ textDecoration: "none" }}
                    >
                      Back
                    </Typography>
                  </Button>
                </ButtonGroup>
              </Grid>
            </div>
          </Grid>
        </Grid>
        <Box marginTop="5rem" width="100%">
          <Typography variant="h3" gutterBottom align="center">
            You might also like
          </Typography>
          {recommendations ? (
            <MovieList movies={recommendations} numberOfMovies={12} />
          ) : (
            <Box>Sorry, nothing was found.</Box>
          )}
        </Box>
        <Modal
          closeAfterTransition
          className={classes.modal}
          open={open}
          onClose={() => setOpen(false)}
        >
          {data?.videos?.results?.length > 0 && (
            <iframe
              autoPlay
              className={classes.video}
              frameBorder="0"
              title="Trailer"
              src={`https://www.youtube.com/embed/${data.videos.results[0].key}`}
              allow="autoplay"
            />
          )}
        </Modal>

        <Pagination
          currentPage={page}
          setPage={setPage}
          totalPages={movies?.total_pages}
        />

        <Box marginTop="5rem" width="100%">
          <h4
            style={{
              textAlign: "center",
              color: "#ccc",
              marginBottom: "-1.5rem"
            }}
          >
            This app is created by @sameerkali
          </h4>
        </Box>
      </Grid>
    </>
  );
}
export default MovieInfo;
