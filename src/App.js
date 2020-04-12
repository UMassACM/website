import React from 'react';
import './App.css';
import Home from './Home';
import Events from './Events';
import About from './About';
import Join from './Join';
import Sigs from './Sigs';
import ICPC from './sigs/ICPC';
import ML from './sigs/ML';
import Blockchain from './sigs/Blockchain';
import Gamedev from './sigs/Gamedev';
import Design from './sigs/Design';

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
            <Route path="/icpc">
              <ICPC />
            </Route>
            <Route path="/machinelearning">
              <ML />
            </Route>
            <Route path="/blockchain">
              <Blockchain />
            </Route>
            <Route path="/gamedevelopment">
              <Gamedev />
            </Route>
            <Route path="/design">
              <Design />
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
