import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image'
import Layout from '../components/Layout';
import Bio from '../components/Bio';

function BlogPost({ data }) {
  const { markdownRemark, site } = data;
  const { author } = site.siteMetadata;
  const { frontmatter, html } = markdownRemark;
  const { date, title, featuredImage } = frontmatter;
  return (
    <Layout>
      <div className="w-full bg-white">
        <div className="flex justify-center items-center max-w-screen-xl mt-8 px-4 mx-auto font-rubik relative">
          <div className="relative w-full h-full min-h-full">
            <div className="absolute w-full h-full bg-black opacity-50 z-20"></div>
            <Img className="w-full z-10" style={{ maxHeight: '400px' }}
              fluid={featuredImage.childImageSharp.fluid} />
          </div>
          <div className="absolute border border-black py-2 px-4 bg-white bg-opacity-50 z-30">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-1">
              {title}
            </h1>
            <div className="flex justify-between pb-2 font-light">
              <h3 className="font-medium">{author}</h3>
              {data? <h3>{date}</h3>: null}
            </div>
          </div>
        </div>

        <div className="w-full max-w-screen-lg mx-auto my-16 px-4">
          <div className="grid grid-cols-1 gap-16 text-2xl leading-loose tracking-wide" dangerouslySetInnerHTML={{ __html: html }}>

          </div>
          <Bio />
        </div>
      </div>
    </Layout>


  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug }}) {
      html
      frontmatter {
        title
        description
        date
        featuredImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;


export default BlogPost
