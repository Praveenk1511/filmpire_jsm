import React from 'react';
import { CssBaseline } from '@mui/material';
import {Route , Switch} from 'react-router-dom';

import { Actor, MovieInformation, Movies, NavBar, Profile} from './';

const App = () => {
  return (
    <div>
    <CssBaseline /> 
    <NavBar />
    <main>
      <Switch>
         <Route exact path="/"><Movies></Movies></Route>
         {/* <Route exact path="/movies"></Route> */}
         <Route exact path="/movies/:id"><MovieInformation /></Route>
         <Route exact path="/profile/:id"><Profile /></Route>
         <Route exact path="/actor/:id"><Actor /></Route>
      </Switch>
    </main>
    </div>
  )
}

export default App;
