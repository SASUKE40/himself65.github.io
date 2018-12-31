<template>
  <b-container>
    <b-card>
      <b-card-body>
        <v-form>
          <v-text-field
            v-model="user.username"
            label="ID"
            messages="方便识别出您"
            required
          />
          <v-text-field
            v-model="user.cookie"
            v-validate="'required|regex:/__client_id/'"
            messages="自己的正确Cookie"
            label="Cookie"
            required
          />
          <v-btn
            block
            color="blue lighten-1"
            :disabled="!valid"
            @click="submit"
          >
            提交
          </v-btn>
        </v-form>
        <v-text>
          暂时不支持自动登陆洛谷，需要提交Cookie进行登陆
        </v-text>
        <v-form style="margin-top: 5rem">
          <v-text-field
            label="用户名或邮箱"
            disabled
            required
          />
          <v-text-field
            label="密码"
            disabled
            required
          />
          <v-text-field
            label="验证码"
            disabled
            required
          />
          <!--<v-img-->
          <!--width="64"-->
          <!--height="30"-->
          <!--:src="imgUrl"-->
          <!--@click="imgUrl = imgUrl + '?' + Math.random()"-->
          <!--/>-->
          <v-btn
            disabled
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

export default {
  $_veeValidate: {
    validator: 'new'
  },

  name: 'Luogu',

  data () {
    return {
      user: {
        username: '',
        password: '',
        cookie: '',
        verify: ''
      }
      // imgUrl: 'http://localhost:3011/https://www.luogu.org/download/captcha'
    }
  },

  computed: {
    valid () {
      return /__client_id/.test(this.user.cookie)
    }
  },

  methods: {
    async submit () {
      axios.post('/api/luogu/login', this.user).then(res => {
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
