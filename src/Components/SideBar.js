import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

class SideBar extends React.Component{
    render(){
        return(
        <StyledBar position="static" color="default">
            <Toolbar>
                <IconButton color="inherit" aria-label="Menu">
                    <MenuIcon />
                </IconButton>
            </Toolbar>
        </StyledBar>
        )
    }
}

export default SideBar

let StyledBar = withStyles({
    root: {
      boxShadow: 'none',
      background: 'none'
    }
  })(AppBar);
  
