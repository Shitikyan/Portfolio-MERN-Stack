import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import { Link } from 'react-router-dom';

import mernLogo from '../../images/mernLogo.png';
import useStyles from './styles';

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <Link to="/" className={classes.brandContainer}>
        <img component={Link} to="/" src={mernLogo} alt="icon" height="45px" />
      </Link>
      <Toolbar className={classes.toolbar}>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
