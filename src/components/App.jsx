// import React from "react";
import { CssBaseline } from "@mui/material";
import { Route, Switch } from "react-router-dom";
import { Actors, MovieInformation, Movies, NavBar, Profile } from "./index";

const App = () => {
  return (
    <>
      <CssBaseline>
        <NavBar />
        <mian>
          <Switch>
            <Route exact path="/">
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
        </mian>
      </CssBaseline>
    </>
  );
};

export default App;
