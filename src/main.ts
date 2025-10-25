import "./style.css";
import { CustomizationBar } from "./components/";
import { AboutSection,
    ProjectsSection,
    ContactSection
 } from "./sections";
 import { customOptions } from "./data/customizationOptions";

CustomizationBar(customOptions);

AboutSection();
ProjectsSection();
ContactSection();