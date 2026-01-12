import { UIState } from "../state/UIState";

const simpleModeCSSTag = "simple-mode";
const coolModeCSSTag = "cool-mode";

export function ApplySimpleMode(app: HTMLElement){
    app.classList.toggle(simpleModeCSSTag, UIState.simpleMode);
    app.classList.toggle(coolModeCSSTag, !UIState.simpleMode);
}