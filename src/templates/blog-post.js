import React from "react"
import { graphql, Link } from "gatsby"

//import Layout from "../components/layout"
import Img from "gatsby-image"
//import SEO from "../components/seo"
import {BlogBody} from '../components/BlogBody'
import { Layout } from "../components/Layout"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "Do MMMM, YYYY")
      featuredImage {
        fluid(maxWidth: 750) {
          ...GatsbyContentfulFluid
        }
      }
      body {
        raw
      }
    }
  }
`

const BlogPost = props => {
  return (
    <Layout>
      <div className="container">
      {props.data.contentfulBlogPost.title}
      <Link to="/blog/">Visit the Blog Page</Link>
      <div className="content">
        <div className="post-title">
        <h1>{props.data.contentfulBlogPost.title}</h1>
        </div>
        <span className="post-meta">
          Posted on {props.data.contentfulBlogPost.publishedDate}
        </span>

        {props.data.contentfulBlogPost.featuredImage && (
          <Img
            className="featured"
            fluid={props.data.contentfulBlogPost.featuredImage.fluid}
            alt={props.data.contentfulBlogPost.title}
          />
        )}
        <div><BlogBody content={props.data.contentfulBlogPost.body} /></div>
      </div>
      </div>
    </Layout>
  )
}

export default BlogPost