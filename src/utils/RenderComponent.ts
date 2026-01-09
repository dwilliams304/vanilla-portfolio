export interface IComponent
{
    element?: HTMLElement
    id?: string;
    content?: string;
    elementConnection?: { 
        parent?: HTMLElement;
        children?: HTMLElement[];
        assignedUniqueChildId?: boolean;
    }
    className?: string;
    onRender?: () => void;
    onClick?: () => void;
}


export function RenderComponent(component: IComponent){
    let {element} = component;
    const {id, content, elementConnection, className, onRender, onClick} = component;

    if(!element) element = document.createElement("div");
    if(id) element.id = id;
    if(elementConnection?.parent) elementConnection.parent.appendChild(element);
    if(content) element.innerHTML = content
    if(className) {
        element.className = element.className ?
        `${element.className} ${className}`
        : className
    }
    if(onClick){
        element.addEventListener("click", onClick);
    }


    if(elementConnection?.children){
        elementConnection.children.forEach((child, i) => {
            element.appendChild(child);
            if(elementConnection.assignedUniqueChildId) child.id = i.toString();
        })
    }


    if(onRender) {
        onRender();
    }

    
    return element;
}