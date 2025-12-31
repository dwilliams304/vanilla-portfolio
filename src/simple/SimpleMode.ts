import "./simplemode.css";
import type { AboutInfo, Project } from "../types";
import { GetSection } from "../utils/GetSection";

export function RenderSimpleMode(aboutData: AboutInfo, projectData: Project[]){
    const content = GetSection("content");

    if(!content) return;

    content.classList.add("simple-mode");

    const aboutSection = GetSection("about");
    aboutSection.classList.add("about-simple");
    aboutSection.innerHTML = 
    `
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
    `;

    const projectSection = GetSection("projects");
    projectSection.classList.add("projects-simple")
    
    const projectsList = document.createElement("div");
    projectsList.classList.add("projects-simple");
    
    if(projectData.length > 0){
        projectData.map(project => {
            projectsList.appendChild(CreateSimpleProjectCard(project));
        })
    }

    projectSection.appendChild(projectsList);
}


function CreateSimpleProjectCard(project: Project): HTMLElement{
    const projectItem = document.createElement("div");
    projectItem.classList.add("project-card-simple");

    projectItem.innerHTML = `
        <h3>${project.projectName}</h3>
        <p>${project.projectDescription}</p>
        <p><span class="txt-highlight-p-co">Tech Used: </span>${project.techUsed.map(tech => tech)}</p>
        <div>
            <a>Github</a>
            <a>Demo</a>
        </div>
    `;

    return projectItem;
}