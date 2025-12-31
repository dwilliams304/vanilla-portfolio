export function SectionsList(SwitchDisplayMode: (setTo: boolean) => void, sections: string[]){
    const aside = document.getElementById("sections-list");
    
    if(!aside) return;
    const list = document.createElement("ul");
    aside?.appendChild(list);

    if(sections.length > 0){
        sections.map((section, i) => {
            const sectionItem = document.createElement("li");
            sectionItem.textContent = section;
            sectionItem.classList.add("txt-underline-effect", i.toString());
            list.appendChild(sectionItem);
        })
    }

    const funButton = document.createElement("button");
    funButton.classList.add("primary-btn", "mt-10");
    funButton.textContent = "Switch Modes";
    funButton.addEventListener("click", () => SwitchDisplayMode(false));
    list.appendChild(funButton);
}