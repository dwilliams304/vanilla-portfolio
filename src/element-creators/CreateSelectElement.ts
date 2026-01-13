type SelectElementProps<T extends string> = {
    className?: string,
    name: string,
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
    id,
    value,
    options,
    onChange

}: SelectElementProps<T>): HTMLSelectElement {
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

    return select;
}