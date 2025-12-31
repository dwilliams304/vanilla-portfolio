import { RenderComponent } from "./RenderComponent"




export function RenderLayout(root: HTMLElement){
    RenderComponent({
        rootElement: document.createElement("aside"),
        elementConnection: {
            parent: root
        },
        id: "sections-list",
        content: `
            <ul>
                <li class="txt-underline-effect">About</li>
                <li class="txt-underline-effect">Projects</li>
                <li class="txt-underline-effect">Contact</li>
            </ul>
        `
    })
}