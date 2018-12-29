<template>
  <div>
    <div :style="headerStyle" class="intro-header">
      <div class="site-master">
        <img class="avatar" src="img/icons/ms-icon-144x144.png">
        <div class="description">
          <span>本人永远喜欢</span>
          <span>{{ description }}</span>
        </div>
      </div>
    </div>
    <b-container>
      <div class="page-home">
        <b-card
          dark
          background-color="teal light"
        >
          <b-card-header
            src="img/title/16.jpg"
            small
            title-shadow
            title="成功搭建"
          />
          <b-card-body>
            <b-text dark :content="msg" />
          </b-card-body>
        </b-card>
        <b-card
          dark
          background-color="blue light"
        >
          <b-card-header
            src="img/title/1.png"
            large
            title-shadow
            title="扩散性百万甜面包的主页"
          />
          <b-card-body>
            <p>前端采用Vue.js，后端采用Koa.js，数据库使用MongoDB，进行开发</p>
            <p>正在开发中，敬请期待</p>
          </b-card-body>
        </b-card>
      </div>
    </b-container>
  </div>
</template>

<script>
import random from 'lodash/random'

export default {
  name: 'Home',

  data () {
    return {
      titleUrl: 'img/header.png',
      msg: '因为没有写完数据库部分，也没有写markdown文件渲染部分，所以只能hack到前端里面 \n\n 最近开了三个项目 `Himself65`，`Astoria`，`Kuen`，闲暇之余都在迭代更新这几个东西 \n\n' +
          '### Astoria \n\n 本网站的后端部分，后端基于Koa.js（with Typescript），Mongodb作数据库 \n\n' +
          '### Himself65 \n\n 前端部分，原项目名字是**Himself65.github.io**，然后现在被我搞成基于 `Vue` 开发，应该是单根App（PWA）的框架 \n\n' +
          '### Kuen \n\n 框架部分，具体如何设计还没有定论，现在模仿的是 `Material Design` 和 `Luogu` 相关的设计和配色 \n\n 这个项目估计会一年多才能成型'
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
