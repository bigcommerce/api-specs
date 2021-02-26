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
    {
      resolve: "gatsby-source-graphql",
      options: {
        // This type will contain remote schema Query type
        typeName: "SL",
        // This is the field under which it's accessible
        fieldName: "stoplight",
        // URL to query from
        url: "https://stoplight.io/graphql",
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
};
