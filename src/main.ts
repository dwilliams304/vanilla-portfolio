import "./styles/reset.css";
import "./styles/index.css";
import "./styles/components.css";
import "./styles/sections.css";

import { Component, RenderComponent } from "./components/RenderComponent";



let isSimpleMode = true;
const simpleModeCSSTag = "simple-mode";
const coolModeCSSTag = "cool-mode";


const root = document.getElementById("root")!;


const CreateButton = (): HTMLElement => {
    const funButton = document.createElement("button");
    funButton.classList.add("primary-btn", "mt-10");
    funButton.textContent = "Switch Display";
    funButton.addEventListener("click", () => SwitchDisplayMode());

    return funButton;
}


const appComponent = new Component(
    document.createElement("div"),
    `
        <h1>Wow what a cool app!</h1>
    `,
    { 
        parent: root,
        children: [
            RenderComponent(new Component(
                document.createElement("main")
            )), 
            RenderComponent(new Component(
                document.createElement("address"),
                undefined,
                undefined,
                undefined,
                undefined,
                () => console.log("We just rendered a test children component within the appComponent")
            )),
            CreateButton()
        ]
    },
    

)





const SwitchDisplayMode = (): void => {
    isSimpleMode = !isSimpleMode;
    app.classList.remove(`${isSimpleMode ? coolModeCSSTag : simpleModeCSSTag}`);
    app.classList.add(`${isSimpleMode ? simpleModeCSSTag : coolModeCSSTag}`)
    RenderComponent(appComponent);
}


const app = RenderComponent(appComponent);

SwitchDisplayMode();