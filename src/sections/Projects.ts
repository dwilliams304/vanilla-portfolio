import type { Project } from "../types";
import { RenderComponent, type IComponent } from "../components/RenderComponent";



const RenderTags = (tags: string[]) : HTMLElement => {

    const tagElements: HTMLElement[] = [];
    if(tags){

        tags.forEach((tag, i) => {
            const element = RenderComponent({
                rootElement: document.createElement("span"),
                className: "tech",
                content: " " + tag,
                id: i.toString()
            })
            tagElements.push(element);
        })
    }

    const tagsContainer = RenderComponent({
        className: "tags",
        elementConnection: {
            children: tagElements ? tagElements : undefined
        }
    })

    return tagsContainer;


}

const CreateProjectCard = (project: Project, id: string): HTMLElement => {
    const {projectName, projectDescription, projectImg} = project;
    const tags = RenderTags(project.techUsed);

    const card = RenderComponent({
        className: "project-card",
        id: id,
        content: `
            <div class="project-card-left">
                <h3 class="fancy-hover"-underline">${projectName}</h3>
                <p>${projectDescription}</p>
                ${tags}
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
            children: cards
        }
    }


    const section = RenderComponent(sectionComponentObject);

    return section;
}