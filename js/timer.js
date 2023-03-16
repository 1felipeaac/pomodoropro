import { checkedFalse, bgAudio } from "./ambientSounds.js"
import { Selectors } from "./selectors.js"
import Sound from "./sounds.js"
import { clickButtonMinun, clickButtonMinunFalse, clickButtonPlay, clickButtonPlus, clickButtonStop } from "./svg_path.js"

const finishTimerSound = Sound()

const play = Selectors.play
const stop = Selectors.stop
const addMinutes = Selectors.addMinutes
const removeMinutes = Selectors.removeMinutes
const buttonsSounds = Selectors.buttonsSounds
const secondsDisplay = Selectors.secondsDisplay
const minutesDisplay = Selectors.minutesDisplay

let setMinutes, setSeconds, intervalTimer
let setTimer = 0

buttonsPointerEventsNone()

function buttonsPointerEventsNone(){
    stop.style.pointerEvents = "none"
    addMinutes.style.pointerEvents = "none"
    removeMinutes.style.pointerEvents = "none"
    buttonsSounds.style.pointerEvents = "none"
}
function buttonsPointerEventsAll(){
    stop.style.pointerEvents = "all"
    addMinutes.style.pointerEvents = "all"
    removeMinutes.style.pointerEvents = "all"
    buttonsSounds.style.pointerEvents = "all"
}
function timerDisplayOff(){
    minutesDisplay.style.pointerEvents = "all"
    secondsDisplay.style.pointerEvents = "all"
    secondsDisplay.style.filter = "opacity(0.5)"
    minutesDisplay.style.filter = "opacity(0.5)"
}
function timerDisplayOn(){
    minutesDisplay.style.pointerEvents = "none"
    secondsDisplay.style.pointerEvents = "none"
}
function setTimerDisplay(display, component){
    display.innerText = String(component).padStart(2, "0")
    display.style.filter = "opacity(1)"
}
function countDown(){

    if(setMinutes != undefined && setSeconds != undefined){

        clickButtonPlay()
   
        timerDisplayOn()
        
        buttonsPointerEventsAll()

        setTimer  = setMinutes * 60 + setSeconds
        let interval = 1000

        let getMinutes, getSeconds
        
        intervalTimer = setInterval(() => {

            getMinutes = parseInt(setTimer / 60, 10)
            getSeconds = parseInt(setTimer % 60, 10)

            minutesDisplay.textContent = String(getMinutes).padStart(2,"0")
            secondsDisplay.textContent = String(getSeconds).padStart(2,"0")

            if(--setTimer < 0){
                finishTimer()
                finishTimerSound.timeEnd()
            }

        }, interval);
    }
}
function finishTimer(){
    timerDisplayOff()
    buttonsPointerEventsNone()
    bgAudio.pauseAllSound()
    setSeconds = undefined
    setMinutes = undefined
    checkedFalse()
    clearInterval(intervalTimer)
}
function inputTimer(){
    secondsDisplay.addEventListener("click", function(){
        setSeconds = Number(prompt("Digite os segundos"))
        setTimerDisplay(secondsDisplay, setSeconds)
        
    })
    Selectors.minutesDisplay.addEventListener("click", function(){
        setMinutes = Number(prompt("Digite os minutos"))
        setTimerDisplay(Selectors.minutesDisplay, setMinutes)
    })
}
function buttonsFunctionalitys(){
    stop.addEventListener("click", function(){
        finishTimer()
        clickButtonStop()
        minutesDisplay.textContent = "00"
        secondsDisplay.textContent = "00"
    })
    
    addMinutes.addEventListener("click", function(){
        setTimer = setTimer + 300
        clickButtonPlus()
    })
    
    removeMinutes.addEventListener("click", function(){
        if(setTimer > 300){
            setTimer = setTimer - 300
            clickButtonMinun()
        }else{
            clickButtonMinunFalse()
        }
    })
    
    play.addEventListener("click", countDown)
}

export{inputTimer, buttonsFunctionalitys}
