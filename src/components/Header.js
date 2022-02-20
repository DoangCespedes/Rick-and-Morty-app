import { AppBar, Button, Toolbar, Typography } from '@material-ui/core'
import React from 'react';
import { makeStyles } from "@material-ui/core";
import { Link } from 'react-router-dom';

const useStyle = makeStyles((theme) => ({
    offset: {
      ...theme.mixins.toolbar, // min-height: 56px;
      marginBottom: "1rem", // margen opcional
    },

    title:{
        flexGrow: 1
    }
    
  }));



export const Header = () => {
    const classes = useStyle();
  return (
    <div>
        <AppBar position="fixed" color="primary">
            <Toolbar>
                <Typography className={classes.title} variant="h6">Rick-and-Morty-app</Typography>
                <Link to='/'><Button mx={2} color="inherit" variant="outlined" size="small">Inicio</Button></Link>
                <Link to='/Its'><Button mx={2} color="inherit" variant="outlined" size="small">Que es?</Button></Link>
            </Toolbar>
      </AppBar>
      <div className={classes.offset}></div>
    </div>
  )
}
