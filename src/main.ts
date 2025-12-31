import "./styles/reset.css";
import "./styles/index.css";
import "./styles/components.css";
import "./styles/sections.css";
import { aboutData } from "./data/aboutData";
import { DummyProjectData } from "./data/projectData";

import { RenderSimpleMode } from "./simple/SimpleMode";



import { InitComponents } from "./components/";
import { RenderSections } from "./sections";
import { RerenderSections } from "./utils/ReRender";
import { Component, RenderComponent } from "./components/RenderComponent";

let isSimpleMode = true;

const root = document.getElementById("root")!;

const appComponent = new Component(
    document.createElement("div"),
    "",
    `
        <h1>Wow what a cool app!</h1>
    `,
    root,
    undefined,
    ["app-container"]
)

RenderComponent(appComponent);


const SwitchDisplayMode = (setTo: boolean): void => {
    isSimpleMode = setTo;
    console.log(`Is in simple mode? ${isSimpleMode}`);
    RerenderSections();
    if(isSimpleMode) RenderSimpleMode(aboutData, DummyProjectData);
    else RenderSections(aboutData, DummyProjectData);
}

InitComponents(SwitchDisplayMode);
SwitchDisplayMode(true);