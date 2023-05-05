const btn = document.querySelector('.nav-mobile-menu-btn');
const menu = document.querySelector('.nav-mobile-menu-right');
const bg = document.querySelector('.nav-mobile-menu');
const close = document.querySelector('.nav-mobile-menu-right-nav-close')

btn.addEventListener('click', () => {
  bg.classList.add('show-bg');
  menu.classList.add('show');
})

close.addEventListener('click', () => {
  bg.classList.remove('show-bg');
  menu.classList.remove('show');
})