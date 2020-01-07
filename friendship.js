const friendship = []
const push = (name, url, image = '', description = '') =>
  friendship.push({ name, url, image, description })

push('ice1000', 'https://ice1000.org', 'ice1000.jpg')
push('Edward Elric', 'https://sasuke40.github.io/', 'sasuke.jpg')
push('DIYgod', 'https://diygod.me/', 'DIYgod.jpg')
push('太狼', 'https://lynvv.xyz', 'lynvv.jpg')

module.exports = friendship
