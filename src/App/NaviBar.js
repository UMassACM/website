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

      <Button component={Link} to="/" color="default">UMass ACM</Button>

        <ul className="menu">
        <Button component={Link} to="/" color="default">Home</Button>
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
            <MenuItem component={Link} to="/machinelearning">Machine Learning</MenuItem>
            <MenuItem component={Link} to="/blockchain">Blockchain</MenuItem>
            <MenuItem component={Link} to="/gamedevelopment">Game Development</MenuItem>
            <MenuItem component={Link} to="/design">Design</MenuItem>
            <MenuItem component={Link} to="/icpc">ICPC</MenuItem>
          </Menu>
          <Button component={Link} to="/about" color="default">About</Button>
          <Button component={Link} to="/events" color="default">Events</Button>
          <Button component={Link} to="/join" color="default">Join</Button>
        </ul>

      </div>

      <header className="NaviBar-header">

      </header>
    </div>
  );
}

export default NaviBar;
