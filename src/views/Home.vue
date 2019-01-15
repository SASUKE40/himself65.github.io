<template>
  <div>
    <toolbar />
    <width-wrap>
      <v-layout slot="main">
        <v-container class="lists">
          <v-card dark>
            <v-img
              src="https://s2.ax1x.com/2019/01/15/Fz7P8f.jpg"
              height="400px"
            >
              <v-layout>
                <v-flex>
                  <v-card-title>
                    <div class="headline">
                      我永远喜欢Saber
                    </div>
                  </v-card-title>
                </v-flex>
              </v-layout>
            </v-img>
          </v-card>
          <v-card dark class="white--text">
            <v-img
              :src="titleIMGs[0].src"
            >
              <v-layout>
                <v-flex>
                  <v-card-title primary-title>
                    <div>
                      <div class="headline">
                        我的Blog
                      </div>
                      <div class="grey--text">
                        Updated
                      </div>
                      <div>
                        采用和Luogu相同的UI设计
                      </div>
                      <div>
                        敬请期待
                      </div>
                    </div>
                  </v-card-title>
                </v-flex>
              </v-layout>
            </v-img>
          </v-card>
        </v-container>
      </v-layout>
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
        '双叶里央',
        '阿尔托莉雅'
      ]
      return wife[random(0, wife.length - 1)]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~@kuen/ui/src/setting.styl"

  .lists {
    > div {
      margin-top 1rem
    }
  }

  .friend {
    padding: 1rem 0
  }
</style>
