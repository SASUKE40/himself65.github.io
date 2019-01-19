<template>
  <div class="site-header">
    <v-spacer />
    <v-toolbar
      class="site-user-nav"
      dense
      floating
    >
      <v-btn icon>
        <v-badge color="red" right>
          <span v-if="false" slot="badge">
            0
          </span>
          <v-icon>fas fa-envelope</v-icon>
        </v-badge>
      </v-btn>

      <v-btn
        :to="userUrl"
        icon
      >
        <v-icon>fas fa-user</v-icon>
      </v-btn>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: 'Toolbar',
  computed: {
    userUrl () {
      // fixme: 根据是否登陆返回地址
      return '/login'
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~vuetify/src/stylus/settings/_variables.styl"

  .site-header {
    display flex

    .site-user-nav {
      margin-right 3rem
    }

    @media $display-breakpoints.md-and-down {
      .site-user-nav {
        margin-right 1.5rem
      }
    }
  }
</style>
