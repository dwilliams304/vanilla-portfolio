import { RenderAboutSection } from "./About";
import { RenderProjectsSection } from "./Projects";
import type { Project, AboutInfo } from "../data/siteData";
import { RenderComponent } from "../utils/RenderComponent";



export function RenderAllSections(aboutData: AboutInfo, projectData: Project[]): HTMLElement{

    const aboutSection = RenderAboutSection(aboutData);
    const projectsSection = RenderProjectsSection(projectData);

    const sections = RenderComponent({
        rootElement: document.createElement("div"),
        className: "sections-container",
        elementConnection: {
            children: [aboutSection, projectsSection]
        }
    })

    return sections;
}