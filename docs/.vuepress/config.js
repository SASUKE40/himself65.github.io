const HOST = 'https://www.himself65.com'
const feed_options = {
  canonical_base: HOST,
  posts_directories: ['/_posts/']
}

module.exports = {
  theme: 'vuepress-theme-blog-enhance',
  title: '扩散性百万甜面包',
  description: '个人主页，随便写写',
  themeConfig: {
    nav: [
      {
        text: '主页',
        link: '/'
      },
      {
        text: '订阅RSS',
        link: `${HOST}/rss.xml`,
        target: '_blank'
      }
    ],
    footer: {
      contact: [
        {
          type: 'github',
          link: 'https://github.com/himself65'
        },
        {
          type: 'twitter',
          link: 'https://twitter.com/himself_65'
        }
      ]
    },
    directories: [
      {
        id: 'post',
        dirname: 'posts',
        path: '/',
        // layout: 'IndexPost', defaults to `Layout.vue`
        itemLayout: 'Post',
        itemPermalink: '/:year/:month/:day/:slug',
        pagination: {
          lengthPerPage: 5
        }
      }
    ]
  },
  plugins: [['vuepress-plugin-feed', feed_options]]
}
