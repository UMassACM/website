import React from 'react';
import '../App.css';
import { Button, Menu, MenuItem } from '@material-ui/core';

import {
  Link
} from "react-router-dom";

function NaviBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="NaviBar">
      <div className="NaviBar-navibar">

        <Button color="default"><Link to="/" className='text-link'>UMass ACM</Link></Button>

        <ul className="menu">
          <Button color="default"><Link to="/" className='text-link'>Home</Link></Button>
          <Button color="default" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            SIG's
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem component={Link} to="/sigs/machinelearning">Machine Learning</MenuItem>
            <MenuItem component={Link} to="/sigs/blockchain">Block Chain</MenuItem>
            <MenuItem component={Link} to="/sigs/gamedevelopment">Game Development</MenuItem>
            <MenuItem component={Link} to="/sigs/webdevelopment">Web Development</MenuItem>
            <MenuItem component={Link} to="/sigs/design">Design</MenuItem>
            <MenuItem component={Link} to="/sigs/icpc">ICPC</MenuItem>
          </Menu>
          <Button color="default"><Link to="/about" className='text-link'>About</Link></Button>
          <Button color="default"><Link to="/events" className='text-link'>Events</Link></Button>
          <Button color="default"><Link to="/join" className='text-link'>Join</Link></Button>
        </ul>

      </div>

      <header className="NaviBar-header">

      </header>
    </div>
  );
}

export default NaviBar;
