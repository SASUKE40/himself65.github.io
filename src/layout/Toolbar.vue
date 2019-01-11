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

      <v-btn icon>
        <v-icon>fas fa-user</v-icon>
      </v-btn>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: 'Toolbar'
}
</script>

<style lang="stylus" scoped>
  .site-header {
    display flex

    .site-user-nav {
      margin-right 3rem
    }
  }
</style>
