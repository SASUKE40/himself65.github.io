<template>
  <v-container>
    <width-wrap>
      <v-card slot="side">
        <v-card-title>
          <div>
            <h1 class="headline mb-0">
              友情链接
            </h1>
            <span v-for="friend in friends" :key="friend.title" class="friend">
              <a
                target="_blank"
                :href="friend.href"
              >
                {{ friend.title }}
              </a>
              <br>
            </span>
          </div>
        </v-card-title>
      </v-card>
      <v-card slot="main">
        <v-card-title>
          <vue-markdown
            class="site-markdown"
            :source="msg"
          />
        </v-card-title>
      </v-card>
    </width-wrap>
  </v-container>
</template>

<script>
import config from '../../config'
import VueMarkdown from 'vue-markdown'
import WidthWrap from '../layout/WidthWrap'

export default {
  name: 'About',
  components: {
    VueMarkdown,
    WidthWrap
  },
  data () {
    const { friends } = config
    return {
      friends: friends,
      msg: '# Himself65 \n\n' +
          '18岁，是个学生 \n\n' +
          '## 最近项目 \n\n' +
          '- Astoria 该网站后端 \n\n' +
          '- Himself65 该网站前端 \n\n' +
          '- md-meta 提取markdown文件meta信息 \n\n' +
          '## 联系我 \n\n' +
          '- Mail: himself6565@gmail.com \n\n' +
          '- Github: [himself65](https://github.com/himself65) \n\n' +
          '- Zhihu: [扩散性百万甜面包](https://zhihu.com/people/Himself65) \n\n' +
          '- Steam: [扩散性百万甜面包](https://steamcommunity.com/id/Himself65)'
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~vuetify/src/stylus/settings/_colors.styl"

  .page-about {
    background transparent
  }

  .friend {
    padding: .5rem 0

    a {
      color: $blue.base
      text-decoration: transparent
    }
  }

  .site-markdown {
    >>> a {
      color: $blue.base
      text-decoration transparent
    }
  }
</style>
