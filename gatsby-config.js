module.exports = {
  siteMetadata: {
    title: 'Tromsø Strikkefestival',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/blog`,
        name: 'blog',
      },
    },
    'gatsby-transformer-remark',
  ],
}