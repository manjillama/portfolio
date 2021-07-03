module.exports = {
  siteMetadata: {
    title: 'Get to know me better - Manjil Tamang | Full Stack Software Engineer'
  },
  plugins: [
    'gatsby-transformer-remark',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'blogs',
        path: `${__dirname}/src/blogs`
      }
    }
  ]
};
