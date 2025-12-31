import "./styles/reset.css";
import "./styles/index.css";
import "./styles/components.css";
import "./styles/sections.css";

import { RenderComponent, type IComponent } from "./components/RenderComponent";



let isSimpleMode = true;
const simpleModeCSSTag = "simple-mode";
const coolModeCSSTag = "cool-mode";


const root = document.getElementById("root")!;



const switchDisplayModeButton = RenderComponent({
    rootElement: document.createElement("button"),
    content: "Switch Modes",
    className: "primary-btn",
    key: "switch-mode-btn",
    onClick: () => SwitchDisplayMode()
})


const appComponent: IComponent = 
{
    rootElement: document.createElement("div"),
    content: 
    `
        <h1>Wow what a cool app!</h1>
    `,
    elementConnection: 
    { 
        parent: root,
        children: [
            switchDisplayModeButton
        ]
    }
}




const SwitchDisplayMode = (): void => {
    isSimpleMode = !isSimpleMode;
    var app = RenderComponent(appComponent);
    app.classList.remove(`${isSimpleMode ? coolModeCSSTag : simpleModeCSSTag}`);
    app.classList.add(`${isSimpleMode ? simpleModeCSSTag : coolModeCSSTag}`)
}


SwitchDisplayMode();