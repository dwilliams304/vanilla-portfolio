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
const app = RenderComponent({
    className: "app cool-mode"
});

root.append(app);


const switchDisplayModeButton = RenderComponent({
    element: document.createElement("button"),
    content: "Switch Modes",
    className: "primary-btn",
    onClick: () => UpdateApp()
})


const [aboutData, projectData] = FetchSiteData();

const {sections, updateAboutFn, updateProjectFn} = RenderAllSections(aboutData, projectData);

export {updateAboutFn, updateProjectFn};

const layout = RenderLayout(app, switchDisplayModeButton);


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
    switchDisplayModeButton.textContent = isSimpleMode ? "See Cool Fancy Mode" : "See Simple Mode";
    document.querySelector(".brevity-controls")?.classList.toggle("hidden", isSimpleMode);
    
    root.innerHTML = "";
    RenderComponent(appComponent);
}


UpdateApp();