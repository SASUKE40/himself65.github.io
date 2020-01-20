import React from 'react'
import { graphql } from 'gatsby'

import RouterTabs from '../components/RouterTabs'
import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo'

import '../style/index.css'
import PostList from '../components/PostList'

const BlogIndex = ({ data, ...props }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title='Home'/>
      <Bio/>
      <RouterTabs routers={data.site.siteMetadata.menuLinks} currentPage='/'/>
      <PostList posts={posts}/>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        menuLinks {
          name
          link
          icon
        }
        friendship {
          description
          name
          url
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date
            title
          }
        }
      }
    }
  }
`
