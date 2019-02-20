// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.
import MobMenu from './modules/mob_menu';
import VideoSwitch from './modules/video_switch';
import FormValid from './modules/form_valid';

(($) => {
  // When DOM is ready
  $(() => {
    MobMenu.menuOpen();
  });
  VideoSwitch.switch();
  FormValid.validate();
})(jQuery);
