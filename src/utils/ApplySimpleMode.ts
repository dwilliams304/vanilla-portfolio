import { UIState } from "../state/UIState";
import { simpleModeCSSTag, coolModeCSSTag } from "./constants";

function ApplySimpleMode(app: HTMLElement){
    app.classList.toggle(simpleModeCSSTag, UIState.simpleMode);
    app.classList.toggle(coolModeCSSTag, !UIState.simpleMode);
}


export {
    ApplySimpleMode
}