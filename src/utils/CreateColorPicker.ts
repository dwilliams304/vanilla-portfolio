type ColorPickerProps<T extends string> = {
    name: string,
    value: T,
    onChange: (value: T) => void
    className?: string,
    id?: string,
}


export function CreateColorPicker<T extends string>({
    className,
    name,
    id,
    value,
    onChange

}: ColorPickerProps<T>): HTMLElement {
    const label = document.createElement("label");
    label.textContent = name;
    
    const colorPicker = document.createElement("input");
    if(className) colorPicker.classList.add(className);
    if(id) colorPicker.id = id;

    colorPicker.type = "color";
    colorPicker.value = value;

    colorPicker.addEventListener("input", () => {
        onChange(colorPicker.value as T);
    })

    label.appendChild(colorPicker);

    return label;
}