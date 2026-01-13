export type CustomOptions = {
    simpleMode: boolean;
    style: "Default" | "NoStyle" | "Retro";
    brevity: "Short" | "Normal" | "Longer" | "Everything";
    colors: {
        primaryColor: string;
        secondaryColor: string;
        backgroundColor: string;
        textColor: string;
    }
}

