import { GetRandomHeader } from "../utils/randomHeader";

export function InitHeader(){
    let currentHeader = "daviswilliams.dev";

    const header = document.getElementById("site-header");
    if(!header) return;

    header.classList.add('txt-highlight-p-co');

    header.addEventListener("click", () => {
        currentHeader = GetRandomHeader();
        header.textContent = currentHeader + ".dev";
    })
}