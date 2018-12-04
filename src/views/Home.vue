<template>
  <div class="b-home">
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
        <p>本项目已经开始全部使用Vue框架</p>
        <p>通过Kuen框架开发</p>
        <p>敬请期待</p>
      </BCardBody>
    </BCard>
    <BCard
      dark
      background-color="blue light"
    >
      <BCardHeader
        src="img/header.png"
        small
        title-shadow
        title="Himself65"
      />
      <BCardBody>
        <p>I'm a student. Trying to be a powerful bread person.</p>
        <p>You can call me "himself65" or "扩散性百万甜面包".</p>
        <p>Now studying in culture and frontend development</p>
      </BCardBody>
    </BCard>
  </div>
</template>

<script>
  export default {
    name: "Home",
    methods: {
      click () {

      }
    }
  };
</script>

<style lang="stylus" scoped>
  .b-home {
    > div {
      margin-top 1rem
    }
  }
</style>
