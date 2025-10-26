import type { AboutInfo } from "../types";
import { GetSection } from "../utils/GetSection";

export function InitAbout(aboutInfo: AboutInfo){
    const section = GetSection("about");
    if(!section) return;

    section.innerHTML = `
        <div class="about-card">
            <div class="about-card-content">
                <h2>${aboutInfo.h2}</h2>
                <h3>${aboutInfo.h3}</h3>
                <p>${aboutInfo.description}</p>
            </div>
            <div>
                <img 
                    src=${aboutInfo.img} 
                    class="img-coin"
                />
            </div>
        </div>
    `;
}