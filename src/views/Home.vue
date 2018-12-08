<template>
  <div class="page-home">
    <BCard
      dark
      background-color="teal light"
    >
      <BCardHeader
        src="img/title/16.jpg"
        small
        title-shadow
        title="成功搭建"
      />
      <BCardBody>
        <p>本项目已经开始全部使用Vue.js开发</p>
        <p>通过Kuen Framework开发</p>
        <p>敬请期待</p>
      </BCardBody>
    </BCard>
    <BCard
      dark
      background-color="blue light"
    >
      <BCardHeader
        src="img/header.png"
        large
        title-shadow
        title="扩散性百万甜面包的主页"
      />
      <BCardBody>
        <p>前端采用Vue.js，后端采用Koa.js，数据库使用MongoDB，进行开发</p>
        <p>正在开发中，敬请期待</p>
      </BCardBody>
    </BCard>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="stylus" scoped>
  .page-home {
    max-width: 500px

    > div {
      margin-top 1rem
    }
  }
</style>
