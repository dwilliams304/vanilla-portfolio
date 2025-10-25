export interface Options {
    themes: string[]
    brevity: string[]
    experience: string[]
}

export function CustomizationBar(options: Options){
    const bar = document.getElementById("customization-bar");
    if(!bar) return;

    const themeOptions = document.createElement("select");
    bar.appendChild(themeOptions);
    themeOptions.classList.add("theme-options");


    bar.innerHTML = `
        <p class='bar-header'>Placeholder customization bar!</p>
    `
}