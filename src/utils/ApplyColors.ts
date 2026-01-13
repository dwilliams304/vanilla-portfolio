import { backgroundColorProperty, primaryColorProperty, secondaryColorProperty, textColorProperty } from "./constants";

function ApplyPrimaryColor(app: HTMLElement, color: string) {
    app.style.setProperty(primaryColorProperty, color);
}

function ApplySecondaryColor(app: HTMLElement, color: string) {
    app.style.setProperty(secondaryColorProperty, color);
}

function ApplyTextColor(app: HTMLElement, color: string){
    app.style.setProperty(textColorProperty, color);
}

function ApplyBackgroundColor(app: HTMLElement, color: string){
    app.style.setProperty(backgroundColorProperty, color);
}

function ApplyColor(app: HTMLElement, propertyName: string, color: string){
    app.style.setProperty(propertyName, color);
}


export {
    ApplyPrimaryColor,
    ApplySecondaryColor,
    ApplyTextColor,
    ApplyBackgroundColor,
    ApplyColor
}