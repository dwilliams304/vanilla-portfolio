import type { CustomOptions } from "../data/customOptions";
import { updateAboutFn, updateProjectFn } from "../main";
import { UIState } from "../state/UIState";
import { GetRandomHeader } from "../utils/randomHeader";
import { RenderComponent, type IComponent } from "../utils/RenderComponent"



export function RenderLayout(root: HTMLElement, switchDisplayButton: HTMLElement): HTMLElement[]{
    const brevityControls = RenderComponent({
        content: `
            <div class="brevity-controls">
                <h2>Descriptions Length</h2>
                <label>
                    Qck
                    <input type="radio" name="brevity" value="Qck" class="brevity-input"/>
                </label>
                <label>
                    Normal
                    <input type="radio" name="brevity" value="Normal" class="brevity-input"/>
                </label>
                <label>
                    Very Long
                    <input type="radio" name="brevity" value="Longer Descriptions" class="brevity-input"/>
                </label>
                <label>
                    Show Me Everything Man!
                    <input type="radio" name="brevity" value="Give Me All The Details Man!" class="brevity-input"/>
                </label>
            </div>
        `
    })

    const sectionsList = RenderComponent({
        element: document.createElement("aside"),
        elementConnection: {
            parent: root,
            children: [
                switchDisplayButton,
                brevityControls
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

    const brevityInputs = brevityControls.querySelectorAll<HTMLInputElement>(".brevity-input");
    brevityInputs.forEach(input => {
        input.addEventListener("change", () => {
            UIState.brevity = input.value as CustomOptions["brevity"];
            
            updateAboutFn(UIState.brevity);
            updateProjectFn();
        })
    })


    let currentHeader = "daviswilliams.dev";

    const headerComponent = RenderComponent({
        element: document.createElement("header"),
        elementConnection: { parent: root }
    });


    let titleObject: IComponent = {
        element: document.createElement("h1"),
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