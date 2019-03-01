/* jshint esversion: 6 */
const VideoSwitch = {

  switch() {
    const heroSection = $('.hero');
    const playBtn = heroSection.find('.play-button');
    const stopBtn = heroSection.find('.stop-button');
    const video = heroSection.find('.video-hero').get(0);

    function playVideo() {
      video.play();
      video.style.opacity = 1;
    }

    function stopVideo() {
      video.pause();
      video.style.opacity = 0;
    }

    playBtn.click(() => {
      playBtn.toggleClass('hide');
      stopBtn.toggleClass('hide');
      heroSection.removeClass('hero-onpause');
      playVideo();
    });

    stopBtn.click(() => {
      stopBtn.toggleClass('hide');
      playBtn.toggleClass('hide');
      heroSection.addClass('hero-onpause');
      stopVideo();
    });
  },
};

export default VideoSwitch;
