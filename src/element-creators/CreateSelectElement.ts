type SelectElementProps<T extends string> = {
    className?: string,
    name: string,
    labelText?: string,
    id: string,
    value: T,
    options: OptionElement<T>[],
    onChange?: (value: T) => void
}

type OptionElement<T extends string> = {
    value: T;
    label: string;
}

export function CreateSelectElement<T extends string>({
    className,
    name,
    labelText,
    id,
    value,
    options,
    onChange

}: SelectElementProps<T>): HTMLElement {
    const label = document.createElement("label");
    labelText ? label.textContent = labelText : label.textContent = name;


    const select = document.createElement("select");
    if (className) select.classList.add(className);

    select.name = name;
    select.id = id;

    options.forEach(opt => {
        const option = document.createElement("option");
        option.value = opt.value;
        option.textContent = opt.label;
        option.selected = opt.value === value;
        select.appendChild(option);
    });

    if (onChange) {
        select.addEventListener("change", () => onChange(select.value as T));
    }
    
    label.append(select);

    return label;
}