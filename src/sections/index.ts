import { RenderAboutSection } from "./About";
import { RenderProjectsSection } from "./Projects";
import type { Project, AboutInfo } from "../data/siteData";
import { RenderComponent } from "../utils/RenderComponent";
import type { CustomOptions } from "../data/customOptions";
import { mountComponent } from "../utils/mountComponent";



export function RenderAllSections(aboutData: AboutInfo, projectData: Project[]){

    const {aboutSection, updateAbout} = RenderAboutSection(aboutData);
    const {projectsSection, updateAllProjects} = RenderProjectsSection(projectData);

    const sections = RenderComponent({
        element: document.createElement("div"),
        className: "sections-container",
    })

    mountComponent(sections, aboutSection, projectsSection);
    return {
        sections,
        updateBrevity(brevity: CustomOptions["brevity"]) {
            updateAbout(brevity);
            updateAllProjects(brevity);
        }
    };
}