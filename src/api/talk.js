import axios from 'axios'

export const talksAPI = '/api/talks'

export async function getTalks (page = 0) {
  return axios.get(talksAPI, { data: { page } }).then(res => {
    if (res.status === 200) {
      return res.data.data
    } else {
      return null
    }
  })
}
