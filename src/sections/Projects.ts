import type { Project } from "../data/siteData";
import { RenderComponent, type IComponent } from "../utils/RenderComponent";

const createProjectButton = (text: string, link: string | undefined): string => {
    if(link) {
        return `
            <button class="primary-btn" onClick="window.open('${link}')">
                ${text}
            </button>
        `
    }
    else return ""
}

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
                    ${createProjectButton("Demo", project.links[0])}
                    ${createProjectButton("GitHub", project.links[1])}
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