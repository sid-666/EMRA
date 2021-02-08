import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


export default function SimpleMenu() {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Open Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >

        <a href= "/dashboard"><MenuItem onClick={handleClose}>DashBoard</MenuItem></a>
        <a href= "/transaction"><MenuItem onClick={handleClose}>Transaction</MenuItem></a>
        <a href= "/logout"><MenuItem onClick={handleClose}>Logout</MenuItem></a>
        <a href= "/login"><MenuItem onClick={handleClose}>Login</MenuItem></a>
        <a href= "/register"><MenuItem onClick={handleClose}>Register</MenuItem></a>
      </Menu>
    </div>
  );
}