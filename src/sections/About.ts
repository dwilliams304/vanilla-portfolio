import { RenderComponent } from "../utils/RenderComponent";
import type { AboutInfo } from "../data/siteData";
import type { CustomOptions } from "../data/customOptions";
import { mountComponent } from "../utils/mountComponent";

export function RenderAboutSection(aboutData: AboutInfo) {
    const descriptionElement = document.createElement("p");
    const imgElement = document.createElement("img");
    imgElement.src = aboutData.img;
    imgElement.classList.add("img-coin");

    const contentElement = RenderComponent({
        content: `
            <h2>${aboutData.h2}</h2>
            <h3>${aboutData.h3}</h3>
        `,
        className: "about-card-content",
    })

    mountComponent(contentElement, descriptionElement);

    const aboutSection = RenderComponent({
        element: document.createElement("section"),
        className: "about-card",
    });

    mountComponent(aboutSection, contentElement, imgElement);

    descriptionElement.textContent = aboutData.description.normal;

    return {
        aboutSection,
        updateAbout(brevity: CustomOptions["brevity"]) {
            let text;
            switch(brevity){
                case "Short": 
                    text = aboutData.description.short
                    break;
                case "Normal": 
                    text = aboutData.description.normal
                    break;
                case "Longer":
                    text = aboutData.description.longer;
                    break;
                case "Everything":
                    text = aboutData.description.everything;
                    break;
                default:
                    text = aboutData.description.normal;
                    break;
            }
            descriptionElement.textContent = text ?? "Nothing was provided.";
        }
    }
}
