import "./styles/reset.css";
import "./styles/index.css";
import "./styles/components.css";
import "./styles/sections.css";

import { RenderComponent, type IComponent } from "./utils/RenderComponent";

import { aboutData } from "./data/aboutData";
import { DummyProjectData } from "./data/projectData";
import { RenderAllSections } from "./sections";
import { RenderLayout } from "./layout";

let isSimpleMode = true;
const simpleModeCSSTag = "simple-mode";
const coolModeCSSTag = "cool-mode";


const root = document.getElementById("root")!;


const switchDisplayModeButton = RenderComponent({
    rootElement: document.createElement("button"),
    content: "Switch Modes",
    className: "primary-btn",
    onClick: () => UpdateApp()
})


const sections = RenderAllSections(aboutData, DummyProjectData);

const layout = RenderLayout(root, switchDisplayModeButton);


const UpdateApp = (): void => {
    isSimpleMode = !isSimpleMode;

    const appComponent: IComponent = 
    {
        elementConnection: 
        { 
            parent: root,
            children: []
        },
        className: `app ${isSimpleMode ? simpleModeCSSTag : coolModeCSSTag}`
    }
    
    layout.forEach(e => {
        appComponent.elementConnection?.children?.push(e);
    })

    sections.forEach(section => {
        appComponent.elementConnection?.children?.push(section);
    })

    root.innerHTML = "";
    RenderComponent(appComponent);
}


UpdateApp();