import axios from './'
import dateFormat from 'dateformat'

export function submitArticle (title, content) {
  // todo
}

export function cacheArticle (title, content) {
  // todo
}

export const articlesAPI = '/api/articles'

export async function getArticles (page = 0) {
  return axios.get(articlesAPI, { data: { page } }).then(res => {
    console.log(res)
    const toUpper = ([first, ...rest]) => first.toUpperCase() + rest.join('')
    if (res.status === 200) {
      return res.data.data.map(article => ({
        ...article,
        author: toUpper(article.author),
        createdDate: dateFormat(article.createdDate, '于 yyyy-mm-dd h:MM')
      }))
    } else {
      return null
    }
  })
}
