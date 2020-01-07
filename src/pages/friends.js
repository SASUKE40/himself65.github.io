import Layout from '../components/layout'
import React from 'react'
import { graphql } from 'gatsby'

import RouterTabs from '../components/RouterTabs'
import SEO from '../components/seo'

const FriendPage = (props) => {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title='Friends'/>
      <RouterTabs routers={data.site.siteMetadata.menuLinks} currentPage='/friends'/>
      未完成页面
    </Layout>
  )
}

export default FriendPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        menuLinks {
          name
          link
        }
      }
    }
  }
`
