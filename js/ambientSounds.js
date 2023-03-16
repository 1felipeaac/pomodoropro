import Sound from './sounds.js'
import {Selectors} from './selectors.js'

const bgAudio = Sound()

function ambientSound(){
    for(const select of Selectors.btnSelector){
        select.addEventListener("change", bgSound)
    }
    for(const setVolume of Selectors.bgAudioVolume){
        setVolume.addEventListener("change", setBgSoundVolume)
    }
}

function bgSound(e){
    
    if(this.checked){
        switch (this.id) {
            case 'forest':
                setBgSound(bgAudio.forest, Selectors.volumeForest)
                break;
            case 'rain':
                setBgSound(bgAudio.rain, Selectors.volumeRain)
                break;
            case 'coffeeShop':
                setBgSound(bgAudio.coffeeShop, Selectors.volumeCoffeeShop)
                break;
            case 'firePlace':
                setBgSound(bgAudio.firePlace, Selectors.volumeFirePlace)
                break;
            default:
                break;
        }
    }

    function setBgSound(theme, themeVolume){
        bgAudio.playSound(theme)
        themeVolume.value = "0.5"
    }
    
}

function setBgSoundVolume(){
    switch(this.id){
        case 'volumeRain':
            bgAudio.rain.volume = Selectors.volumeRain.value
            break
        case 'volumeFirePlace':
            bgAudio.firePlace.volume = Selectors.volumeFirePlace.value
            break
        case 'volumeCoffeeShop':
            bgAudio.coffeeShop.volume = Selectors.volumeCoffeeShop.value
            break
        case 'volumeForest':
            bgAudio.forest.volume = Selectors.volumeForest.value
            break
        default:
            break;
    }
}

function checkedFalse(){
    for (let select of Selectors.btnSelector){
        if(select.checked)
            select.checked = false
    }
}

export { ambientSound, checkedFalse, bgAudio }
