import type { ICustomOptions } from "../data/customizationOptions";
import { CustomizationBar } from "./CustomizationBar";
import { InitHeader } from "./Header";


export function InitComponents(customizationOptions: ICustomOptions){
    CustomizationBar(customizationOptions);
    InitHeader();
}