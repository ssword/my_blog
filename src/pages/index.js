import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import PostsList from '../components/PostsList'

const IndexPage = ({ data }) => {
  return (<Layout>
    <SEO title="Home" />
    <PostsList posts={data.posts} />
  </Layout>);
};

export const pageQuery = graphql`
  query BlogPostsQuery {
    posts: allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            description
            date
          }
          id
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default IndexPage
