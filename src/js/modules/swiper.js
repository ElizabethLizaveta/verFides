/* jshint esversion: 6 */
const Swiper = require('swiper');

const SwiperSlide = {
  swiperSlide() {
    const swiper = new Swiper('.swiper-container', {
      loop: true,
      slidesPerView: 4,
      spaceBetween: 57,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      obserer: true,
      breakpoints: {
        1299: {
          slidesPerView: 3,
        },
        979: {
          direction: 'vertical',
          slidesPerView: 'all',
          spaceBetween: 0,
          navigation: false,
        },
      },
    });

    $(window).on('resize', () => {
      const ww = $(window).width();
      if (ww >= 980) {
        swiper.params.slidesPerView = 3;
        swiper.params.direction = 'horizontal';
      }
      if (ww >= 1300) {
        swiper.params.slidesPerView = 4;
        swiper.params.direction = 'horizontal';
      }
      swiper.update();
    });
    $(window).trigger('resize');
  },
};

export default SwiperSlide;
