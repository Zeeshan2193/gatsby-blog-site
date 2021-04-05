import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Layout } from "../components/Layout"
import Img from 'gatsby-image'

//import Img from "gatsby-image"
//import Layout from "../components/layout"
//import SEO from "../components/seo"

const Blog = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
          edges {
            node {
              title
              id
              slug
              publishedDate(formatString: "Do MMMM, YYYY")
              featuredImage {
                fluid(maxWidth: 750) {
                  ...GatsbyContentfulFluid
                }
              }
              excerpt {
                childMarkdownRemark {
                  excerpt(pruneLength: 150)
                }
              }
            }
          }
        }
      }
    `
  )
  return (
    <Layout>
       <div className="container">
      <p>
        <Link to="/">Go back to the homepage</Link>
      </p>
      <ul className="posts">
        {data.allContentfulBlogPost.edges.map(edge => {
          return (
            <li className="home-post" key={edge.node.id}>
              <h2>
                <Link to={`/blog/${edge.node.slug}/`}>{edge.node.title}</Link>
              </h2>
              <div className="meta">
                <span>Posted on {edge.node.publishedDate}</span>
              </div>
              <div className="post-image">
                <Img fluid={edge.node.featuredImage.fluid} />
              </div>
               
              <div className="post-excerpt">
                {edge.node.excerpt.childMarkdownRemark.excerpt}
              </div>
              <div className="post-readmore-button">
                <Link to={`/blog/${edge.node.slug}/`}>Read More</Link>
              </div>
              <hr />
            </li>
          )
        })}
      </ul>
      </div>
    </Layout>
  )
}

export default Blog