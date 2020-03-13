import React, { Component } from 'react';
import Img from "gatsby-image"
import PropTypes from 'prop-types';

//Depends
import styled from 'styled-components';
import Attribute from './atom/attribute'

//Assets 
import theme, {Colors} from '../theme'
import {media, Query_Computer} from '../utils/mediaQueries'


class SideImageGrad extends React.Component{

    render(){
        return(
            <Query_Computer>
                <StyledImg fluid={this.props.img}/>
                <Attribute href={this.props.href} author={this.props.author}/>
            </Query_Computer>
        )
    }
}

export default SideImageGrad

const StyledImg = styled(Img)`
    display: none;
    position: absolute !important;
    right: 0px;
    top: 0px;
    z-index: 1;
    mask-image: linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0) 85%);

    width: 50%;
    height: 100%;
    ${media.desktop`display: block;`}
`;


SideImageGrad.propTypes = {
    img: PropTypes.object.isRequired,
    href: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
  };
