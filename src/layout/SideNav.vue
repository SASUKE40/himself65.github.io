<template>
  <v-navigation-drawer
    v-model="drawer"
    :mini-variant="smallDisplay"
    :permanent="smallDisplay"
    mini-variant-width="60"
    class="site-side-nav"
    hide-overlay
    dark
    app
  >
    <v-list>
      <v-btn
        to="/"
        flat
        icon
      >
        <v-avatar class="site-logo">
          <img src="/img/icons/ms-icon-144x144.png">
        </v-avatar>
      </v-btn>
      <v-spacer />
      <div class="side-nav-items">
        <v-tooltip
          v-for="item in items" :key="item.name"
          right
          nudge-right="10px"
        >
          <v-btn
            slot="activator"
            active-class=""
            exact-active-class="side-nav-item"
            class="side-nav-item"
            depressed
            :to="item.href"
            flat
            icon
          >
            <v-icon>
              {{ item.icon }}
            </v-icon>
            <span> {{ item.name }}</span>
          </v-btn>
          <span> {{ item.name }}</span>
        </v-tooltip>
      </div>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'SideNav',
  data () {
    return {
      drawer: true,
      mini: true,
      items: [
        { name: '关于', href: '/about', icon: 'fas fa-info' }
      ]
    }
  },

  computed: {
    smallDisplay () {
      return this.$vuetify.breakpoint.lgAndUp
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "../../node_modules/vuetify/src/stylus/settings/_variables.styl"

  .site-side-nav {

    .site-logo {

    }

    .side-nav-item {
      &:hover:before, &:focus:before {
        background-color transparent !important
      }

      margin-top 1rem

      >>> div {
        flex-direction column
      }

      span {
        padding-top .5rem
        font-size 10px
      }
    }
  }
</style>
