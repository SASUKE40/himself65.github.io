<template>
  <div id="app">
    <!-- todo: add nav bar -->
    <BContainer>
      <RouterView />
    </BContainer>
    <Footer />
  </div>
</template>
<script>
import Footer from './components/Footer'

export default {
  components: {
    Footer
  }
}
</script>

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
</style>
