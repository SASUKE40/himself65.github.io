<template>
  <v-footer
    v-if="hugeDisplay"
    color="white"
    :height="height"
    absolute
    inset
    app
  >
    <v-container>
      <template v-for="(item, idx) in meta">
        {{ item.desc }}
        <a
          :key="item.name"
          target="_blank"
          :href="item.href"
        >
          {{ item.name }}
        </a>
        <template v-if="idx !== meta.length - 1">
          |
        </template>
      </template>
      <br>
      <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">
        <img
          alt="知识共享许可协议" style="border-width:0"
          src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png"
        >
      </a><br>本作品采用<a
        rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"
      >
        知识共享署名-相同方式共享 4.0 国际许可协议
      </a>进行许可。
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      height: '200px',
      meta: [
        { desc: 'Hosted on', name: 'Github', href: 'https://github.com/himself65/himself65.github.io' },
        { desc: 'Powered by', name: 'Vuetify', href: 'https://vuetifyjs.com/zh-Hans' },
        { desc: 'Cloud Service by', name: 'Vultr', href: 'https://www.vultr.com' },
        { desc: 'Analytic by', name: 'Google Analytics', href: 'http://www.google.com/analytics' }
      ]
    }
  },
  computed: {
    hugeDisplay () {
      return this.$vuetify.breakpoint.lgAndUp
    }
  }
}
</script>
