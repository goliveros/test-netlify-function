/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */

  siteMetadata: {
    title: "Backroads",
    description: "GraphQL siteMetaData Testing!!!",
    author: "@gian",
    twitterUsername: "@John_Doe",
    data: ["item1", "item2"],
    newData: {
      name: "Gian",
      age: 24,
    },
  },
}
