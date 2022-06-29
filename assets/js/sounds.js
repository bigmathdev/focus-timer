export default function() {

    const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
    const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
    const bgAudio = new Audio("./assets/Change your World.wav")

    function pressButton() {
        buttonPressAudio.play()
    }

    function timeFinished() {
        kitchenTimer.play()
    }

    function backgroundSoundOn() {
        bgAudio.play()
    }

    function backgrounSoundOff() {
        bgAudio.pause()
    }

    function backgroundSoundLoop() {
        bgAudio.loop = true
    }

    return {
        pressButton,
        timeFinished,
        backgroundSoundOn,
        backgrounSoundOff,
        backgroundSoundLoop
    }
} 