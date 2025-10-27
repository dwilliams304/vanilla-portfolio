import type { customizationOptions } from "./data/customizationOptions";

export type AboutInfo = {
    h2: string,
    h3: string,
    description: string,
    img: string
}

export type Project = {
    projectName: string;
    projectImg: string;
    techUsed: string[];
    projectDescription: string;
    links: [string, string];
}

export type CustomizationValue = string[] | "toggle";

export interface ICustomOptions {
    [key: string]: CustomizationValue;
}

export type CustomizationState = {
    [K in keyof typeof customizationOptions]:
        typeof customizationOptions[K] extends string[] ? string : boolean;
}