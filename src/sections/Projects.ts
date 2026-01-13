import type { CustomOptions } from "../types";
import type { Project } from "../data/siteData";
import { mountComponent } from "../utils/mountComponent";
import { CreateComponent, type IComponent } from "../element-creators/CreateComponent";

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

const CreateProjectCard = (project: Project, id: string) => {
    const {projectName, projectDescription, projectImg, techUsed} = project;

    const card = CreateComponent({
        className: "project-card",
        id: id,
        content: `
            <div class="project-card-left">
                <h3 class="fancy-hover"">${projectName}</h3>
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
    
    const descriptionElement = document.createElement("p");
    descriptionElement.textContent = projectDescription.normal;

    card.querySelector(".project-card-left")?.appendChild(descriptionElement);
    
    return {
        card,
        updateProject(brevity: CustomOptions["brevity"]){
            let text;
            switch(brevity){
                case "Short":
                    text = projectDescription.short;
                    break;
                case "Normal":
                    text = projectDescription.normal;
                    break;
                case "Longer":
                    text = projectDescription.longer;
                    break;
                case "Everything":
                    text = projectDescription.everything;
                    break;
            }
            descriptionElement.textContent = text;
        }
    };
}

export function RenderProjectsSection(projects: Project[]){
    let sectionComponentObject: IComponent = {
        element: document.createElement("section"),
        className: "projects",
        id: "projects"
    }

    const cards: HTMLElement[] = [];
    const updateProjectCards: ((brevity: CustomOptions["brevity"]) => void)[] = [];
    if(projects.length === 0){
        sectionComponentObject.content = `<h2>For some reason the projects' data couldn't be loaded. Please bother me if you see this</h2>`
    }
    else{
        projects.forEach((project, i) => {
            const {card, updateProject} = CreateProjectCard(project, i.toString());
            cards.push(card);
            updateProjectCards.push(updateProject);
        })

    }

    const projectsSection = CreateComponent(sectionComponentObject);
    mountComponent(projectsSection, ...cards);
    

    return {
        projectsSection,
        updateAllProjects(brevity: CustomOptions["brevity"]){
            updateProjectCards.forEach(update => {
                update(brevity);
            })
        }
    }
}