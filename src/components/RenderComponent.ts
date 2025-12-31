export interface IComponent
{
    rootElement: HTMLElement
    key?: string;
    content?: string;
    elementConnection?: { 
        parent?: HTMLElement, 
        children?: HTMLElement[] 
    }
    className?: string;
    onRender?: () => void;
    onRefresh?: () => void
    onClick?: () => void;
}


export function RenderComponent(component: IComponent): HTMLElement{
    const {rootElement, key, content, elementConnection, className, onRender, onClick} = component;

    if(key) rootElement.id = key;
    if(elementConnection?.parent) elementConnection.parent.appendChild(rootElement);
    if(content) rootElement.innerHTML = content
    if(className) rootElement.className = className;
    if(onClick){
        rootElement.addEventListener("click", onClick);
    }

    if(elementConnection?.children){
        elementConnection.children.forEach((child, i) => {
            rootElement.appendChild(child);
            rootElement.id = i.toString();
        })
    }


    if(onRender) {
        onRender();
    }

    
    return rootElement;
}