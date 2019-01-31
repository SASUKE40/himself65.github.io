import { requireContents } from '@/utils/requireContents'
import { resolve } from 'path'

describe('requireIndex module run success', function () {
  it('should throw error', () => {
    expect(() => requireContents()).toThrowError(/nullable/)
    expect(() => requireContents(null)).toThrowError(/nullable/)
    expect(() => requireContents(undefined)).toThrowError(/nullable/)
    expect(() => requireContents('')).toThrowError()
  })

  it('should load files success', () => {
    const testDir = resolve(__dirname, '__mock__')
    const mds = requireContents(testDir)
    expect(mds[0].value.toString()).toMatch(/README.md/)
  })
})
