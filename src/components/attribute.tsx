import React from 'react';
import styled from 'styled-components';

import theme from '../theme'

export type AttributeProps = {
    href: string
    author: string
}

class Attribute extends React.Component<AttributeProps> {

    render(){
        return(
            <StyledA href={this.props.href} target="_blank" rel="noopener noreferrer">
                <span> Art by {this.props.author}</span>
            </StyledA>
        )
    }
}

const StyledA = styled.a`
    z-index: 100;
    position: absolute;
    right: 10px;
    bottom: 10px;

    
    background-color: ${theme.palette.background.default};
    color: ${theme.palette.primary.main};
    text-decoration:none;
    padding:4px 6px;
    font-family:-apple-system, BlinkMacSystemFont, 'San Francisco', 
                'Helvetica Neue', Helvetica, Ubuntu, Roboto, Noto, 
                'Segoe UI', Arial, sans-serif;
    font-size:12px;
    font-weight:bold;
    line-height:1.2;
    display:inline-block;
    border-radius:3px

    & span {
        display:inline-block;
        padding:2px 3px;

    }
`;
export default Attribute