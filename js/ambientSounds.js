import Sound from './sounds.js'

const bgAudio = Sound()

const btnSelector = document.querySelectorAll(".btn-select");

function ambientSound(){
    for(const select of btnSelector){
        select.addEventListener("change", bgSound)
    }
}

function bgSound(e){

    if(this.checked){
        switch (this.id) {
            case 'forest':
                bgAudio.playSound(bgAudio.forest)    
                break;
            case 'rain':
                bgAudio.playSound(bgAudio.rain)
                break;
            case 'coffeeShop':
                bgAudio.playSound(bgAudio.coffeeShop)
                break;
            case 'firePlace':
                bgAudio.playSound(bgAudio.firePlace)
                break;
            default:
                break;
        }
    }
    
}

function checkedFalse(){
    for (let select of btnSelector){
        if(select.checked)
            select.checked = false
    }
}

export { ambientSound, checkedFalse, bgAudio }