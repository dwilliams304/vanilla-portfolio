import "./styles/reset.css";

import "./styles/index.css";
import "./styles/layout.css";
import "./styles/sections.css";

import "./styles/simplemode_root.css";
import "./styles/simplemode_layout.css";
import "./styles/simplemode_sections.css";

import { RenderComponent } from "./utils/RenderComponent";

import { RenderAllSections } from "./sections";
import { RenderLayout } from "./layout";
import { FetchSiteData } from "./data/siteData";
import { UIState } from "./state/UIState";
import { mountComponent } from "./utils/mountComponent";
import { RenderCustomizationBar } from "./layout/CustomizationBar";

const simpleModeCSSTag = "simple-mode";
const coolModeCSSTag = "cool-mode";


const root = document.getElementById("root")!;
const app = RenderComponent({
    className: "app cool-mode"
});

root.append(app);


const switchDisplayModeButton = RenderComponent({
    element: document.createElement("button"),
    content: "Switch Modes",
    className: "primary-btn",
    onClick: () => UpdateApp()
})


const [aboutData, projectData] = FetchSiteData();

const {sections, updateBrevity} = RenderAllSections(aboutData, projectData);


const layout = RenderLayout(
    app, 
    switchDisplayModeButton, 
    { 
        onBrevityChange(brevity) { 
            updateBrevity(brevity)
        }
    }
);

const customizationBar = RenderCustomizationBar({
    onBrevityChange(brevity) { updateBrevity(brevity); },
    onStyleChange(style) { console.log(style); },
    onSimpleModeChange(simpleMode) {
        UIState.simpleMode = simpleMode;
        app.classList.toggle(simpleModeCSSTag, simpleMode);
        app.classList.toggle(coolModeCSSTag, !simpleMode);
    }
});
mountComponent(root, customizationBar);


const UpdateApp = (): void => {
    UIState.simpleMode = !UIState.simpleMode;
    

    switchDisplayModeButton.textContent = UIState.simpleMode ? "See Cool Fancy Mode" : "See Simple Mode";
    
    app.classList.toggle(simpleModeCSSTag, UIState.simpleMode);
    app.classList.toggle(coolModeCSSTag, !UIState.simpleMode);
    
    mountComponent(app, ...layout, sections)
    RenderComponent(app);
}


UpdateApp();