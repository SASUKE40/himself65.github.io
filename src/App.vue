<template>
  <div id="app">
    <v-app>
      <SideNav class="site-side-nav" app />
      <v-content class="site-content" app>
        <RouterView class="fill-height" />
      </v-content>
      <v-btn
        v-show="!$vuetify.breakpoint.lgAndUp"
        bottom
        right
        icon
        dark
        fixed
        color="primary"
        @click="$store.commit('global/setDrawer')"
      >
        <v-icon>
          list
        </v-icon>
      </v-btn>
      <Footer class="site-footer" app />
    </v-app>
  </div>
</template>
<script>
import Footer from '@/layout/Footer'
import SideNav from '@/layout/SideNav'

export default {
  components: {
    SideNav,
    Footer
  },
  async beforeCreate () {
    // updateCurrentUser
    await this.$store.dispatch('global/updateCurrentUser')
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

  .site-content {
    margin-bottom 5rem
  }

  .item {
    margin-bottom 10px
    &:first-child {
      margin-top 20px
    }
  }
</style>
