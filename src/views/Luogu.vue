<template>
  <b-container>
    <b-card>
      <b-card-body>
        <v-form>
          <v-text-field
            v-model="user.username"
            label="用户名或邮箱"
            required
          />
          <v-text-field
            v-model="user.password"
            label="密码"
            required
          />
          <v-text-field v-model="user.verify" />
          <v-img
            width="64"
            height="30"
            :src="captchaUrl"
          />
          <v-btn
            :disabled="!valid"
            @click="submit"
          >
            提交
          </v-btn>
        </v-form>
      </b-card-body>
    </b-card>
  </b-container>
</template>

<script>
import axios from 'axios'
import every from 'lodash/every'

export default {
  name: 'Luogu',

  data () {
    return {
      user: {
        username: '',
        password: '',
        cookie: 3,
        verify: ''
      },
      captchaUrl: '/api'
    }
  },

  computed: {
    valid () {
      return every(this.user, (k) => {
        return k !== ''
      })
    }
  },

  methods: {
    async submit () {
      axios.post('/luogu/login', this.user).then(res => {
        if (res.status === 200) {
          console.log(res.data)
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
