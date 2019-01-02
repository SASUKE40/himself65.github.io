<template>
  <v-toolbar
    color="grey darken-2"
    dark
    flat
  >
    <v-toolbar-title>
      <v-btn
        v-show="$route.path !== '/'"
        to="/"
        icon
      >
        <v-avatar size="38">
          <img src="/logo.jpg">
        </v-avatar>
      </v-btn>
      {{ appName }}
    </v-toolbar-title>
    <v-spacer />
    <v-toolbar-items>
      <v-btn
        v-for="item in items" :key="item.name"
        :to="item.href"
        color="grey darken-2"
      >
        {{ item.name }}
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import { appName } from '../../config'

export default {
  name: 'Header',
  data () {
    const handle = ([first, ...rest]) => {
      return `${first.toUpperCase()}${rest.join('')}`
    }
    return {
      appName: handle(appName),
      logo: {
        name: '首页',
        href: '/'
      },
      items: [
        { name: '积分榜', href: '/checkin' },
        { name: '关于', href: '/about' }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~@kuen/components/src/stylus/setting.styl"

  .b-header-fix {
    elevation(1)
  }
</style>
