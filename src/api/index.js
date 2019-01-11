import axios from 'axios'

export const loginUrl = '/api/login'

export async function login (username, password) {
  return axios.post(loginUrl, {
    username: username,
    password: password
  })
}
