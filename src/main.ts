import "./style.css";
import { CustomizationBar } from "./components/";
import { AboutSection,
    ProjectsSection,
    ContactSection
 } from "./sections";
import { customizationOptions } from "./data/customizationOptions";

CustomizationBar(customizationOptions);

AboutSection();
ProjectsSection();
ContactSection();