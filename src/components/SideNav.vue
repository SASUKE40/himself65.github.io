<template>
  <v-navigation-drawer
    :mini-variant="true"
    mini-variant-width="60"
    :permanent="true"
    hide-overlay
    dark
    app
  >
    <v-avatar class="site-logo">
      <img src="/img/icons/ms-icon-144x144.png">
    </v-avatar>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'SideNav',
  data () {
    return {
      drawer: true,
      mini: true
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~vuetify/src/stylus/settings/_variables.styl"

  .site-logo {
    margin-top: .2rem
    @media $display-breakpoints.md-and-up {
      margin-top: .5rem
    }
  }
</style>
