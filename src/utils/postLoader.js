import requireContents from './requireContents'
import PostView from '@/views/Post.vue'

function loadPosts (
  filesPath = require('../../config').paths.posts,
  path = '/posts',
  postView = PostView
) {
  const markdowns = requireContents(filesPath)
  return [
    ...markdowns.map(t => ({
      name: t.key,
      path: `${path}/${t.key}`,
      component: postView,
      props: {
        content: t.value.toString()
      }
    }))
  ]
}

export { loadPosts }
export default loadPosts
