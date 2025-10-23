/*
    This function is designed to either find a section by an id, or create one if there is none

    This simply serves to help with better error handling, and is going to be used across each section that
    is added to this site.

    Imagine I forgot to create a certain section in the index.html, no worries!
*/

export function GetSection(sectionID: string): HTMLElement{
    let section = document.getElementById(sectionID);
    if(section) return section;

    let content = document.getElementById("content");
    if(!content) {
        content = document.createElement("main");
        content.id = "content";
    }

    section = document.createElement("section");
    section.id = sectionID;
    content.appendChild(section);
    return section;
}