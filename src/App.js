import React from 'react';
import './App.css';
import Home from './Home';
import Events from './Events';
import About from './About';
import Join from './Join';
import Sigs from './Sigs';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route path="/events">
              <Events />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/sigs">
              <Sigs />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/join">
              <Join />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>  
      </Router>
    </div>
  );
}


export default App;
