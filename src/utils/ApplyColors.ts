function ApplyPrimaryColor(app: HTMLElement, color: string) {
    app.style.setProperty("--primaryColor", color);
}

function ApplyTextColor(app: HTMLElement, color: string){
    app.style.setProperty("--textColor", color);
}

function ApplyBackgroundColor(app: HTMLElement, color: string){
    app.style.setProperty("--backgroundColor", color);
}

function ApplyColor(app: HTMLElement, propertyName: string, color: string){
    app.style.setProperty(propertyName, color);
}


export {
    ApplyPrimaryColor,
    ApplyTextColor,
    ApplyBackgroundColor,
    ApplyColor
}