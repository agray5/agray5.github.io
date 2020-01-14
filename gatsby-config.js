module.exports = {
  siteMetadata: {
    title: 'April Gray | Portfolio | Web & Software Developer',
  },
  plugins: [
    'gatsby-plugin-top-layout',
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-transition-link`,
    {resolve: 'gatsby-plugin-react-svg'},
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'April Gray | Portfolio | Web & Software Developer',
        short_name: 'April Gray Portfolio',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/logo.png', // This path is relative to the root of the site.
      },
    },
    /*{
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: '/src/images/' // See below to configure properly
        }
      }
    }*/
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
