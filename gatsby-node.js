/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({
      node,
      getNode,
      basePath: `${__dirname}/content/blog`
    });

    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
  }
}


exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const BlogPostTemplate = path.resolve('./src/templates/BlogPost.js');

  const { data: { posts } } = await graphql(`
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
  `);

  posts.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: BlogPostTemplate,
      context: {
        slug: node.fields.slug,
      }
    })
  })
}