import { GetSection } from "../utils/GetSection";

import type { Project } from "../types";

export function RenderProjects(projectsList: Project[]){
    const section = GetSection("projects");

    if(projectsList.length === 0){
        const error = document.createElement("div");
        error.innerHTML = 
        `
            <h2>There was an error loading the project data. Please bother me somewhere if you see this!</h2>
        `;

        section.appendChild(error);
        return;
    }

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
        <div class="project-card-left">
            <h3>${data.projectName}</h3>
            <p>${data.projectDescription}</p>
        </div>
        <div class="project-card-right">
            <img src=${data.projectImg}
            />
            <div class="project-card-buttons">
                <button>GitHub</button>
                <button>Demo</button>
            </div>
        </div>
    `;

    return element;
}


export function InitProjects(projectsList: Project[]){
    RenderProjects(projectsList);
}