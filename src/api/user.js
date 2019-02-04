import axios from 'axios'

export const loginAPI = '/api/login'
export const userInfoAPI = '/api/user'

export function login (username, password) {
  return axios.post(loginAPI, {
    username: username,
    password: password
  }).then(null) // todo
}

export function getUserInfo (detail = false) {
  return axios.post(userInfoAPI, { detail })
    .then(res => {
      if (res.status === 200) {
        return res.data.data
      } else {
        return null
      }
    })
}
