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
        <v-btn
          color="accent"
          @click="submit"
        >
          上传文章
        </v-btn>
        <v-btn
          v-if="!isNew"
          color="error"
          @click="remove"
        >
          删除
        </v-btn>
        <v-btn
          color="warning"
          disabled
        >
          暂存云端
        </v-btn>
      </v-flex>
    </v-container>
  </v-form>
</template>

<script>
import MarkdownPalettes from 'markdown-palettes'
import { submitArticle, cacheArticle, getArticle } from '@/api'

export default {
  name: 'PostEditPage',
  components: { MarkdownPalettes },
  props: {
    isNew: { type: Boolean, required: true }
  },

  data () {
    return {
      valid: false,
      title: '',
      src: ''
    }
  },

  watch: {
    src (val) {
      this.$ls.set('temp-article', val)
    }
  },

  async created () {
    const temp = this.$ls.get('temp-article-content')
    if (temp) {
      this.src = temp
    }
    if (!this.isNew) {
      await getArticle(this.$route.params.id).then(data => {
        if (data) {
          this.src = data.content
          this.title = data.title
        }
      })
    }
  },

  methods: {
    async submit () {
      await submitArticle(this.title, this.src, this.$route.params.id)
        .then(this.$alert.fire({
          type: 'success',
          title: '创建成功',
          timer: 3000
        }).then(() => this.$router.replace('/')))
    },
    async cache () {
      await cacheArticle(this.title, this.src).then(null) // todo
    },
    async remove () {
      await this.$message('shit', 'success', 'no')
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
