import type { CustomOptions } from "../data/customOptions";
import { UIState } from "../state/UIState";
import { CreateSelectElement } from "../utils/CreateSelectElement";
import { mountComponent } from "../utils/mountComponent";
import { RenderComponent } from "../utils/RenderComponent"

type CustomizationCallbacks = {
    onBrevityChange: (brevity: CustomOptions["brevity"]) => void;
    onStyleChange: (style: CustomOptions["style"]) => void;
    onSimpleModeChange: (simpleMode: boolean) => void;
}


export function RenderCustomizationBar(callbacks: CustomizationCallbacks): HTMLElement {

    const bar = RenderComponent({
        className: "customization-bar",
        content: `
            <h2>Customization</h2>
            <div class="custom-options"></div>
        `
    })

    const optionsContainer = bar.querySelector<HTMLElement>(".custom-options");

    const brevitySelect = CreateSelectElement<CustomOptions["brevity"]>({
        className: "brevity-select",
        name: "brevity",
        id: "brevity",
        value: UIState.brevity,
        options: [
            { value: "Short", label: "Qck" },
            { value: "Normal", label: "Normal" },
            { value: "Longer", label: "Longer Descriptions" },
            { value: "Everything", label: "Give Me All The Details Man!" },
        ],
        onChange: (brevity) => {
            UIState.brevity = brevity;
            callbacks.onBrevityChange(brevity);
        }
    });


    const styleSelect = CreateSelectElement<CustomOptions["style"]>({
        className: "style-select",
        name: "style",
        id: "style",
        value: UIState.style,
        options: [
            { value: "Default", label: "Modern" },
            { value: "NoStyle", label: "None" },
            { value: "Retro", label: "Retro" }
        ],
        onChange: (style) => {
            UIState.style = style;
            callbacks.onStyleChange(style);
        }
    })

    if(optionsContainer){
        mountComponent(optionsContainer, brevitySelect, styleSelect, CreateSimpleModeToggle(callbacks));
    }

    return bar;
}

function CreateSimpleModeToggle( callbacks: CustomizationCallbacks ): HTMLElement {
    const label = document.createElement("label");
    label.textContent = "Simple Mode";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = UIState.simpleMode;

    checkbox.addEventListener("change", () => {
        UIState.simpleMode = checkbox.checked;
        callbacks.onSimpleModeChange(checkbox.checked);
    })

    label.prepend(checkbox);
    return label;
}