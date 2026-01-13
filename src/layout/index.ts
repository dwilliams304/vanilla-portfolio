import { mountComponent } from "../utils/mountComponent";
import { GetRandomHeader } from "../utils/randomHeader";
import { CreateComponent } from "../element-creators/CreateComponent"


export function RenderLayout(root: HTMLElement): HTMLElement[]{
    const brevityControls = CreateComponent({
        className: "brevity-controls",
    })


    const sectionsList = CreateComponent({
        element: document.createElement("aside"),
        className: "sections-list",
        content: `
            <ul>
                <li class="txt-underline-effect">About</li>
                <li class="txt-underline-effect">Projects</li>
                <li class="txt-underline-effect">Contact</li>
            </ul>
        `
    });

    mountComponent(sectionsList, brevityControls);



    let currentHeader = "daviswilliams.dev";

    const headerComponent = CreateComponent({
        element: document.createElement("header"),
    });

    
    const titleComponent = CreateComponent({
        element: document.createElement("h1"),
        className: "txt-highlight-p-co",
        content: `${currentHeader}`
    })


    mountComponent(headerComponent, titleComponent);

    mountComponent(root, headerComponent);


    headerComponent.addEventListener("click", () => {
        currentHeader = GetRandomHeader();
        titleComponent.textContent = `${currentHeader}.dev`;
    });

    return [sectionsList, headerComponent]
}