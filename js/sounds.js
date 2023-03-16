export default function(){
    const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
    const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
    const rain = new Audio("https://github.com/1felipeaac/pomodoropro/blob/main/rain.mp3?raw=true")
    const forest = new Audio("https://github.com/1felipeaac/pomodoropro/blob/main/forest.mp3?raw=true")
    const firePlace = new Audio("https://github.com/1felipeaac/pomodoropro/blob/main/fireplace.mp3?raw=true")
    const coffeeShop = new Audio("https://github.com/1felipeaac/pomodoropro/blob/main/coffeeShop.mp3?raw=true")

    function pressButton(){
        buttonPressAudio.play()
    }
    function timeEnd(){
        kitchenTimer.play()
    }

    const playList = [rain, forest, firePlace, coffeeShop]

    function playSound(theme){
        pressButton()
        checkedPlayed()
        theme.play()
        theme.loop = true
    }
    
    function checkedPlayed(){
        for(let play in playList){
            const list = playList[play]
            if(!list.paused){
               list.pause()
            }
        }
    }

    function pauseAllSound(){
        for (let pause in playList) {
            const list = playList[pause]
            list.pause()
        }
    }

    return{
        timeEnd,
        pressButton,
        playSound,
        pauseAllSound,
        rain,
        forest,
        firePlace,
        coffeeShop,
    }    
}
