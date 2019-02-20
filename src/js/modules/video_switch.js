/* jshint esversion: 6 */
const VideoSwitch = {

  switch() {
    const playBtn = $('.play-button');
    const stopBtn = $('.stop-button');
    const heroSection = $('.hero');

    playBtn.click(() => {
      playBtn.toggleClass('hide');
      stopBtn.toggleClass('hide');
      heroSection.removeClass('hero-onpause');
    });

    stopBtn.click(() => {
      stopBtn.toggleClass('hide');
      playBtn.toggleClass('hide');
      heroSection.addClass('hero-onpause');
    });
  },
};

export default VideoSwitch;
