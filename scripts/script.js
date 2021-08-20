const [red, green, blue] = [228, 230, 101]
const body = document.querySelector('.body')

window.addEventListener('scroll', () => {
  const y = 1 + (window.scrollY || window.pageYOffset) / 150
  const [r, g, b] = [red-y, green, blue].map(Math.round)
  body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
})