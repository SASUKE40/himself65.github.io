<template>
  <b-container>
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <v-text-field
        v-model="username"
        label="用户名"
        required
      />

      <v-text-field
        v-model="password"
        label="密码"
        required
      />

      <v-btn
        :disabled="!valid"
        color="green lighten-1"
        dark
        @click="login"
      >
        登陆
      </v-btn>
      <v-btn href="/api/login/auth/github">
        通过 GitHub 注册
        <v-icon dark right>
          fab fa-github
        </v-icon>
      </v-btn>
    </v-form>
  </b-container>
</template>

<script>
export default {
  name: 'Login',

  data () {
    return {
      username: undefined,
      password: undefined,
      valid: false
    }
  },

  methods: {
    login () {

    }
  }
}
</script>

<style scoped>

</style>
