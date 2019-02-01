import postLoader from '@/utils/postLoader'
import { mount } from '@vue/test-utils'
import { resolve } from 'path'

describe('postLoader module run success', function () {
  describe('init loadPost success', () => {
    const filesPath = resolve(__dirname, '__mock__')
    let routers = null

    beforeEach(() => {
      routers = postLoader(filesPath)
    })

    it('should run success', () => {
      routers.forEach(router => {
        const component = router.component
        expect(typeof router.props.content).toBe('string')
        const wrapper = mount(component, {
          propsData: {
            content: router.props.content
          }
        })
        expect(wrapper.isVueInstance()).toBeTruthy()
        expect(wrapper.props('content')).toBeDefined()
        expect(typeof wrapper.props('content')).toBe('string')
      })
    })
  })
})
