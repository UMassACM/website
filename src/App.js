import React from 'react';

import './App.css';

import Home from './App/Home';
import About from './App/About';
import Join from './App/Join';
import Sigs from './App/Sigs';
import ICPC from './App/sigs/ICPC';
import ML from './App/sigs/ML';
import Blockchain from './App/sigs/Blockchain';
import Gamedev from './App/sigs/Gamedev';
import Design from './App/sigs/Design';

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
            <Route path={`/sigs/icpc`}>
              <ICPC />
            </Route>
            <Route path="/sigs/machinelearning">
              <ML />
            </Route>
            <Route path="/sigs/blockchain">
              <Blockchain />
            </Route>
            <Route path="/sigs/gamedevelopment">
              <Gamedev />
            </Route>
            <Route path="/sigs/design">
              <Design />
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
