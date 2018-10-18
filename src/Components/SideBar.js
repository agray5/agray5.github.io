import React, { Component } from 'react';
import { slide as Menu } from "react-burger-menu";

import './SideBar.css';

import styled from 'styled-components';

class SideBar extends Component{
    state = {
        isOpen: true,
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
            <a id="contact" className="menu-item" href="/contact">Contact</a>
            <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
          </Menu>
        )
    }
}

export default SideBar


