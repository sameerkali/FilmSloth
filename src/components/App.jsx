import { CssBaseline } from "@mui/material";
import { useRef } from "react";
import { Route, Switch } from "react-router-dom";
import { Actors, MovieInformation, Movies, NavBar, Profile } from "./index";
import useStyles from "./styles";
import useAlan from "../Alan";

const App = () => {
  const classes = useStyles();
  const alanBtnContainer = useRef();
  useAlan();
  return (
    <>
      <div className={classes.root}>
        <CssBaseline>
          <NavBar />
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Switch>
              <Route exact path={["/", "/approved"]}>
                <Movies />
              </Route>

              <Route exact path="/movie/:id">
                <MovieInformation />
              </Route>

              <Route exact path="/actors/:id">
                <Actors />
              </Route>

              <Route exact path="/profile/:id">
                <Profile />
              </Route>
            </Switch>
          </main>
          <div href={alanBtnContainer} />
        </CssBaseline>
      </div>
    </>
  );
};

export default App;
