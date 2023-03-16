import { checkedFalse, bgAudio } from "./ambientSounds.js"
import { clickButtonMinun, clickButtonMinunFalse, clickButtonPlay, clickButtonPlus, clickButtonStop } from "./svg_path.js"

let minutesDisplay = document.querySelector("#minutes")
let secondsDisplay = document.querySelector("#seconds")

const play = document.querySelector("#button-play")
const stop = document.querySelector("#button-stop")
const addMinutes = document.querySelector("#button-plus")
const removeMinutes = document.querySelector("#button-minun")

const buttonsSounds = document.querySelector("#sounds")

let setMinutes, setSeconds, intervalTimer
let setTimer = 0


function countDown(){

    if(setMinutes != undefined && setSeconds != undefined){
        clickButtonPlay()
   
        minutesDisplay.style.pointerEvents = "none"
        secondsDisplay.style.pointerEvents = "none"

        play.style.pointerEvents = "none"

        buttonsSounds.style.pointerEvents = "all"

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
            }

        }, interval);
    }
}

function finishTimer(){
    minutesDisplay.style.pointerEvents = "all"
    secondsDisplay.style.pointerEvents = "all"
    minutesDisplay.style.opacity = "0.5"
    secondsDisplay.style.opacity = "0.5"
    buttonsSounds.style.pointerEvents = "none"
    play.style.pointerEvents = "none"

    bgAudio.pauseAllSound()
    checkedFalse()
    clearInterval(intervalTimer)
}

function inputTimer(){
    secondsDisplay.addEventListener("click", function(){
        setSeconds = Number(prompt("Digite os segundos"))
        secondsDisplay.innerText = String(setSeconds).padStart(2,"0")
        secondsDisplay.style.filter = "opacity(1)"
    })
    minutesDisplay.addEventListener("click", function(){
        setMinutes = Number(prompt("Digite os minutos"))
        minutesDisplay.innerText = String(setMinutes).padStart(2, "0")
        minutesDisplay.style.filter = "opacity(1)"
    })
}

function buttonsFunctionalitys(){
    stop.addEventListener("click", function(){
        finishTimer()
        clickButtonStop()
        minutesDisplay.textContent = "00"
        secondsDisplay.textContent = "00"
        secondsDisplay.style.filter = "opacity(1)"
        minutesDisplay.style.filter = "opacity(1)"
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
