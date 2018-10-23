import React, { Component } from 'react'

//Depends
import styled from 'styled-components';

//Components
import Title from './Title'

//Assets 
import {Colors} from '../theme'

class About extends Component{
    render(){
        return(
            <Root id="container">
                 <Title title="April Gray" subtitles={["Mobile/Web/Software", "Developer"]}/>
            </Root>
        );
    }
}

const Root = styled.div`
    width: 100%;
    height: 100%;
    background: ${Colors.primary}
`

export default About