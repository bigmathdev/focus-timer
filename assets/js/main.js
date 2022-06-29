import Controls from "./controls.js";
import Timer from "./timer.js";
import { settings } from "./settings.js"

const {
  
} = settings

const controls = Controls({
  buttonPause,
  buttonConfig,
  buttonPlay,
  buttonStop,
});

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset
});

buttonPlay.addEventListener("click", function () {
  controls.play();
  timer.countdown();
});

buttonPause.addEventListener("click", function () {
  controls.pause();
  timer.hold();
});

buttonStop.addEventListener("click", function () {
  controls.reset();
  timer.reset();
});

buttonSoundOn.addEventListener("click", function () {
  buttonSoundOn.classList.add("hidden");
  buttonSoundOff.classList.remove("hidden");
});

buttonSoundOff.addEventListener("click", function () {
  buttonSoundOff.classList.add("hidden");
  buttonSoundOn.classList.remove("hidden");
});

buttonConfig.addEventListener("click", function () {
  let newMinutes = controls.getMinutes();

  if (!newMinutes) {
    timer.reset();
    return;
  }

  timer.updateDisplay(newMinutes, 0);
  timer.updateMinutes(newMinutes);
});