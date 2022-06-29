import Controls from "./controls.js";
import Timer from "./timer.js";
import Sound from "./sounds.js"
import { settings } from "./settings.js"

const {
  buttonPlay,
  buttonPause,
  buttonConfig,
  buttonStop,
  buttonSoundOn,
  buttonSoundOff,
  minutesDisplay,
  secondsDisplay
} = settings

const sound = Sound()

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
  sound.pressButton()
});

buttonPause.addEventListener("click", function () {
  controls.pause();
  timer.hold();
  sound.pressButton()
});

buttonStop.addEventListener("click", function () {
  controls.reset();
  timer.reset();
  sound.pressButton()
});

buttonSoundOn.addEventListener("click", function () {
  buttonSoundOn.classList.add("hidden");
  buttonSoundOff.classList.remove("hidden");
  sound.backgroundSoundOn()
  sound.backgroundSoundLoop()
});

buttonSoundOff.addEventListener("click", function () {
  buttonSoundOff.classList.add("hidden");
  buttonSoundOn.classList.remove("hidden");
  sound.backgrounSoundOff()
});

buttonConfig.addEventListener("click", function () {
  sound.pressButton()
  let newMinutes = controls.getMinutes();

  if (!newMinutes) {
    timer.reset();
    return;
  }

  timer.updateDisplay(newMinutes, 0);
  timer.updateMinutes(newMinutes);
});