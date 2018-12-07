<template>
  <footer class="b-footer">
    <template v-for="(item, idx) in meta">
      {{ item.desc }}
      <a
        :key="item.name"
        target="_blank"
        :href="item.href"
      >
        {{ item.name }}
      </a>
      <template v-if="idx !== meta.length - 1">
        |
      </template>
    </template>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      meta: [
        { desc: 'Hosted on', name: 'Github', href: 'https://github.com/himself65/himself65.github.io' },
        { desc: 'Powered by', name: 'Kuen', href: 'https://github.com/Himself65/kuen' },
        { desc: 'Cloud Service by', name: 'Vultr', href: 'https://www.vultr.com/' },
        { desc: 'Analytic by', name: 'Google Analytics', href: 'http://www.google.com/analytics/' }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~@kuen/components/src/stylus/setting.styl"

  .b-footer {
    position relative
    margin-left auto
    margin-right auto
    box-sizing border-box
    margin-top 1rem
    margin-bottom 7rem
    width 80%
    height 100%

    text-align center
    font-size 12px
    color #99a2aa

    a {
      color: $blue['base']
      outline none
      text-decoration none
      cursor pointer
      white-space nowrap
    }
  }
</style>
