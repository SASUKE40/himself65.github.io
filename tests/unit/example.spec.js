import Header from '@/components/Header.vue'

describe('Header.vue', () => {
  it('have data', () => {
    expect(typeof Header.data).toBe('function')
    const data = Header.data()
    expect(data.items).toBeDefined()
    expect(data.logo).toBeDefined()
  })
})
