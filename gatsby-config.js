module.exports = {
  siteMetadata: {
    title: "Mathspy",
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-prismjs",
            options: {
              classPrefix: "prism-",
            },
          },
        ],
      },
    },
    "gatsby-plugin-emotion",
    "gatsby-plugin-react-helmet",
  ],
};
