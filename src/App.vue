<template>
  <v-app id="app" app>
    <v-app>
      <SideNav />
      <v-content>
        <RouterView />
      </v-content>
      <v-btn
        v-show="!$vuetify.breakpoint.lgAndUp"
        bottom
        right
        icon
        dark
        fixed
        color="primary"
        @click="$store.state.drawer = !$store.state.drawer"
      >
        <v-icon>
          list
        </v-icon>
      </v-btn>
      <Footer />
    </v-app>
  </v-app>
</template>
<script>
import Footer from '@/layout/Footer'
import SideNav from '@/layout/SideNav'

export default {
  components: {
    SideNav,
    Footer
  }
}
</script>

<style lang="stylus">
  @import "~vuetify/src/stylus/settings/_colors.styl"

  html {
    background #eee
  }

  body {
    margin 0
    padding 0
  }

  #app {
    width 100%
    height 100%
    font-family 12px
    color #2c3e50
  }

  .markdown {
    >>> a {
      color: $blue.light
      text-decoration none
    }
  }
</style>
