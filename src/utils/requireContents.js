import { readdirSync, readFileSync } from 'fs'
import { resolve } from 'path'

export const regex = /.*(?=\..+)/

function requireContents (path) {
  if (!path) {
    throw Error(`param path is nullable`)
  }
  let files = {}
  try {
    files = readdirSync(path)
  } catch (e) {
    throw e
  }
  return files.map(file => {
    const filePath = resolve(path, file)
    return {
      key: regex.exec(file.toString())[0],
      value: readFileSync(filePath)
    }
  })
}

export { requireContents }

export default requireContents
