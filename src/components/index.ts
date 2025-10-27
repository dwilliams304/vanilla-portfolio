import type { ICustomOptions } from "../types";
import { CustomizationBar } from "./CustomizationBar";
import { InitHeader } from "./Header";


export function InitComponents(customizationOptions: ICustomOptions){
    CustomizationBar(customizationOptions);
    InitHeader();
}