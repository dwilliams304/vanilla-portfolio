export function mountComponent(parent: HTMLElement, ...children: HTMLElement[]){
    parent.append(...children);
    return parent;
}