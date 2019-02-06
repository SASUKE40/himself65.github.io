<template>
  <div>
    <toolbar />
    <width-wrap>
      <v-container slot="main" class="lists">
        <v-carousel
          hide-controls
          hide-delimiters
          :height=" $vuetify.breakpoint.lgAndUp ? 500 : 200"
        >
          <v-carousel-item
            v-for="(item,i) in titleIMGs"
            :key="i"
            :src="item.src"
          />
        </v-carousel>
        <template v-if="posts">
          <v-card v-for="post in posts" :key="post.date">
            <v-card-title primary-title>
              <div>
                <h1 class="headline mb-0">
                  {{ post.title }}
                </h1>
                <div class="grey--text">
                  {{ post.author }} | {{ post.date }}
                </div>
                <vue-markdown class="post-markdown" :source="post.content" />
              </div>
            </v-card-title>
          </v-card>
        </template>
        <div v-else class="text-xs-center">
          <v-progress-circular
            indeterminate
            color="primary"
          />
        </div>
      </v-container>
      <v-container slot="side">
        <template v-if="talks">
          <v-card
            v-for="talk in talks"

            :key="talk.id"
            class="mx-auto"
            color="#26c6da"
            dark
          >
            <v-card-title>
              <v-icon
                large
                left
              >
                mdi-twitter
              </v-icon>
              <span class="title font-weight-light">
                Himself65
              </span>
              <v-card-text class="headline font-weight-bold">
                {{ talk.content }}
              </v-card-text>
              <v-card-actions>
                <v-list-tile class="grow">
                  <v-list-tile-avatar color="grey darken-3">
                    <v-img
                      class="elevation-6"
                      src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                    />
                  </v-list-tile-avatar>

                  <v-list-tile-content>
                    <v-list-tile-title>{{ talk.author }}</v-list-tile-title>
                  </v-list-tile-content>

                  <v-layout
                    align-center
                    justify-end
                  >
                    <v-icon class="mr-1">
                      mdi-heart
                    </v-icon>
                    <span class="subheading mr-2">
                      {{ talk.like }}
                    </span>
                  </v-layout>
                </v-list-tile>
              </v-card-actions>
            </v-card-title>
          </v-card>
        </template>
        <div v-else class="text-xs-center">
          <v-progress-circular
            indeterminate
            color="primary"
          />
        </div>
      </v-container>
    </width-wrap>
  </div>
</template>

<script>
import random from 'lodash/random'
import VueMarkdown from 'vue-markdown'
import WidthWrap from '../layout/WidthWrap'
import Toolbar from '../layout/Toolbar'
import { getTalks } from '@/api'

export default {
  name: 'Home',
  components: { Toolbar, WidthWrap, VueMarkdown },
  data () {
    return {
      titleIMGs: [
        { src: '/img/header.png' },
        { src: '/img/title/1.png' },
        { src: '/img/title/4.png' },
        { src: '/img/title/14.jpg' }
      ],
      posts: null,
      talks: null
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
  },

  async created () {
    // todo: support definitely typed
    await this.$store.state.global.butter.post.list({ page: 1, page_size: 5 })
      .then(res => {
        this.posts = res.data.data.map(({ author, title, body, status, published }) => {
          if (status !== 'published') return
          return {
            author: author.first_name + author.last_name,
            title: title,
            content: body,
            date: /[0-9]+-[0-9]+-[0-9]{2}/.exec(published)[0]
          }
        })
      })
    this.talks = await getTalks()
  }
}
</script>

<style lang="stylus" scoped>
  .lists {
    > div {
      margin-top 1rem
    }
  }

  .friend {
    padding: 1rem 0
  }

  .post-markdown {
    >>> img {
      width 100%
    }
  }
</style>
