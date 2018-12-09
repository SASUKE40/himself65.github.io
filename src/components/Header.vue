<template>
  <BHeader>
    <div class="b-header--container">
      <div class="logo">
        <RouterLink class="b-router" to="/">
          {{ logo.name }}
        </RouterLink>
      </div>
      <div class="space" />
      <ul v-for="(item, idx) in items" :key="idx">
        <li>
          <RouterLink class="b-router" :to="item.href">
            {{ item.name }}
          </RouterLink>
        </li>
      </ul>
    </div>
  </BHeader>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      logo: {
        name: '首页',
        href: '/'
      },
      items: [
        { name: '积分榜', href: '/checkin' },
        { name: '关于', href: '/about' }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped></style>
