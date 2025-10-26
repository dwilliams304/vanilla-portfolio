import "./styles/reset.css";
import "./styles/index.css";
import "./styles/components.css";
import "./styles/sections.css";
import { customizationOptions } from "./data/customizationOptions";
import { aboutData } from "./data/aboutData";
import { DummyProjectData } from "./data/projectData";



import { InitComponents } from "./components/";
import { InitSections } from "./sections";


InitComponents(customizationOptions);
InitSections(aboutData, DummyProjectData);