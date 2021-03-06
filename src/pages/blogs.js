import React from 'react'

import AllBlogs from './../components/helpers/AllBlogs'
import PageLayout from './../components/layout/pageLayout'
import BlogFilter from './../components/helpers/BlogFilter'
import SEO from './../components/seo'

import { graphql } from 'gatsby'

const Blogs = (props) => {
  return (
    <PageLayout
      scroll={false}
      changeBlog={false}
      margin={true}
      scrollHeight={20}
    >
      <SEO pageTitle="Blogs | Rohit Dalal" />

      <BlogFilter data={props.data.blogsQuery} />
      <AllBlogs blogs={props.data.blogsQuery} fit="auto-fit" />
    </PageLayout>
  )
}

export const blogsQuery = graphql`
  {
    blogsQuery: allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            title
            published
            date(formatString: "MMM Do YY")
            slug
            tags
            thumbnail {
              childImageSharp {
                fluid(maxHeight: 250, maxWidth: 400) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
          excerpt
          body
          fields {
            readingTime {
              text
            }
          }
        }
      }
    }
  }
`

export default Blogs
