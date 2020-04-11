import React from 'react';
import './NaviBar.css';
import { Button } from '@material-ui/core';

import {
  Link
} from "react-router-dom";

function NaviBar() {

  return (
    <div className="NaviBar">
      <div className="NaviBar-navibar">

        <Button color="default"><Link to="/" className='text-link'>UMass ACM</Link></Button>

        <ul>
          <Button color="default"><Link to="/" className='text-link'>Home</Link></Button>
          <Button color="default"><Link to="/events" className='text-link'>Events</Link></Button>
          <Button color="default"><Link to="/sigs" className='text-link'>SIGs</Link></Button>
          <Button color="default"><Link to="/about" className='text-link'>About</Link></Button>
          <Button color="default"><Link to="/join" className='text-link'>Join</Link></Button>
        </ul>

      </div>

      <header className="NaviBar-header">

      </header>
    </div>
  );
}



export default NaviBar;
