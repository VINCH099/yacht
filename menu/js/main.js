const menu = document.querySelector('.menu')
const burger = document.querySelector('.menu__burger')
const logo = document.querySelector('.logo')
const lock = document.querySelector('.lock')
const overlay = document.querySelector('.menu--overlay')

const body = document.querySelector('html')

if (menu && burger) {
  burger.addEventListener('click', () => {
    menu.classList.toggle('menu--visible')
    burger.classList.toggle('menu--visible')
    overlay.classList.toggle('menu--visible')
    body.classList.toggle('lock')
  })
}

overlay.addEventListener('click', (e) => {
  if (e.target.classList.contains('menu--visible')) {
    menu.classList.remove('menu--visible')
    burger.classList.remove('menu--visible')
    overlay.classList.toggle('menu--visible')
    body.classList.remove('lock')
  }
})

menu.querySelectorAll('.menu a').forEach((link) => {
  link.addEventListener('click', () => {
    if (menu.classList.contains('menu--visible')) {
      menu.classList.remove('menu--visible')
      burger.classList.remove('menu--visible')
      overlay.classList.remove('menu--visible')
      body.classList.remove('lock')
    }
  })
})
