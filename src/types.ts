//Customization
type SiteOptions = {
    simpleMode: boolean;
    style: "Default" | "NoStyle" | "Retro";
    brevity: "Short" | "Normal" | "Longer" | "Everything";
    colors: ColorProperties
}

type ColorProperties = {
    primaryColor: string;
    secondaryColor: string;
    backgroundColor: string;
    textColor: string
}

type ModifiableDescription = {
    short: string;
    normal: string;
    longer: string;
    everything: string;

}



//Components
type Component = {
    element?: HTMLElement
    id?: string;
    content?: string;
    className?: string;
    onClick?: (e: MouseEvent) => void;
    onRender?: (el: HTMLElement) => void;
}



// Site Data
type AboutInfo = {
    readonly h2: string,
    readonly h3: string,
    readonly description: ModifiableDescription,
    readonly img: string
}

type Project = {
    readonly projectName: string;
    readonly projectImg: string;
    readonly techUsed: string[];
    readonly projectDescription: ModifiableDescription;
    readonly links: [string, string];
}



export type {
    Component,
    SiteOptions,
    ColorProperties,

    AboutInfo,
    Project,
    ModifiableDescription
}