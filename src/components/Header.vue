<template>
  <div class="b-header">
    <div class="b-header--container">
      <div class="logo">
        <RouterLink class="b-router" to="/">
          {{ logo.name }}
        </RouterLink>
      </div>
      <div class="space" />
      <ul v-for="(item, idx) in items" :key="idx">
        <li>
          <RouterLink class="b-router" :to="item.href">
            {{ item.name }}
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      logo: {
        name: '首页',
        href: '/'
      },
      items: [
        { name: '关于', href: '/about' }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~@kuen/components/src/stylus/setting.styl"

  .b-header {
    top: 0
    position: sticky
    z-index: 1000
    height: 3rem
    background: #303030
    color: $theme-dark.text.primary
    display: flex
    flex-direction: row
    align-items center

    &--container {
      margin-left: 1rem
      margin-right: 1rem
      display: flex
      flex-direction: row
      width: 100%

      .space {
        flex-grow: 1
      }

      .logo {
        font-weight bold
      }

      ul {
        margin 0
        list-style-type: none
      }
    }

    @media $display-breakpoints.xs-only {
      position: relative
    }
  }
</style>
