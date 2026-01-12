export function ApplyPrimaryColor(app: HTMLElement, color: string) {
    app.style.setProperty("--primaryColor", color);
}

export function ApplyTextColor(app: HTMLElement, color: string){
    app.style.setProperty("--textColor", color);
}

export function ApplyBackgroundColor(app: HTMLElement, color: string){
    app.style.setProperty("--backgroundColor", color);
}

export function ApplyColor(app: HTMLElement, propertyName: string, color: string){
    app.style.setProperty(propertyName, color);
}