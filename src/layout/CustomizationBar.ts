import type { SiteOptions } from "../types";
import { UIState } from "../state/UIState";
import { CreateColorPicker } from "../element-creators/CreateColorPicker";
import { CreateSelectElement } from "../element-creators/CreateSelectElement";
import { mountComponent } from "../utils/mountComponent";
import { CreateComponent } from "../element-creators/CreateComponent"

type CustomizationCallbacks = {
    onBrevityChange: (brevity: SiteOptions["brevity"]) => void;
    onStyleChange: (style: SiteOptions["style"]) => void;
    onSimpleModeChange: (simpleMode: boolean) => void;
    onPrimaryColorChange: (color: string) => void;
    onSecondaryColorChange: (color: string) => void;
    onBackgroundColorChange: (color: string) => void;
    onTextColorChange: (color: string) => void;
}

export function OpenBarButton(bar: HTMLElement): HTMLElement {
    const openButton = document.createElement("button");
    openButton.classList.add("open-button");
    openButton.textContent = "Customize!";

    openButton.addEventListener("click", () => {
        bar.classList.toggle("is-closed");
    })

    return openButton;
}

export function RenderCustomizationBar(callbacks: CustomizationCallbacks): HTMLElement {
    const bar = CreateComponent({
        className: "customization-bar is-closed",
        content: `
            <h2>Customization</h2>
            <div class="custom-options"></div>
        `
    })

    const optionsContainer = bar.querySelector<HTMLElement>(".custom-options");

    if (optionsContainer) {
        mountComponent(
            optionsContainer,
            ...CreateCustomizationOptions(callbacks),
            ...CreateColorPickers(callbacks),
            CreateCloseButton(bar)
        );
    }

    return bar;
}



function CreateCustomizationOptions(callbacks: CustomizationCallbacks): HTMLElement[] {
    
    const brevitySelect = CreateSelectElement<SiteOptions["brevity"]>({
        className: "brevity-select",
        name: "brevity",
        labelText: "Brevity",
        id: "brevity",
        value: UIState.brevity,
        options: [
            { value: "Shortest", label: "Qck"},
            { value: "Short", label: "Short" },
            { value: "Normal", label: "Normal" },
            { value: "Longer", label: "Longer Descriptions" },
            { value: "Everything", label: "Give Me All The Details Man!" },
        ],
        onChange: (brevity) => {
            UIState.brevity = brevity;
            callbacks.onBrevityChange(brevity);
        }
    });
    
    // const styleSelect = CreateSelectElement<SiteOptions["style"]>({
    //     className: "style-select",
    //     name: "style",
    //     labelText: "Site Style",
    //     id: "style",
    //     value: UIState.style,
    //     options: [
    //         { value: "Default", label: "NOT IMPLEMENTED YET" },
    //         { value: "NoStyle", label: "NOT IMPLEMENTED YET" },
    //         { value: "Retro", label: "NOT IMPLEMENTED YET" }
    //     ],
    //     onChange: (style) => {
    //         UIState.style = style;
    //         callbacks.onStyleChange(style);
    //     }
    // });
    
    const simpleModeToggle = CreateSimpleModeToggle(callbacks);

    return [
        simpleModeToggle,
        brevitySelect,
        // styleSelect,
    ]
}


function CreateColorPickers(callbacks: CustomizationCallbacks): HTMLElement[] {
    const primaryColorPicker = CreateColorPicker<string>({
        name: "Primary Color",
        value: UIState.colors.primaryColor,
        onChange: (color) => {
            UIState.colors.primaryColor = color;
            callbacks.onPrimaryColorChange(color);
        }
    });
    const secondaryColorPicker = CreateColorPicker<string>({
        name: "Secondary Color",
        value: UIState.colors.secondaryColor,
        onChange: (color) => {
            UIState.colors.secondaryColor = color;
            callbacks.onSecondaryColorChange(color);
        }
    });
    const backgroundColorPicker = CreateColorPicker<string>({
        name: "Background Color",
        value: UIState.colors.backgroundColor,
        onChange: (color) => {
            UIState.colors.backgroundColor = color;
            callbacks.onBackgroundColorChange(color);
        }
    });
    
    const textColorPicker = CreateColorPicker<string>({
        name: "Text Color",
        value: UIState.colors.textColor,
        onChange: (color) => {
            UIState.colors.textColor = color;
            callbacks.onTextColorChange(color);
        }
    });

    return [
        primaryColorPicker,
        secondaryColorPicker,
        backgroundColorPicker,
        textColorPicker
    ]
}

function CreateSimpleModeToggle(callbacks: CustomizationCallbacks): HTMLElement {
    const label = document.createElement("label");
    label.textContent = "Simple Mode";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = UIState.simpleMode;

    checkbox.addEventListener("change", () => {
        UIState.simpleMode = checkbox.checked;
        callbacks.onSimpleModeChange(checkbox.checked);
    })

    label.append(checkbox);
    return label;
}

function CreateCloseButton(bar: HTMLElement): HTMLElement {
    const button = document.createElement("button");
    button.textContent = "X";
    button.classList.add("close-button")

    button.addEventListener("click", () => {
        bar.classList.add("is-closed");
    });

    return button;
}