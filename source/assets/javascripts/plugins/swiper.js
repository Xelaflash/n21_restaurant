import Swiper from 'swiper';

const mySwiper = new Swiper('.swiper-container', {
  loop: true,
  slidersPerView: 1,
  speed: 2500,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  autoplay: {
    delay: 5000,
  },
  disableOnInteraction: false,
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

export { mySwiper };
