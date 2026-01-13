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

export type {
    SiteOptions,
    ColorProperties
}