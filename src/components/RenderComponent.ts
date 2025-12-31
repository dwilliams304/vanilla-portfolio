export class Component
{
    constructor(
        rootElement: HTMLElement,
        key?: string,
        content?: string,
        parent?: HTMLElement,
        children?: HTMLElement[],
        classList?: string[],
        onRender?: () => void,
    ){
        this.rootElement = rootElement;
        this.key = key;
        this.content = content;
        this.parent = parent;
        this.children = children;
        this.classList = classList;
        this.onRender = onRender;
    }

    readonly rootElement: HTMLElement
    readonly key: string | undefined;
    readonly content: string | undefined | null;
    readonly parent: HTMLElement | undefined | null;
    readonly children: HTMLElement[] | undefined | null;
    readonly classList: string[] | undefined | null;
    readonly onRender: (() => void) | undefined | null;
}



export function RenderComponent(component: Component): HTMLElement{
    const {rootElement, key, content, parent, children, classList, onRender} = component;

    if(key) rootElement.id = key;
    if(parent)parent.appendChild(rootElement);
    if(content) rootElement.innerHTML = content
    if(classList) rootElement.classList.add(classList.join(" "));

    if(children){
        children.forEach((child, i) => {
            rootElement.appendChild(child);
            rootElement.id = i.toString();
        })
    }


    if(onRender !== null && onRender !== undefined) {
        onRender();
    }

    
    return rootElement;
}