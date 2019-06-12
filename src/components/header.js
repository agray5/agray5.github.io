import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import { isMobile, MobileView} from "react-device-detect";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Divider from '@material-ui/core/Divider';

import '../styles/header.scss';

// import icons
import MenuIcon from '@material-ui/icons/Menu';
import Icon from 'react-icons-kit';
import {twitter}  from 'react-icons-kit/fa/twitter';
import {envelope} from 'react-icons-kit/fa/envelope';
import {github} from 'react-icons-kit/fa/github';
import {linkedin} from 'react-icons-kit/fa/linkedin';

import styled from 'styled-components';
import Drawer from '../styles/drawer';

const links = [""]
const icons = [linkedin, github, twitter, envelope]
const iconHref = ["https://www.linkedin.com/in/aprgray5/", "https://github.com/agray5", "https://twitter.com/aprgray5", "mailto:aprgray5@gmail.com"]

  

const modes = {
    closed: 'closed',
    open: 'open',
    mini: 'mini'
}

class Header extends Component{
    state = {
        mode: null
    };

    componentDidMount () {
        this.setState({mode: isMobile?modes.closed:modes.mini})
    }

    onMouseEnter () {
        this.setState({mode: modes.open})
    }

    onMouseLeave () {
        this.setState({mode: isMobile?modes.closed:modes.mini})
    }
    
    handleModeChange (mode) {
        this.setState({mode})  
    }

    handleClose () {
        if(!isMobile)
            this.handleModeChange(modes.mini)
        else
            this.handleModeChange(modes.closed)
    }

    render(){
        return(
            <>
                <MobileView>
                    <StyledAppBar position="fixed" >
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            edge="start"
                            onClick={this.handleModeChange.bind(this, modes.open)}
                        >
                            <MenuIcon />
                        </IconButton>
                    </StyledAppBar>
                </MobileView>
                <nav 
                    aria-label="Navigation" 
                    onMouseEnter={this.onMouseEnter.bind(this)}
                    onMouseLeave={this.onMouseLeave.bind(this)}
                >
                <Drawer 
                    onClose={this.handleClose.bind(this)} 
                    open={this.state.mode !== modes.closed}
                    className={this.state.mode}
                    variant="permanent"
                    withClickAway={this.state.mode === modes.open}
                >
                    <List>
                        <Divider />
                        {icons.map((icon, index) => (
                            <ListItem button key={index}>
                                <ListItemIcon><Icon icon={icon} size={24}/></ListItemIcon>
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
                </nav>
            </>
        )
    }
}

/* 
            <Menu 
                className="sideBar"
                {...this.props} 
                onStateChange={(state) => this.handleStateChange(state)} 
                isOpen={this.state.isOpen}
                noOverlay
                width={ 100 }
            >
            <a id="home" className="menu-item" href="/">Home</a>
            <a id="about" className="menu-item" href="/about">About</a>
            <a id="portfolio" className="menu-item" href="/portfolio">Works</a>
            <a id="contact" className="menu-item" href="/contact">Contact</a>

            <Social theme={theme}>
                { icons.map((icon, index) => {
                    return <li key={index}><a href={iconHref[index]} target="_blank"><Icon icon={icon} size={24}/></a></li>
                })}
            </Social>
          </Menu>*/


const StyledAppBar = styled(AppBar)`
&& {
    background-color: rgba(0, 0, 0, 0);
    width: unset;
    right: unset;
    box-shadow: unset;
    left: 1rem;
}
`
const Social = styled.ul`
    list-style: none;
    bottom: 20px;
    padding: 0;
    text-align: center;

    & li {
        margin-top: 10px;
        cursor: pointer;

        & a {
            /*color: ${props=> props.theme.colors.primary};*/
        }

        &:hover {
            /*color: ${props=> props.theme.colors.accent};*/
        }
    }
`


export default Header
