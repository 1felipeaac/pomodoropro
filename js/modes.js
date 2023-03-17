import {Selectors} from './selectors.js'
import { theme } from './svg_path.js'

export default function(){
    const sun = Selectors.sun
    const moon = Selectors.moon
    const body = Selectors.body

    function dark(){
        toggleMode("#C4C4CC")
    }

    function light(){
        toggleMode("#323238")
    }

    function toggleMode(color){
        body.classList.toggle("darkMode")
        sun.classList.toggle("hide")
        moon.classList.toggle("hide")
        theme(color)
    }

    function eventClick(){
        sun.addEventListener("click", function(){
            dark()
        })
    
        moon.addEventListener("click", function(){
            light()
        })
    }

    return{
        eventClick
    }

}

