/* jshint esversion: 6 */
const Swiper = require('swiper');

const SwiperSlide = {
  swiperSlide() {
    const swiper = new Swiper('.swiper-container', {
      loop: true,
      slidesPerView: 4,
      spaceBetween: 0,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        1300: {
          slidesPerView: 3,
        },
      },
    });
  },
};

export default SwiperSlide;
