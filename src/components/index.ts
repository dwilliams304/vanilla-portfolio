import { GetRandomHeader } from "../utils/randomHeader";
import { InitHeader } from "./Header";
import { RenderComponent } from "./RenderComponent";
import { SectionsList } from "./SectionsList";


export function InitComponents(SwitchDisplayMode: (setTo: boolean) => void){
    InitHeader();
    SectionsList(SwitchDisplayMode, ["About", "Projects", "Contact"]);
}

export function CreateLayout(): HTMLElement
{   
    const siteTitle = RenderComponent({
        rootElement: document.createElement("h1"),
        key: "site-header",
        className: "txt-highlight-p-co",
        content: "Daviswilliams!!!!",
        onClick: () => GetRandomHeader()
    })

    const sectionsNavBar = RenderComponent({
        rootElement: document.createElement("aside"),
    });

    const header = RenderComponent({
        rootElement: document.createElement("header"),
        elementConnection: {
            children: [siteTitle, sectionsNavBar]
        }

    });


    return header;
}