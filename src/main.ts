import "./style.css";
import { CustomizationBar } from "./components/";
import { AboutSection,
    ProjectsSection,
    ContactSection
 } from "./sections";

// document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
//   <div>
//     // <h1>daviswilliams.dev</h1>
//   </div>
// `

CustomizationBar();

AboutSection();
ProjectsSection();
ContactSection();