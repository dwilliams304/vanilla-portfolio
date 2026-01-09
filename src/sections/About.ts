import { RenderComponent } from "../utils/RenderComponent";
import type { AboutInfo } from "../data/siteData";
import type { CustomOptions } from "../data/customOptions";

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
        elementConnection: { children: [descriptionElement] }
    })

    const aboutSection = RenderComponent({
        element: document.createElement("section"),
        className: "about-card",
        elementConnection: {
            children: [
                contentElement,
                imgElement
            ]
        }
    });

    descriptionElement.textContent = aboutData.description.normal;

    return {
        aboutSection,
        updateAbout(brevity: CustomOptions["brevity"]) {
            let text;
            switch(brevity){
                case "Qck": 
                    text = aboutData.description.qck
                    break;
                case "Normal": 
                    text = aboutData.description.normal
                    break;
                case "Longer Descriptions":
                    text = aboutData.description.long;
                    break;
                    case "Give Me All The Details Man!":
                    text = aboutData.description.veryLong;
                    break;
                default:
                    text = aboutData.description.normal;
                    break;
            }
            descriptionElement.textContent = text ?? "Nothing was provided.";
        }
    }
}
