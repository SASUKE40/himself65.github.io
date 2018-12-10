<template>
  <div class="page-about">
    <BCard>
      <BCardBody>
        <BText :content="msg" />
      </BCardBody>
    </BCard>
  </div>
</template>

<script>

export default {
  name: 'About',
  data () {
    return {
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
</style>
