<template>
  <div id="app">
    <div class="b-container">
      <!-- todo: add nav bar -->
      <RouterView />
    </div>
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

  .b-container {
    display block
    margin-left 3rem
    min-height 30rem
    max-width 40rem
    margin-top 2rem
    margin-bottom 2rem

    > * {
      margin-top 1rem
    }

    @media $display-breakpoints.xs-only {
      margin 0 .3rem
    }
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
