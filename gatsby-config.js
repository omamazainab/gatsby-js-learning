module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Firs Gatsby Site',
    author: 'Omama Zainab'
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-transformer-remark'
  ],
}
