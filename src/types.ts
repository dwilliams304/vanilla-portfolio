export type AboutInfo = {
    readonly h2: string,
    readonly h3: string,
    readonly description: string,
    readonly img: string
}

export type Project = {
    readonly projectName: string;
    readonly projectImg: string;
    readonly techUsed: string[];
    readonly projectDescription: string;
    readonly links: [string, string];
}

export type CustomizationValue = string[] | "toggle";