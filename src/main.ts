import "./styles/reset.css";
import "./styles/main.css";
import { CustomizationBar } from "./components/";
import { AboutSection,
    ProjectsSection,
    ContactSection
 } from "./sections";
import { customizationOptions } from "./data/customizationOptions";
import { aboutData } from "./data/aboutData";

CustomizationBar(customizationOptions);

AboutSection(aboutData);
ProjectsSection();
ContactSection();