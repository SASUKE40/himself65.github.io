import React, { useState } from 'react'
import { navigate } from 'gatsby'
import { useImported } from 'react-imported-component'

import { SiteSiteMetadataMenuLinks } from '~types'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

const RouterTabs: React.FC<{
  routers: Pick<SiteSiteMetadataMenuLinks, 'name' | 'link' | 'icon'>[]
  currentPage: string
}> = ({ routers = [], currentPage }) => {
  const [index] = useState(
    routers.findIndex(v => v.link === currentPage))
  return (
    <Tabs
      value={index}
      onChange={(_, value) => navigate(routers[value].link as string)}
    >
      {routers.map(router => {
        const {
          imported: Icon = () => null
        } = useImported(() => import(`@material-ui/icons/${router.icon}`))
        return (
          <Tab
            label={router.name}
            icon={<Icon/>}
            key={router.link as string}/>
        )
      })}
    </Tabs>
  )
}

export default RouterTabs
