/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
 require("dotenv").config()
console.log(process.env.CONTENTFUL_SPACE_ID);
console.log(process.env.CONTENTFUL_ACCESS_TOKEN)
module.exports = {
  /* Your site config here */
  plugins: [

    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        forceFullSync: true,
      },
    },
  
    `@contentful/gatsby-transformer-contentful-richtext`
  ],
}
