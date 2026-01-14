import type { SiteOptions } from "../types"

export const UIState: SiteOptions = {
    simpleMode: false,
    style: "Default",
    brevity: "Normal",
    colors: {
        primaryColor: "#02F0A1",
        secondaryColor: "#F00251",
        backgroundColor: "#1E2526",
        textColor: "#F7FFFD",
    }
}

const SiteDefaults: SiteOptions = {
    simpleMode: false,
    style: "Default",
    brevity: "Normal",
    colors: {
        primaryColor: "#02F0A1",
        secondaryColor: "#F00251",
        backgroundColor: "#1E2526",
        textColor: "#F7FFFD",
    }
}

export function ResetToDefaults(){
    UIState.simpleMode = SiteDefaults.simpleMode;
    UIState.style = SiteDefaults.style;
    UIState.brevity = SiteDefaults.brevity;
    UIState.colors = SiteDefaults.colors
}