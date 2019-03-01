const ScrollPage = {
  scrollBottom() {
    const scrollBtn = $('.scroll-button');

    scrollBtn.click(() => {
      $('html, body').animate({ scrollTop: $(window).height() }, 'slow');
    });
  },
};

export default ScrollPage;
