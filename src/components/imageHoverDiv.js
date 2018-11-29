import React, { Component, Children } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'
import Img from "gatsby-image"

import {Colors} from '../theme'

const ImageHoverDiv = (props) => (
    <ImageContainer>
        <StyledImg fluid={props.img} alt={`${props.title} portfolio image`}/>
            <div className="overlay">
                <div class="text">{props.title}</div>
            </div>
    </ImageContainer>
)

export default ImageHoverDiv

ImageHoverDiv.prototype = {
    img: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
}

const ImageContainer = styled.div`
    position: relative;

    & .overlay{
        position: absolute;
        display: none;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.5);
        overflow: hidden;
        width: 100%;
        height: 0;
        transition: .5s ease;

    }

    &:hover {
        height: 100%;
    }
`;

const StyledImg = styled(Img)`
    display: block;
    height: auto;
`
