export function About(){
    const section = document.getElementById("about");
    if(!section) return;

    section.innerHTML = `
        <div>
            <h2>Placeholder about section</h2>
        </div>
    `;
}