import "./styles/reset.css";

import "./styles/index.css";
import "./styles/layout.css";
import "./styles/sections.css";

import "./styles/simplemode_root.css";
import "./styles/simplemode_layout.css";
import "./styles/simplemode_sections.css";

import { CreateComponent } from "./element-creators/CreateComponent";

import { RenderAllSections } from "./sections";
import { RenderLayout, 
    OpenBarButton, 
    RenderCustomizationBar } from "./layout";

import { FetchSiteData } from "./data/siteData";
import { UIState } from "./state/UIState";
import { mountComponent, 
    ApplySimpleMode,
    ApplyColor} from "./utils";
import type { SiteOptions } from "./types";
import { primaryColorProperty, textColorProperty } from "./utils/constants";
import { ApplyAllColors } from "./utils/ApplyColors";



const root = document.getElementById("root")!;
const app = CreateComponent({ className: `app` });

mountComponent(root, app);


const [aboutData, projectData] = FetchSiteData();

const {sections, updateBrevity} = RenderAllSections(aboutData, projectData);


const layout = RenderLayout(app);

const customizationCallbacks = {
     onBrevityChange(brevity: SiteOptions["brevity"]) { 
        updateBrevity(brevity); 
    },
    
    onStyleChange(style: SiteOptions["style"]) { 
        console.log(style); 
    },
    
    onSimpleModeChange(simpleMode: boolean) {
        UIState.simpleMode = simpleMode;
        ApplySimpleMode(app);
    },

    onPrimaryColorChange(color: string) {
        UIState.colors.primaryColor = color;
        ApplyColor(app, primaryColorProperty, color);
    },
    
    onTextColorChange(color: string) {
        UIState.colors.primaryColor = color;
        ApplyColor(app, textColorProperty, color);
    },
}


const customizationBar = RenderCustomizationBar(customizationCallbacks);


const openBarButton = OpenBarButton(customizationBar);


mountComponent(app, ...layout, sections);
mountComponent(root, customizationBar, openBarButton);
ApplySimpleMode(app);

ApplyAllColors(app, UIState.colors);