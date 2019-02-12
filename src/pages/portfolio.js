import React from 'react'
import Layout from '../components/layout'
import ImageHoverDiv from '../components/imageHoverDiv'

import Title from '../components/title'

//Depends
import styled from 'styled-components';
import theme from '../theme'
import {media} from '../utils/mediaQueries'

const titles = ['Prompt Generator', 'Weather App', 'Calender', 'Processing Tic-Tac-Toe',
                'Random 2D Map', 'Mock Airplane Reservation Server'];
const links = [[['Live', 'https://agray5.github.io/PromptGenerator/'], ['Github', 'https://github.com/agray5/PromptGenerator']],
               [['Live', 'https://agray5.github.io/Weather-Widget/'], ['Github', 'https://github.com/agray5/Weather-Widget']],
               [['Live', 'https://agray5.github.io/Calender/'], ['Github', 'https://github.com/agray5/Calender']],
               [['Github', 'https://github.com/agray5/ProcessingTicTacToe']],
               [['Github', 'https://github.com/agray5/Random-Tilemap-In-Godot']],
               [['Download', 'https://agray5.github.io/downloads/Multiprocessing%20Server.zip']]
              ]
const genImageData = (images) => {
    let imageData = [];
    for(let i = 0; i < images.length; i++){
        imageData.push({
            img: images[i].node.childImageSharp.fluid,
            title: titles[i],
            links: links[i]
        })
    }
    return imageData
}


const Portfolio = (props) => {
    const { edges: portfolioImgs } = props.data.portfolio;
    const images = genImageData(portfolioImgs);
  return(
    <Layout>
        <Root theme={theme}>
        <Title title="Portfolio" theme={{...theme, colors:{...theme.colors, primary: theme.colors.accent}}}/>
        <Container theme={theme}>
            {portfolioImgs.map(((img, index) => {
                return (<ImageHoverDiv 
                    {...images[index]}
                    theme={theme}
                    width="400px"
                    height= "200px"
                    key={index}/>)
            }))}
        </Container>
        </Root>
    </Layout>
  )
}

export const query = graphql` {
    portfolio: allFile(
        sort: { order: ASC, fields: [absolutePath] }
        filter: { relativePath: { regex: "/projects/.*(.png|.jpg)/" } }
      ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid_noBase64
              }
          }
        }
      }
    }
  }
`
const Root = styled.div`
    position: absolute;
    top: 0;
    height: 100%;
    background: ${props => props.theme.colors.primary};
    width: 100%;

    & .titleContainer {
        margin-top: 0;
    }
`;

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    align-content: flex-start;
    overflow-y: auto;
    height: 100%;
    margin: 20px 0;
    ${media.tablet`margin: 70px 0 0 10%;`}

    & .hoverImage{
        margin: 5px 0;
        ${media.tablet`margin: 5px;`}
    }
`;

export default Portfolio
