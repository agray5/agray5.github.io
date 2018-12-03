import React from 'react'
import Layout from '../components/layout'
import ImageHoverDiv from '../components/imageHoverDiv'

//Depends
import styled from 'styled-components';
import theme from '../theme'
import {media} from '../utils/mediaQueries'

const titles = ['Prompt Generator', 'Weather App', 'Calender', 'Processing Tic-Tac-Toe',
                'Random 2D Map', 'Mock Airplane Reservation Server'];
const links = [[['Live', 'http://agray5.com/PromptGenerator/'], ['Github', 'https://github.com/agray5/PromptGenerator']],
               [['Live', 'http://agray5.com/Calender/'], ['Github', 'https://github.com/agray5/Calender']],
               [['Live', 'http://agray5.com/Weather-Widget/'], ['Github', 'https://github.com/agray5/Weather-Widget']],
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
        <Container>
            {portfolioImgs.map(((img, index) => {
                return (<ImageHoverDiv 
                    {...images[index]}
                    theme={theme}
                    width="400px"
                    height= "250px"
                    key={index}/>)
            }))}
        </Container>
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

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    overflow-y: auto;
    height: 100%;
    margin: 10px;
    ${media.tablet`margin: 0 0 0 10%;`}

    & .hoverImage{
        margin: 5px;
    }
`;

export default Portfolio
