import React from 'react'
import { graphql } from 'gatsby'

import { TagPageQuery } from '~types'
import Layout from '../components/layout'
import PostList from '../components/PostList'
import RouterTabs from '../components/RouterTabs'

const TagPage: React.FC<{
  data: TagPageQuery
  pageContext: {
    tag: string
  }
}> = props => {
  const targetPost = props.data.allMarkdownRemark.edges.filter(
    edge => edge.node.frontmatter?.tags?.includes(props.pageContext.tag))
  return (
    <Layout title={props.data.site?.siteMetadata?.title}>
      <RouterTabs currentPage='/tags' routers={props.data.site?.siteMetadata?.menuLinks || []}/>
      <PostList posts={targetPost}/>
    </Layout>
  )
}

export default TagPage

export const pageQuery = graphql`
  query TagPage {
    site {
      siteMetadata {
        title
        menuLinks {
          name
          link
        }
      }
    }

    allMarkdownRemark(filter: {}, sort: {fields: frontmatter___date}) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            tags
            title
            date
          }
        }
      }
    }
  }
`
