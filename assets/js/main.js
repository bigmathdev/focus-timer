const buttomPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonConfig = document.querySelector('.config')
const buttonStop = document.querySelector('.stop')
const buttonSoundOn = document.querySelector('.sound-on')
const buttonSoundOff = document.querySelector('.sound-off')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
let minutes

function countdown() {
    setTimeout(function(){
        let seconds = Number(secondsDisplay.textContent)

        if( seconds <= 0 ) {
            seconds = 60
        }
        secondsDisplay.textContent = seconds - 1

        countdown()
    }, 1000)
}

buttomPlay.addEventListener('click', function() {
    buttomPlay.classList.add('hidden')
    buttonPause.classList.remove('hidden')
    buttonConfig.classList.add('hidden')
    buttonStop.classList.remove('hidden')

    countdown()
})

buttonPause.addEventListener('click', function() {
    buttomPlay.classList.remove('hidden')
    buttonPause.classList.add('hidden')
})

buttonStop.addEventListener('click', function() {
    buttomPlay.classList.remove('hidden')
    buttonPause.classList.add('hidden')
    buttonStop.classList.add('hidden')
    buttonConfig.classList.remove('hidden')
})

buttonSoundOn.addEventListener('click', function() {
    buttonSoundOn.classList.add('hidden')
    buttonSoundOff.classList.remove('hidden')
})

buttonSoundOff.addEventListener('click', function() {
    buttonSoundOff.classList.add('hidden')
    buttonSoundOn.classList.remove('hidden')
})

buttonConfig.addEventListener('click', function() {
    minutes = prompt('Quanto tempo você quer focar?')
    minutesDisplay.textContent = minutes
})