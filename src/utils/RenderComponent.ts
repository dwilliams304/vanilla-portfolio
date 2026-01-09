
export interface IComponent
{
    element?: HTMLElement
    id?: string;
    content?: string;
    className?: string;
    onClick?: (e: MouseEvent) => void;
    onRender?: (el: HTMLElement) => void;
}


export function RenderComponent(component: IComponent){
    let {element} = component;
    const {id, content, className, onRender, onClick} = component;

    if(!element) element = document.createElement("div");
    if(id) element.id = id;
    if(className) className.split(" ").forEach(c => element.classList.add(c));

    if(content) element.innerHTML = content

    if(onClick)  element.addEventListener("click", onClick);
    onRender?.(element);

    
    return element;
}