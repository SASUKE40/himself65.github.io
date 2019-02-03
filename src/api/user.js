import axios from 'axios'

export const loginAPI = '/api/login'

export function login (username, password) {
  return axios.post(loginAPI, {
    username: username,
    password: password
  }).then(null) // todo
}
