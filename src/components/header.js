import React, { Component } from 'react';
import { slide as Menu } from "react-burger-menu";
import { sizes } from "../utils/mediaQueries"

import '../styles/header.scss';

// import icons
import {twitter}  from 'react-icons-kit/fa/twitter';
import {envelope} from 'react-icons-kit/fa/envelope';
import {github} from 'react-icons-kit/fa/github';
import {linkedin} from 'react-icons-kit/fa/linkedin';
import Icon from 'react-icons-kit';

import styled from 'styled-components'
import theme from '../theme'
  

const icons = [linkedin, github, twitter, envelope]
const iconHref = ["https://www.linkedin.com/in/aprgray5/", "https://github.com/agray5", "https://twitter.com/aprgray5", "mailto:aprgray5@gmail.com"]

class Header extends Component{
    state = {
        isOpen: window.innerWidth>sizes.phone,
    };
    
    handleStateChange (state) {
        this.setState({isOpen: state.isOpen})  
      }

    render(){
        return(
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
          </Menu>
        )
    }
}

const Social = styled.ul`
    list-style: none;
    bottom: 20px;
    padding: 0;
    text-align: center;

    & li {
        margin-top: 10px;
        cursor: pointer;

        & a {
            color: ${props=> props.theme.colors.primary};
        }

        &:hover {
            color: ${props=> props.theme.colors.accent};
        }
    }
`


export default Header
