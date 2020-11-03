module.exports = {
  pathPrefix: "/api-specs",
  siteMetadata: {
    title: "BigCommerce API Specifications",
    description:
      "OpenAPI Specifications, Swagger, and JSON schema used to generate the human-readable BigCommerce API Reference.",
    author: "@bigcommerce",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
};
