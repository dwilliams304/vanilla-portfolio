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
import { OpenBarButton, RenderCustomizationBar } from "./layout/CustomizationBar";
import { ApplySimpleMode } from "./utils/ApplySimpleMode";
import { ApplyPrimaryColor, ApplyTextColor } from "./utils/ApplyColors";


const root = document.getElementById("root")!;
const app = RenderComponent({ className: `app` });

mountComponent(root, app);


const [aboutData, projectData] = FetchSiteData();

const {sections, updateBrevity} = RenderAllSections(aboutData, projectData);


const layout = RenderLayout(app);


const customizationBar = RenderCustomizationBar({
    onBrevityChange(brevity) { 
        updateBrevity(brevity); 
    },
    
    onStyleChange(style) { 
        console.log(style); 
    },
    
    onSimpleModeChange(simpleMode) {
        UIState.simpleMode = simpleMode;
        ApplySimpleMode(app);
    },

    onPrimaryColorChange(color) {
        UIState.colors.primaryColor = color;
        ApplyPrimaryColor(app, color);
    },
    
    onTextColorChange(color) {
        UIState.colors.primaryColor = color;
        ApplyTextColor(app, color);
    },

});


const openBarButton = OpenBarButton(customizationBar);


mountComponent(app, ...layout, sections);
mountComponent(root, customizationBar, openBarButton);
ApplySimpleMode(app);
ApplyPrimaryColor(app, UIState.colors.primaryColor);
ApplyTextColor(app, UIState.colors.textColor);