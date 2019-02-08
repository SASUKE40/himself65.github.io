<template>
  <div>
    <template v-if="items">
      <template v-for="item in items">
        <slot name="card" v-bind="item" />
      </template>
      <div class="text-xs-center">
        <v-pagination
          v-model="current"
          :total-visible="5"
          :length="pages"
        />
      </div>
    </template>
    <div v-else class="text-xs-center">
      <v-progress-circular
        indeterminate
        color="primary"
      />
    </div>
  </div>
</template>

<script>
import axios from '@/api'

export default {
  name: 'DisplayList',

  props: {
    url: { type: String, required: true }
  },

  data () {
    this._current = 0
    return {
      items: null,
      total: 0
    }
  },

  computed: {
    pages () {
      return Math.round(this.total / this.items.length)
    },

    current: {
      get () {
        return this._current + 1
      },
      set (val) {
        this._current = val
      }
    }
  },

  watch: {
    async current (val, oldVal) {
      if (val !== oldVal) {
        await this.fetch()
      }
    }
  },

  async beforeMount () {
    await this.fetch()
  },

  methods: {
    async fetch () {
      await axios.get(this.url, { params: { page: this._current } }).then(res => {
        if (res && res.status === 200) {
          const { data, total } = res.data
          this.items = data
          this.total = total
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
