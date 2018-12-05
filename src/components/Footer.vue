<template>
  <footer class="b-footer">
    Code by <a
      target="_blank"
      href="https://github.com/himself65/"
    >
      Himself65
    </a> |
    <a
      target="_blank"
      href="https://github.com/Himself65/Himself65.github.io/blob/master/LICENSE"
    >
      MIT
    </a>
    LICENSE |
    <a
      target="_blank"
      href="https://github.com/Himself65/kuen"
    >
      KUEN
    </a>
    Framework
  </footer>
</template>

<script>
export default {
  name: 'Footer'
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
