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

      <Link to="/" className='text-link'><Button color="default">UMass ACM</Button></Link>

        <ul className="menu">
        <Link to="/" className='text-link'><Button color="default">Home</Button></Link>
          <Button color="default" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            SIGs
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
            <MenuItem component={Link} to="/sigs/design">Design</MenuItem>
            <MenuItem component={Link} to="/sigs/icpc">ICPC</MenuItem>
          </Menu>
          <Link to="/about" className='text-link'><Button color="default">About</Button></Link>
          <Link to="/events" className='text-link'><Button color="default">Events</Button></Link>
          <Link to="/join" className='text-link'><Button color="default">Join</Button></Link>
        </ul>

      </div>

      <header className="NaviBar-header">

      </header>
    </div>
  );
}

export default NaviBar;
