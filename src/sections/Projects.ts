import type { Project } from "../types";
import { RenderComponent, type IComponent } from "../utils/RenderComponent";

const CreateProjectCard = (project: Project, id: string): HTMLElement => {
    const {projectName, projectDescription, projectImg, techUsed} = project;

    const card = RenderComponent({
        className: "project-card",
        id: id,
        content: `
            <div class="project-card-left">
                <h3 class="fancy-hover"-underline">${projectName}</h3>
                <p>${projectDescription}</p>
                <div class="tags">
                    ${techUsed?.map(tag => `<span class="tag">${tag}</span>`).join(" ")}
                </div>
            </div>
            <div class="project-card-right">
                <img src=${projectImg} />
                <div class="project-card-buttons">
                    <button class="primary-btn">Demo</button>
                    <button class="primary-btn">GitHub</button>
                </div>
            </div>
        `
    });
    
    
    return card;
}

export function RenderProjectsSection(projects: Project[]): HTMLElement{
    let sectionComponentObject: IComponent = {
        rootElement: document.createElement("section"),
        className: "projects",
        id: "projects"
    }

    const cards: HTMLElement[] = [];
    if(projects.length === 0){
        sectionComponentObject.content = `<h2>For some reason the projects' data couldn't be loaded. Please bother me if you see this</h2>`
    }
    else{
        projects.forEach((project, i) => {
            const card = CreateProjectCard(project, i.toString());
            cards.push(card);
        })

        sectionComponentObject.elementConnection = {
            children: cards,
            assignedUniqueChildId: true
        }
    }


    const section = RenderComponent(sectionComponentObject);

    return section;
}