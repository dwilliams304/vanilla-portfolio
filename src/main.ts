import "./styles/reset.css";
import "./styles/index.css";
import "./styles/components.css";
import "./styles/sections.css";

import { RenderComponent, type IComponent } from "./components/RenderComponent";

import { aboutData } from "./data/aboutData";
import { DummyProjectData } from "./data/projectData";
import { RenderProjectsSection } from "./sections/Projects";

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

const aboutSection = RenderComponent({
    rootElement: document.createElement("section"),
    content: `
        <div class="about-card">
            <div class="about-card-content">
                <h2>${aboutData.h2}</h2>
                <h3>${aboutData.h3}</h3>
                <p>${aboutData.description}</p>
            </div>
            <div>
                <img 
                    src=${aboutData.img} 
                    class="img-coin"
                />
            </div>
        </div>
    `
});


const projectsSection = RenderProjectsSection(DummyProjectData);



const UpdateApp = (): void => {
    isSimpleMode = !isSimpleMode;

    const appComponent: IComponent = 
    {
        elementConnection: 
        { 
            parent: root,
            children: [
                switchDisplayModeButton,
                aboutSection,
                projectsSection
            ]
        },
        className: `app ${isSimpleMode ? simpleModeCSSTag : coolModeCSSTag}`
    }
    
    root.innerHTML = "";
    RenderComponent(appComponent);
}


UpdateApp();