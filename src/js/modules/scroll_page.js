const ScrollPage = {
  scrollBottom() {
    const scrollBtn = $('.scroll-button');

    scrollBtn.click(() => {
      if ($(window).width() < 1200) {
        $('html, body').animate({ scrollTop: 600 }, 'slow');
      } else {
        $('html, body').animate({ scrollTop: 772 }, 'slow');
      }
    });
  },
};

export default ScrollPage;
