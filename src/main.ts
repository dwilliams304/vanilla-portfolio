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
    key: "switch-mode-btn",
    onClick: () => SwitchDisplayMode()
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
            switchDisplayModeButton,
            aboutSection,
            projectsSection
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