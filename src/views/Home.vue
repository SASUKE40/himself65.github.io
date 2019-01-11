<template>
  <div>
    <toolbar />
    <width-wrap>
      <v-container slot="main">
        <v-img :src="titleIMGs[0].src" />
      </v-container>
      <v-container slot="side" />
    </width-wrap>
  </div>
</template>

<script>
import random from 'lodash/random'
import WidthWrap from '../layout/WidthWrap'
import Toolbar from '../layout/Toolbar'

export default {
  name: 'Home',
  components: { Toolbar, WidthWrap },
  data () {
    return {
      titleIMGs: [
        { src: '/img/header.png' }
      ]
    }
  },

  computed: {
    description () {
      const wife = [
        '樱岛麻衣',
        '雷姆',
        '双叶里央'
      ]
      return wife[random(0, wife.length - 1)]
    },
    headerStyle () {
      return {
        'background-image': `url('${this.titleUrl}')`
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~@kuen/ui/src/setting.styl"

  .intro-header {
    height: 650px
    background-color: transparent
    background-position: center 50%
    background-attachment: scroll
    background-size: cover
    display: flex
    justify-content: flex-end
    flex-direction: column
    align-items: center

    .site-master {
      background: $blue.lighten-2
      opacity: .95
      width: 80%
      color: #eee
      padding: 1rem 0
      margin-bottom: 2rem
      border-radius: 15px
      text-align: center

      .avatar {
        elevationTransition()
        height: 100px
        width: 100px
        border-radius: 50%

        &:hover {
          elevation(7)
        }
      }

      .description {
        font-size: 17px
        font-weight: 700
        margin: 1rem 0 2rem

        span:nth-child(1) {
          color: #eee
        }

        span:nth-child(2) {
          margin-left: .5rem
          color: #eee
        }
      }
    }

    @media $display-breakpoints.sm-and-down {
      height: 300px
      padding-bottom: auto
      min-height 10rem

      .site-master {
        display: none
      }
    }
  }

  .page-home {
    max-width: 500px

    > div {
      margin-top 1rem
    }
  }

  .friend {
    padding: 1rem 0
  }
</style>
