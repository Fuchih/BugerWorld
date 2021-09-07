// navigation Bar transform
const bar = document.querySelector('.bar-container')
const nav = document.querySelector('nav')
const bodyContainer = document.querySelector('.body-container')
let i = 1

bar.addEventListener('click', function () {
  this.classList.toggle('change')
  if (i === 1) {
    nav.style.transform = 'translateX(0)'
    bodyContainer.style.transform = 'translateX(30%)'
    i = 0
  } else {
    nav.style.transform = 'translateX(-200%)'
    bodyContainer.style.transform = 'translateX(0)'
    i = 1
  }
})

//Slider
const swiper = new Swiper('.mySwiper', {
  autoplay: {
    delay: 2000,
    disableOnInteraction: true
  },
  speed: 1000,
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
})
