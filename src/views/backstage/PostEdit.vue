<template>
  <v-form
    v-model="valid"
    lazy-validation
  >
    <v-container>
      <v-flex>
        <v-text-field v-model="title" label="标题" />
      </v-flex>
      <markdown-palettes v-model="src" class="site-md" />
      <v-flex right>
        <v-btn color="accent">
          上传文章
        </v-btn>
        <v-btn color="warning">
          暂存
        </v-btn>
      </v-flex>
    </v-container>
  </v-form>
</template>

<script>
import MarkdownPalettes from 'markdown-palettes'
import { submitArticle, cacheArticle } from '@/api'

export default {
  name: 'PostEditPage',
  components: { MarkdownPalettes },
  data () {
    return {
      valid: false,
      title: '',
      src: ''
    }
  },
  methods: {
    async submit () {
      await submitArticle(this.title, this.src).then(null) // todo
    },
    async cache () {
      await cacheArticle(this.title, this.src).then(null) // todo
    }
  }
}
</script>

<style lang="stylus" scoped>
  .site-md {
    height 500px !important // fixme: is this a bug?
    width 100%
  }
</style>
