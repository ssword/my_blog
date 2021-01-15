import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  return (<Layout>
    <SEO title="Home" />
    <h1>Home Page</h1>
    <ul>
      {
        data.posts.edges.map(({ node }) => {
          const { title, description, date } = node.frontmatter;
          return (
            <li key={title} className="mb-4">
              <h2 className="text-2xl font-semibold">{title}</h2>
              <h3>{date}</h3>
              <p>{description}</p>
            </li>
          );
        })}
    </ul>
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
        }
      }
    }
  }
`;

export default IndexPage
