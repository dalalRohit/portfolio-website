require('dotenv').config({
  path:`.env`
});

module.exports = {
  proxy:{
      prefix:'/api',
      url:'http://localhost:3000'
  },
  siteMetadata: {
    title: `Rohit Dalal | MERN Stack Developer`,
    description: `FullStack JavaScript developer`,
    author: `Rohit Dalal`,
    intro:`Programmer | Developer | Thinker`,
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve:'gatsby-source-contentful',
      options:{
        spaceId:process.env.CONTENTFUL_SPACE_ID,
        accessToken:process.env.CONTENTFUL_ACCESS_TOEKN
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve:'gatsby-source-filesystem',
      options:{
        name:'src',
        path:`${__dirname}/src/`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [
            'gatsby-remark-relative-images',
            {
              resolve:'gatsby-remark-images',
              options:{
                maxWidth:750,
                linkImagesToOriginal:false,

              }
            },
            {
              resolve: `gatsby-remark-images-contentful`,
              options:{
                maxWidth:750,
                showCaptions:true,
                
              }
            }
            
        ],
      },
    },
    //https://www.gatsbyjs.org/docs/add-a-manifest-file/
    {
      resolve:`gatsby-plugin-manifest`,
      options:{
        name:"Rohit Dalal | MERN Stack Devloper",
        short_name:"Rohit Dalal",
        description:"Hello, myself Rohit Dalal. Nice to see you with this PWA ;)",
        lang:'en',
        start_url:"/",
        background_color:"#b1cfff",
        display:"standalone",
        icon:"src/images/gatsby-icon.png",
        crossOrigin:`use-credentials`
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
