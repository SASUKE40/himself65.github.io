import axios from './'
import dateFormat from 'dateformat'

export const articleAPI = '/api/article'

export async function submitArticle (title, content, isNew) {
  return axios.post(articleAPI, { title, content, isNew }).then(res => {
    if (res.status === 200) {
      return {
        message: `${isNew ? '新建' : '更新'}成功`
      }
    } else {
      return res.data
    }
  })
}

export function cacheArticle (title, content) {
  // todo
}

export const articlesAPI = '/api/articles'

export async function getArticles (page = 0) {
  return axios.get(articlesAPI, { params: { page } }).then(res => {
    if (res.status === 200) {
      return res.data.data.map(article => ({
        ...article,
        createdDate: dateFormat(article.createdDate, '于 yyyy-mm-dd h:MM')
      }))
    } else {
      return null
    }
  })
}

export async function getArticle (id) {
  if (!id) return null
  return axios.get(articleAPI, { params: { _id: id } }).then(res => {
    if (res.status === 200) {
      return res.data.data
    } else {
      console.err(res)
      return null
    }
  })
}
