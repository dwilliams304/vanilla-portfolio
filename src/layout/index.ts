import type { CustomOptions } from "../data/customOptions";
import { UIState } from "../state/UIState";
import { mountComponent } from "../utils/mountComponent";
import { GetRandomHeader } from "../utils/randomHeader";
import { RenderComponent } from "../utils/RenderComponent"

type LayoutCallbacks = {
    onBrevityChange: (brevity: CustomOptions["brevity"]) => void;
}

export function RenderLayout(root: HTMLElement, switchDisplayButton: HTMLElement, callbacks: LayoutCallbacks): HTMLElement[]{
    const brevityControls = RenderComponent({
        className: "brevity-controls",
    })

    mountComponent(brevityControls,
        CreateBrevityRadioButton("Qck", "Qck"),
        CreateBrevityRadioButton("Normal", "Normal"),
        CreateBrevityRadioButton("Very Long", "Longer Descriptions"),
        CreateBrevityRadioButton("Show Me Everything Man!", "Give Me All The Details Man!")
    );

    const sectionsList = RenderComponent({
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

    mountComponent(sectionsList, switchDisplayButton, brevityControls);

    const brevityInputs = brevityControls.querySelectorAll<HTMLInputElement>(".brevity-input");
    brevityInputs.forEach(input => {
        input.addEventListener("change", () => {
            UIState.brevity = input.value as CustomOptions["brevity"];
            callbacks.onBrevityChange(UIState.brevity);
        })
    })


    let currentHeader = "daviswilliams.dev";

    const headerComponent = RenderComponent({
        element: document.createElement("header"),
    });

    
    const titleComponent = RenderComponent({
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


function CreateBrevityRadioButton(labelText: string, value: CustomOptions["brevity"]): HTMLElement {
    const label = document.createElement("label");
    const input = document.createElement("input");
    input.type = "radio";
    input.name = "brevity";
    input.value = value;
    input.classList.add("brevity-input");

    input.checked = UIState.brevity === value;

    input.addEventListener("change", () => UIState.brevity = value);

    label.append(labelText, input);
    return label;
}