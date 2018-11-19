function clickAndUpdate(id, text) {
  const $el = document.getElementById(id)
  $el.addEventListener('click', e => {
    e.target.textContent = text
  })
}

document.addEventListener('DOMContentLoaded', () => {
  clickAndUpdate('en-name', 'himself65')
  clickAndUpdate('cn-name', '扩散性百万甜面包')
  clickAndUpdate('email', 'himself6565@gmail.com')
})

