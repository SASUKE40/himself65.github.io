module.exports = {
  theme: '@vuepress/blog',
  themeConfig: {
    nav: [
      {
        text: '主页',
        link: '/'
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
          link: 'https://github.com/himself_65'
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
          lengthPerPage: 5,
        },
      },
    ],
  }
}
