import React from 'react'
import Layout from '../components/layout'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import ImageHoverDiv from '../components/imageHoverDiv'
import IconLink from '../components/atom/IconLink'

import Title from '../components/atom/title'

//Depends
import styled from 'styled-components';
import theme from '../theme'
import {media} from '../utils/mediaQueries'
import PortfolioItems from '../config/portfolio'

const genImageData = (images) => {
    let imageData = [];
    for(let i = 0; i < images.length; i++){
        imageData.push({
            img: images[i].node.childImageSharp.fluid,
            ...PortfolioItems[i]
        })
    }
    return imageData
}

const useStyles = makeStyles({
  card: {
    width: 345,
    height: 330,
    textAlign: 'center',
    backgroundColor: theme.palette.text.secondary,
  },
  media: {
    height: 140,
  },
  chips: {
    height: 30
  },
  chip: {
    color: theme.palette.accent.main
  },
  title: {
    height: 60
  }
});


const Portfolio = (props) => {
    const { edges: portfolioImgs } = props.data.portfolio;
    const images = genImageData(portfolioImgs);
    const classes = useStyles();
  return(
    <Layout>
        <Root theme={theme}>
        <Title title="Portfolio" theme={{...theme}}/>
        {console.log("IMAGES", images.map(img => ({...img, src: img.img.src})))}
        
        <Grid container spacing={3}>
          {images.map((image, index) => (
            <Grid item key={index}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={image.img.src}
                  title={image.title}
                />
                <CardContent>
                  <Typography className={classes.title} gutterBottom variant="h5" component="h2">
                    {image.title}
                  </Typography>
                  <div className={classes.chips}>
                  {
                    image.tags.map(tag => 
                      <Chip size="small" color="primary" className={classes.chip} label={tag} />)
                  }
                  </div>
                </CardContent>
                <CardActions disableSpacing>
                  {
                    image.links.map((link, index) => 
                      <IconLink key={index} url={link[1]} name={link[0]}/>)
                  }
                </CardActions>
              </CardActionArea>
            </Card>
            </Grid>
          ))

          }
        </Grid>
        {/*<Container theme={theme}>
            {portfolioImgs.map(((img, index) => {
                return (<ImageHoverDiv 
                    {...images[index]}
                    theme={theme}
                    width="400px"
                    height= "200px"
                    key={index}/>)
            }))}
          </Container>*/}
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
    height: 100%;
    background: ${props => props.theme.palette.primary.main};
    width: 100%;
    overflow-y: auto;
    padding-left: 100px;

    & .titleContainer {
        margin-top: 15px;
    }
`;

export default Portfolio
