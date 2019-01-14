<template>
  <v-container>
    <width-wrap>
      <b-card slot="side">
        <b-card-header title="友情链接" />
        <b-card-body>
          <div v-for="friend in friends" :key="friend.title" class="friend">
            <a
              target="_blank"
              :href="friend.href"
            >
              {{ friend.title }}
            </a>
          </div>
        </b-card-body>
      </b-card>
      <b-card slot="main">
        <b-card-body>
          <b-text :content="msg" />
        </b-card-body>
      </b-card>
    </width-wrap>
  </v-container>
</template>

<script>
import config from '../../config'
import WidthWrap from '../layout/WidthWrap'

export default {
  name: 'About',
  components: { WidthWrap },
  data () {
    const { friends } = config
    return {
      friends: friends,
      msg: '# Himself65 \n' +
          'I\'m a student, trying to master Javascript :) \n\n' +
          '## Project \n' +
          '- **Kuen**: a useful and beautiful frontend Framework \n\n' +
          '- **vscode-luogu**: extremely convenient code plugin on vscode \n\n' +
          '## Contact \n' +
          '- Email: himself6565@gmail.com \n\n' +
          '- Github: [himself65](https://github.com/himself65)'
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~@kuen/components/src/stylus/setting.styl"

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
</style>
