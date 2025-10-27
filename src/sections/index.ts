import { InitAbout } from "./About";
import { InitProjects } from "./Projects";
import { InitContact } from "./Contact";
import type { Project, AboutInfo } from "../types";


export function InitSections(aboutData: AboutInfo, projectData: Project[]){
    InitAbout(aboutData);
    InitProjects(projectData);
    InitContact();
}