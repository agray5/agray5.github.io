import React from 'react'
import Layout from '../components/layout'
import ImageHoverDiv from '../components/imageHoverDiv'

//Depends
import styled from 'styled-components';

const Portfolio = (props) => {
    const { edges: portfolioImgs } = props.data.portfolio;
  return(
    <Layout>
        <ImageHoverDiv title="Prompt Generator" img={portfolioImgs[0].node.childImageSharp.fluid}/>
    </Layout>
  )
}



export const query = graphql` {
    portfolio: allFile(filter: { absolutePath: { regex: "/projects/" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 820) {
                ...GatsbyImageSharpFluid_noBase64
              }
          }
        }
      }
    }
  }
`

export default Portfolio
