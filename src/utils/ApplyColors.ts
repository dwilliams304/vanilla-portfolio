import type { ColorProperties } from "../types";
import { backgroundColorProperty, 
    primaryColorProperty, 
    secondaryColorProperty, 
    textColorProperty } from "./constants";

    

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

function ApplyAllColors(app: HTMLElement, colors: ColorProperties){
    app.style.setProperty(primaryColorProperty, colors.primaryColor);
    app.style.setProperty(secondaryColorProperty, colors.secondaryColor);
    app.style.setProperty(textColorProperty, colors.textColor);
    app.style.setProperty(backgroundColorProperty, colors.backgroundColor)
}

export {
    ApplyPrimaryColor,
    ApplySecondaryColor,
    ApplyTextColor,
    ApplyBackgroundColor,
    ApplyColor,
    ApplyAllColors
}