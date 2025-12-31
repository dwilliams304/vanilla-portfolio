export class Component
{
    constructor(
        rootElement: HTMLElement,
        content?: string,
        elementConnection?: { parent?: HTMLElement | null, children?: HTMLElement[] | null} | undefined,
        className?: string,
        key?: string,
        onRender?: () => void,
    ){
        this.rootElement = rootElement;
        this.key = key;
        this.content = content;
        this.elementConnection = elementConnection;
        this.className = className;
        this.onRender = onRender;
    }

    readonly rootElement: HTMLElement
    readonly key: string | undefined;
    readonly content: string | undefined | null;
    readonly elementConnection: undefined | { parent?: HTMLElement | null, children?: HTMLElement[]  | null }
    readonly className: string | undefined | null;
    readonly onRender: (() => void) | undefined | null;
}



export function RenderComponent(component: Component): HTMLElement{
    const {rootElement, key, content, elementConnection, className, onRender} = component;

    if(key) rootElement.id = key;
    if(elementConnection?.parent) elementConnection.parent.appendChild(rootElement);
    if(content) rootElement.innerHTML = content
    if(className) rootElement.className = className;

    if(elementConnection?.children){
        elementConnection.children.forEach((child, i) => {
            rootElement.appendChild(child);
            rootElement.id = i.toString();
        })
    }


    if(onRender !== null && onRender !== undefined) {
        onRender();
    }

    
    return rootElement;
}