import "./styles/reset.css";

import "./styles/index.css";
import "./styles/layout.css";
import "./styles/sections.css";

import "./styles/simplemode_root.css";
import "./styles/simplemode_layout.css";
import "./styles/simplemode_sections.css";

import { RenderComponent, type IComponent } from "./utils/RenderComponent";

import { RenderAllSections } from "./sections";
import { RenderLayout } from "./layout";
import { FetchSiteData } from "./data/siteData";

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

const [aboutData, projectData] = FetchSiteData();

const sections = RenderAllSections(aboutData, projectData);

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
    
    appComponent.elementConnection?.children?.push(sections);
    
    root.innerHTML = "";
    RenderComponent(appComponent);
}


UpdateApp();