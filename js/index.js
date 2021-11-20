"use strict";

(function () {
  var slider = new IdealImageSlider.Slider({
    selector: "#js-slider",
    height: 300,
    interval: 5000,
    transitionDuration: 300,
  });

  slider.start();
})();
