export type CustomizationValue = string[] | "toggle";

export interface ICustomOptions {
    [key: string]: CustomizationValue;
}

export const customizationOptions: ICustomOptions = {
    theme: ["Retro", "Sci-Fi"],
    experience: ["Game", "Mystery"],
    brevity: ["Qck", "Short", "Medium Length", "Very Long Descriptions Please!"],
    darkMode: "toggle"
}