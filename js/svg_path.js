import Sound from './sounds.js'
import {Selectors} from './selectors.js'

const buttonSound = Sound()


const btnPlusSvg = Selectors.btnPlus.querySelector("svg")
const btnPlusSvgPath = btnPlusSvg.querySelector("path")

const btnMinunSvg = Selectors.btnMinun.querySelector("svg")
const btnMinunSvgPath = btnMinunSvg.querySelector("path")

const btnPlaySvg = Selectors.btnPlay.querySelector("svg")
const btnPlaySvgPath = btnPlaySvg.querySelector("path")

const btnStopSvg = Selectors.btnStop.querySelector("svg")
const btnStopSvgPath = btnStopSvg.querySelector("path")


function clickButtonPlus(){
    eventClickButtons(btnPlusSvgPath)
}

function clickButtonMinun(){
    eventClickButtons(btnMinunSvgPath)
}

function clickButtonPlay(){
    eventClickButtons(btnPlaySvgPath)
}

function clickButtonStop(){
    eventClickButtons(btnStopSvgPath)
}

function clickButtonMinunFalse(){
    buttonSound.pressButton()
    let cont = 5
    const click = setInterval(()=>{
        btnMinunSvgPath.setAttribute("fill", "#ee3a1f")
        if(--cont < 0){
            btnMinunSvgPath.setAttribute("fill", "#323238")
            clearInterval(click)
        }
    },50)
}

function eventClickButtons(button){
    buttonSound.pressButton()
    let cont = 5
    const click = setInterval(()=>{
        button.setAttribute("fill", "#02799D")
        if(--cont < 0){
            button.setAttribute("fill", "#323238")
            clearInterval(click)
        }
    },40)
}

export {clickButtonPlay, clickButtonStop ,clickButtonPlus, clickButtonMinun, clickButtonMinunFalse}
