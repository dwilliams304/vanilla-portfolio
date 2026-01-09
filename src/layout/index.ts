import { GetRandomHeader } from "../utils/randomHeader";
import { RenderComponent, type IComponent } from "../utils/RenderComponent"



export function RenderLayout(root: HTMLElement, switchDisplayButton: HTMLElement): HTMLElement[]{
    const sectionsList = RenderComponent({
        rootElement: document.createElement("aside"),
        elementConnection: {
            parent: root,
            children: [
                switchDisplayButton
            ]
        },
        className: "sections-list",
        content: `
            <ul>
                <li class="txt-underline-effect">About</li>
                <li class="txt-underline-effect">Projects</li>
                <li class="txt-underline-effect">Contact</li>
            </ul>
        `
    });

    
    let currentHeader = "daviswilliams.dev";

    const headerComponent = RenderComponent({
        rootElement: document.createElement("header"),
        elementConnection: { parent: root }
    });


    let titleObject: IComponent = {
        rootElement: document.createElement("h1"),
        className: "txt-highlight-p-co",
        content: currentHeader,
        elementConnection: { parent: headerComponent }
    }

    RenderComponent(titleObject);
    

    headerComponent.addEventListener("click", () => {
        currentHeader = GetRandomHeader();
        titleObject.content = `${currentHeader}.dev`;

        RenderComponent(titleObject);
    });

    return [sectionsList, headerComponent]
}