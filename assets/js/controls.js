export default function Controls({
  buttonPlay,
  buttonPause,
  buttonConfig,
  buttonStop
}) {

  function play() {
    buttonPlay.classList.add("hidden");
    buttonPause.classList.remove("hidden");
    buttonConfig.classList.add("hidden");
    buttonStop.classList.remove("hidden");
  }

  function pause() {
    buttonPlay.classList.remove("hidden");
    buttonPause.classList.add("hidden");
  }

  function reset() {
    buttonPlay.classList.remove("hidden");
    buttonPause.classList.add("hidden");
    buttonConfig.classList.remove("hidden");
    buttonStop.classList.add("hidden");
  }

  function getMinutes() {
    let newMinutes = prompt("Quantos minutos?");
    if (!newMinutes) {
      return false;
    }

    return newMinutes;
  }

  return {
    reset,
    play,
    pause,
    getMinutes,
  };
}
