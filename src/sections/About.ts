import type { AboutInfo } from "../types";
import { GetSection } from "../utils/GetSection";

export function About(aboutInfo: AboutInfo){
    const section = GetSection("about");
    if(!section) return;

    section.innerHTML = `
        <div class="about-container">
            <div>
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