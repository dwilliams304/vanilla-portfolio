import { mountComponent } from "../utils/mountComponent";
import { RenderComponent } from "../utils/RenderComponent"



export function RenderCustomizationBar() {

    const customizationBar = RenderComponent({
        className: "customization-bar",
        content: `
            <h2>Customization Options</h2>
            <div class="custom-options">

                <select name="theme" id="theme">
                    <option value="retro">Retro</option>
                    <option value="modern">Modern</option>
                    <option value="mystery">Mystery</option>
                </select>

                <select name="brevity" id="brevity">
                    <option value="qck">Qck</option>
                    <option value="Normal">Normal</option>
                </select>

                <label> Simple Mode
                    <input type="checkbox" />
                </label>
            </div>
        `
    });


    const testDropdown = CreateSelectElement({
        className: "test",
        name: "Test Dropdown",
        id: "testing-dropdown",
        options: [
            {
                value: "option-1",
                label: "Option 1"
            },
            {
                value: "option-2",
                label: "Option 2"
            },
            {
                value: "option-3",
                label: "Option 3"
            },
        ]
    })

    mountComponent(customizationBar, testDropdown);
    return customizationBar;
}



type SelectElementProps = {
    className: string,
    name: string,
    id: string
    options: OptionElement[]
}

type OptionElement = {
    value: string,
    label: string
}

export function CreateSelectElement({
    className,
    name,
    id,
    options
}: SelectElementProps): HTMLElement
{
    const selectElement = document.createElement("select");
    selectElement.classList.add(className);
    selectElement.name = name;
    selectElement.id = id;


    options.forEach(option => {
        const optionElement = document.createElement("option");
        optionElement.value = option.value;
        optionElement.textContent = option.label;
        mountComponent(selectElement, optionElement);
    })


    return selectElement;

}