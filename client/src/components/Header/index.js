import React from 'react';
import useStyles from './styles';
import {Typography } from '@material-ui/core';
const Header = () => {
    const classes = useStyles();
  return <Typography variant="h4" align="center" className={classes.container}>Blog</Typography>
}

export default Header;