import { inputTimer, buttonsFunctionalitys } from "./timer.js"
import Mode from "./modes.js"

const theme = Mode()

export const Events = {
    click(){
        inputTimer()
        buttonsFunctionalitys()
        theme.eventClick()
    }
}
