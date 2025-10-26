import type { customizationOptions } from "../data/customizationOptions";

export type CustomizationState = {
    [K in keyof typeof customizationOptions]:
        typeof customizationOptions[K] extends string[] ? string : boolean;
}