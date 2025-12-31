import { GetRandomHeader } from "../utils/randomHeader";

export function InitHeader(){
    let currentHeader;
    const header = document.createElement("header");
    header.classList.add('txt-highlight-p-co');
    header.textContent = "daviswilliams.dev";



    header.addEventListener("click", () => {
        currentHeader = GetRandomHeader();
        header.textContent = currentHeader + ".dev";
    })
}