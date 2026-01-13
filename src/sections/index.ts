import { RenderAboutSection } from "./About";
import { RenderProjectsSection } from "./Projects";
import type { Project, AboutInfo } from "../data/siteData";
import { CreateComponent } from "../element-creators/CreateComponent";
import type { SiteOptions } from "../types";
import { mountComponent } from "../utils/mountComponent";



export function RenderAllSections(aboutData: AboutInfo, projectData: Project[]){

    const {aboutSection, updateAbout} = RenderAboutSection(aboutData);
    const {projectsSection, updateAllProjects} = RenderProjectsSection(projectData);

    const sections = CreateComponent({
        element: document.createElement("div"),
        className: "sections-container",
    })

    mountComponent(sections, aboutSection, projectsSection);
    return {
        sections,
        updateBrevity(brevity: SiteOptions["brevity"]) {
            updateAbout(brevity);
            updateAllProjects(brevity);
        }
    };
}