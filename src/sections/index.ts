import { RenderAboutSection } from "./About";
import { RenderProjectsSection } from "./Projects";
import type { Project, AboutInfo } from "../types";



export function RenderAllSections(aboutData: AboutInfo, projectData: Project[]): HTMLElement[]{
    const sections: HTMLElement[] = [];

    const aboutSection = RenderAboutSection(aboutData);
    const projectsSection = RenderProjectsSection(projectData);

    sections.push(aboutSection, projectsSection);
    return sections;
}