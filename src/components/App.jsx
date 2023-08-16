import React from 'react'
import { CssBaseline } from '@mui/material'
// import {Route, Switch} from 'react-router-dom'

const App = () => {
  return (
    <>
    <CssBaseline>
        <main>
          <Router>
            <Switch path="/">
              <h1>Home</h1>
            </Switch>
          </Router>
        </main>
      </CssBaseline>

    </>
  )
}

export default App