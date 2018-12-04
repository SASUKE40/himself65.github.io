<template>
  <div id="app">
    <BContainer>
      <!-- todo: add nav bar -->
      <RouterView />
    </BContainer>
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
  </div>
</template>

<style lang="stylus">
  @import "~@kuen/components/src/stylus/app.styl"
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
    font-family $font-size-default
    text-align center
    color #2c3e50
  }

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
