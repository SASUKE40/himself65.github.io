export const routers = [
  {
    path: '/articles/:id/edit',
    component: () => import('views/backstage/PostEdit.vue')
  }
]

export default routers
