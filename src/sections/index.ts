import { RenderAboutSection } from "./About";
import { RenderProjectsSection } from "./Projects";
import type { Project, AboutInfo } from "../data/siteData";
import { RenderComponent } from "../utils/RenderComponent";



export function RenderAllSections(aboutData: AboutInfo, projectData: Project[]){

    const {aboutSection, updateAbout} = RenderAboutSection(aboutData);
    const {projectsSection, updateAllProjects} = RenderProjectsSection(projectData);

    const sections = RenderComponent({
        element: document.createElement("div"),
        className: "sections-container",
        elementConnection: {
            children: [aboutSection, projectsSection]
        }
    })

    return {
        sections,
        updateAboutFn: updateAbout,
        updateProjectsFn: updateAllProjects
    };
}