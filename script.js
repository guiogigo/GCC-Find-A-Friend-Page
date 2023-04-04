const btnOpen = document.querySelector('#menuOpen')
const btnClose = document.querySelector('#menuClose')
const menu = document.querySelector('#navigation')

btnOpen.addEventListener('click', menuToggle)
btnClose.addEventListener('click', menuToggle)


function menuToggle() {
  menu.classList.toggle('opened')
  btnClose.classList.toggle('hide')
  btnOpen.classList.toggle('hide')
}

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  hiddenClass: 'swiper-button-hidden',
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  //paginação
  pagination: {
    el: '.swiper-pagination',
  },
});