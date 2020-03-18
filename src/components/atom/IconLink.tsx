import React from 'react';
import styled from 'styled-components';

import theme from '../../theme'
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import GitHub from '@material-ui/icons/GitHub';
import Arrow from '@material-ui/icons/ArrowDownward';

export type AttributeProps = {
    name: string
    url: string
    aria?: string
}

class IconLink extends React.Component<AttributeProps> {

    render(){
        return(
          <React.Fragment>
            {
              [this.props.name].map(name => {
                switch(name.toLowerCase()) {
                  case "live": return (
                    <Button size="small" color="primary" aria-label={this.props.aria}  href={this.props.url} target="_blank">
                      Live
                    </Button>
                  )
                  case "github": return (
                    <IconButton aria-label={this.props.aria} href={this.props.url} target="_blank">
                      <GitHub/>
                    </IconButton>
                  )
                  case "download": return (
                    <Button size="small" color="primary" aria-label={this.props.aria}  href={this.props.url} target="_blank">
                      Download
                    </Button>
                  )
                }
              })
            }
          </React.Fragment>
        )
    }
}

const StyledA = styled.a`
    z-index: 100;
    position: absolute;
    right: 10px;
    bottom: 10px;

    
    background-color: ${theme.palette.secondary.main};
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
export default IconLink