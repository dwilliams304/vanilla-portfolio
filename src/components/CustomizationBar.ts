import type { customizationOptions } from "../data/customizationOptions";


export function CustomizationBar(options: typeof customizationOptions){
    const bar = document.getElementById("customization-bar");
    if(!bar) return;


    bar.innerHTML = `
        <h2 class='bar-header'>Customization</h2>
    `;

    const optionsContainers = document.createElement("div");
    optionsContainers.classList.add("customization-options")
    for (const [key, value] of Object.entries(options)){
        const container = document.createElement("div");
        container.classList.add("option-container");

        const label = document.createElement("label");
        label.textContent = key.charAt(0).toUpperCase() + key.slice(1);
        label.htmlFor = key;
        container.appendChild(label);

        if(Array.isArray(value)){
            const select = document.createElement("select");
            select.id = key;
            value.forEach(option => {
                const opt = document.createElement("option");
                opt.value = option;
                opt.textContent = option;
                select.appendChild(opt);
            });

            select.addEventListener("change", () => {
                console.log("Value in select has been changed!");
            })

            container.appendChild(select);
            optionsContainers.appendChild(container);
        }
        else{
            const toggle = document.createElement("input")
            toggle.type = "checkbox";
            toggle.id = key;
            
            container.appendChild(toggle);
            optionsContainers.appendChild(container);
        }
        
        bar.appendChild(optionsContainers);
        
    }
}