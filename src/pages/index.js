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
      <h2>Latest Post</h2>
      <ul className="posts">
            <li className="home-post" key={data.allContentfulBlogPost.edges[0].node.id}>
              <h2>
                <Link to={`/blog/${data.allContentfulBlogPost.edges[0].node.slug}/`}>{data.allContentfulBlogPost.edges[0].node.title}</Link>
              </h2>
              <div className="meta">
                <span>Posted on {data.allContentfulBlogPost.edges[0].node.publishedDate}</span>
              </div>
              <div className="post-image">
                <Img fluid={data.allContentfulBlogPost.edges[0].node.featuredImage.fluid} />
              </div>
               
              <div className="post-excerpt">
                {data.allContentfulBlogPost.edges[0].node.excerpt.childMarkdownRemark.excerpt}
              </div>
              <div className="post-readmore-button">
                <Link to={`/blog/${data.allContentfulBlogPost.edges[0].node.slug}/`}>Read More</Link>
              </div>
              
            </li>
          
        
      </ul>
      </div>
      <div className="container">
      <h2>Future Goals</h2>
      </div>
      <div className="container">
      <h2>Basic Contact Info</h2>
      </div>
    </Layout>
  )
  }

export default Blog