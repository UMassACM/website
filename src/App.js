import React from 'react';

import './App.css';

import Home from './App/Home';
import About from './App/About';
import Join from './App/Join';
import ICPC from './App/sigs/ICPC';
import ML from './App/sigs/ML';
import Blockchain from './App/sigs/Blockchain';
import Gamedev from './App/sigs/Gamedev';
import Design from './App/sigs/Design';
import Events from './App/Events'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Router forceRefresh={true}>
        <div>
          <Switch>
            <Route path={process.env.PUBLIC_URL + `/icpc`} component={ICPC}></Route>
            <Route path={process.env.PUBLIC_URL + "/machinelearning"} component={ML}></Route>
            <Route path={process.env.PUBLIC_URL + "/blockchain"} component={Blockchain}></Route>
            <Route path={process.env.PUBLIC_URL + "/gamedevelopment"} component={Gamedev}></Route>
            <Route path={process.env.PUBLIC_URL + "/design"} component={Design}></Route>
            <Route path={process.env.PUBLIC_URL + "/about"} component={About}></Route>
            <Route path={process.env.PUBLIC_URL + "/events"} component={Events}>
            </Route>
            <Route path={process.env.PUBLIC_URL + "/join"} component={Join}>
            </Route>
            <Route path={process.env.PUBLIC_URL + "/"} component={Home}>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
export default App;
