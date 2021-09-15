//Slider ----------------------
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
