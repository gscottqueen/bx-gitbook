module.exports = {
  siteMetadata: {
    title: `Bixal Techbook`,
    description: `A git based documentation app for Bixal Corp Tech Knowledge.`,
    author: `@bixal`,
    gitrepo: `https://github.com/gscottqueen/bx-gitbook`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-numbered-footnotes`,
          {
            resolve: `gatsby-remark-prismjs`,
          },
          {
            resolve: `gatsby-remark-external-links`,
            options: {
              target: `_blank`,
              rel: `nofollow noopener noreferrer`,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `svgs`,
        path: `${__dirname}/src/svgs`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Bixal Techbook`,
        short_name: `Bixal Techbook`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/bixal-icon.jpg`, // This path is relative to the root of the site.
      },
    },
    // `gatsby-plugin-offline`,
  ],
}
