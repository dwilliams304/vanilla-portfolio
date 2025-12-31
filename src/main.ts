import "./styles/reset.css";
import "./styles/index.css";
import "./styles/components.css";
import "./styles/sections.css";

import { RenderComponent, type IComponent } from "./components/RenderComponent";

import { aboutData } from "./data/aboutData";
import { DummyProjectData } from "./data/projectData";
import { RenderAllSections } from "./sections";
import { RenderLayout } from "./components";

let isSimpleMode = true;
const simpleModeCSSTag = "simple-mode";
const coolModeCSSTag = "cool-mode";




const root = RenderComponent({
    id: "root",
    elementConnection: {
        parent: document.getElementsByTagName("body")[0]
    }
})



const switchDisplayModeButton = RenderComponent({
    rootElement: document.createElement("button"),
    content: "Switch Modes",
    className: "primary-btn",
    onClick: () => UpdateApp()
})


const sections = RenderAllSections(aboutData, DummyProjectData);




const UpdateApp = (): void => {
    isSimpleMode = !isSimpleMode;

    const appComponent: IComponent = 
    {
        elementConnection: 
        { 
            parent: root,
            children: [
                switchDisplayModeButton,
            ]
        },
        className: `app ${isSimpleMode ? simpleModeCSSTag : coolModeCSSTag}`
    }
    
    sections.forEach(section => {
        appComponent.elementConnection?.children?.push(section);
    })

    root.innerHTML = "";
    RenderComponent(appComponent);
}


UpdateApp();

RenderLayout(root);