import React, { Component, Children } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'
import Img from "gatsby-image"

import { darken, rgba, saturate} from 'polished'
import { media } from '../utils/mediaQueries'

import {Colors} from '../theme'

class ImageHoverDiv extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            isOpen: false
        }

        this.prototype = {
            theme: PropTypes.object.isRequired,
            img: PropTypes.object.isRequired,
            title: PropTypes.string.isRequired,
            desc: PropTypes.string.isRequired,
            width: PropTypes.number,
            height: PropTypes.number,
            links: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
        }

        this.toggleDiv = this.toggleDiv.bind(this);
    }

    toggleDiv(event){
        this.setState({isOpen: !this.state.isOpen});
        this.refs.overlay.style.height = this.state.isOpen?"0":"100%";
    }

    render() {
        return(
            <ImageContainer theme={this.props.theme} width={this.props.width} maxHeight={this.props.height} className="hoverImage" onClick={this.toggleDiv}>
                <StyledImg fluid={this.props.img} alt={`${this.props.title} portfolio image`}/>
                    <div className="overlay" ref="overlay">
                        <div className="text">{this.props.title}</div>
                            {this.props.links? 
                                <ul className="imageHoverUL">
                                    {this.props.links.map((link, index) => {
                                        return <a href={link[1]} target="_blank" className="imageHoverLink">
                                                    <li key={index}>
                                                        {link[0]}
                                                    </li>
                                                </a>
                                    })}
                                </ul>:''}
                    </div>
    </ImageContainer>
        )
    }
}

export default ImageHoverDiv



const ImageContainer = styled.div`
    position: relative;
    ${props => props.width?`width:${props.width}`:''};
    ${props => props.maxHeight?`max-height:${props.maxHeight}`:''};
    color: ${props => props.theme.colors.primary};
    text-align: center;

    & .imageHoverUL {
        padding: 0;
        display:flex;
        align-items: center;
        justify-content: center;
        ${media.tablet`flex-direction: column;`}
    }
    & .imageHoverLink {
        text-decoration: none;
        list-style-type: none;
        border-style: solid;
        background-color: ${props => props.theme.colors.menu};
        border-color: ${props => darken(0.5, props.theme.colors.menu)};
        border-width: 0px 0px 3px;
        box-shadow: 0 -1px 0 rgba(255, 255, 255, 0.1) inset; 
        border-radius: 6px;
        cursor: pointer;
        transition: all 200ms ease-in-out 0s;
        font-weight: 700;	
        padding: 8px;
        margin-top: 10px;
        margin-right: 10px;
        font-size: 18px;
        color: white;
        width: 22%;
        display: list-item;

        &:hover, &:focus, &:active {
            background: ${props => darken(0.1, props.theme.colors.menu)};
            border-color: ${props => saturate(0.5, props.theme.colors.menu)};
        }

        & a{
            color: ${props => props.theme.colors.primary};
            text-decoration: none;
        }

    }

    & .text {
        margin-top: 10px;
    }

    & .overlay{
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: ${props => rgba(props.theme.colors.menu, 0.5)};
        overflow: hidden;
        width: 100%;
        height: 0;
        transition: .5s ease;
    }

    &:hover .overlay{
        height: 100% !important;
    }
`;

const StyledImg = styled(Img)`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
`
