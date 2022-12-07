require("dotenv").config();

module.exports = {
  trailingSlash: "never",
  siteMetadata: {
    title: `frontEndLouisVallaey`,
    siteUrl: `https://www.louisvallaey.be`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-plugin-vercel",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.GATSBY_STRAPI_API_URL,
        token: process.env.STRAPI_TOKEN,
        queryLimit: 5000,
        collectionTypes: ["page", "blog-item"],
      },
    },
  ],
};
