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
            { value: "Qck", label: "Qck" },
            { value: "Normal", label: "Normal" },
            { value: "Longer Descriptions", label: "Long" },
            { value: "Give Me All The Details Man!", label: "Everything" },
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
        mountComponent(optionsContainer, brevitySelect, styleSelect);
    }

    return bar;
}

