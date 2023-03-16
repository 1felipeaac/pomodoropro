const btnPlus = document.querySelector("#button-plus")
const btnPlusSvg = btnPlus.querySelector("svg")
const btnPlusSvgPath = btnPlusSvg.querySelector("path")

const btnMinun = document.querySelector("#button-minun")
const btnMinunSvg = btnMinun.querySelector("svg")
const btnMinunSvgPath = btnMinunSvg.querySelector("path")

const btnPlay = document.querySelector("#button-play")
const btnPlaySvg = btnPlay.querySelector("svg")
const btnPlaySvgPath = btnPlaySvg.querySelector("path")

const btnStop = document.querySelector("#button-stop")
const btnStopSvg = btnStop.querySelector("svg")
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
