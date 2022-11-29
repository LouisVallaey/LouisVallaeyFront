require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: `frontEndLouisVallaey`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
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
