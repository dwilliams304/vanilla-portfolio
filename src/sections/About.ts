import { RenderComponent } from "../components/RenderComponent";
import type { AboutInfo } from "../types";

export function RenderAboutSection(aboutData: AboutInfo): HTMLElement {
    const section = RenderComponent({
        rootElement: document.createElement("section"),
        content: `
        <div class="about-card">
            <div class="about-card-content">
                <h2>${aboutData.h2}</h2>
                <h3>${aboutData.h3}</h3>
                <p>${aboutData.description}</p>
            </div>
            <div>
                <img 
                    src=${aboutData.img} 
                    class="img-coin"
                />
            </div>
        </div>
    `
    });


    return section;
}
