<template>
  <side-nav>
    <v-card slot="main" />
    <v-card slot="side" />
  </side-nav>
</template>

<script>
import SideNav from '@/layout/SideNav'

export default {
  name: 'PostEditPage',
  router: {
    path: '/article/edit'
  },
  components: { SideNav }
}
</script>

<style scoped>

</style>
