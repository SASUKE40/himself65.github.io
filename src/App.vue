<template>
  <div id="app">
    <Header />
    <RouterView />
    <Footer />
  </div>
</template>
<script>
import Footer from './components/Footer'
import Header from './components/Header'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="stylus">
  @import "~@kuen/components/src/stylus/setting.styl"

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

  .b-router {
    color: #fff
    text-decoration none
  }

  .markdown {
    >>> a {
      color: $blue.light
      text-decoration none
    }
  }
</style>
