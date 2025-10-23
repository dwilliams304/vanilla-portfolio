import { DummyProjectData } from "../data/projectData";

import type { Project } from "../data/projectData";

export function RenderProjects(projectsList: Project[]){
    const section = document.getElementById("projects");

    if(!section) return;

    projectsList.map((project, i) => {
        const card = CreateCard(project, i);
        section.appendChild(card);
    });
}

function CreateCard(data: Project, key: number | string): HTMLElement{
    const element = document.createElement("div");
    element.classList.add("project-card")
    element.id = String(key);

    element.innerHTML =
    `
        <h3>${data.projectName}</h3>
        <p>${data.projectDescription}</p>
    `;

    return element;
}


export function InitProjects(){
    RenderProjects(DummyProjectData);
}