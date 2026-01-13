import { CGConsoleImg, ContradictiveGamesImg, HeadshotImg } from "../assets";
import type { AboutInfo, Project } from "../types";

const aboutData: AboutInfo = {
    h2: "My name is <span class='txt-highlight-p-cul'>Davis</span>.",
    h3: "A <span class='txt-highlight-s-co'>Software Engineer</span> based out of South Carolina",
    description: {
        shortest: "Welcome!",
        short: "Welcome to my portfolio! This is where I showcase all of my projects.",
        normal: "Welcome to my portfolio! This is where all of my projects that I've made will be showcased. Here you can view some basic information about both me, as well as some details about each of the projects that I've worked on.",
        longer: `
            Welcome to my portfolio! I'm someone who greatly enjoys creating and learning new things. On this site, you can see some more detailed information 
            about each of my projects that I am showcasing here. Everything you see here are things that I'm definitely proud of. `,
        everything: "Very long description!"
    },
    img: HeadshotImg
}

const DummyProjectData: Project[] = [
    {
        projectName: "Neon Rain",
        projectImg: "https://bwsrltsxndfbxnthgmlt.supabase.co/storage/v1/object/sign/Personal%20Projects/NeonRainGameplay.PNG?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80MGIxMDcyMS1jZjI2LTQxZWMtOTZkNy1lYzdkYmUwNGNhNjUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQZXJzb25hbCBQcm9qZWN0cy9OZW9uUmFpbkdhbWVwbGF5LlBORyIsImlhdCI6MTc2NjA1MDQ1OCwiZXhwIjo0ODg4MTE0NDU4fQ.Tw9zP1nXUzbBJI2sR57PXL-ych9zt825gRaEjylMsV4",
        techUsed: ["Unity", "C#"],
        projectDescription: {
            shortest: "2D top-down shooter game made in Unity.",
            short: "'Neon Rain' is a 2D top-down shooter game with a complete game loop made within the Unity engine, using C#.",
            normal: "Normal description",
            longer: "Long description",
            everything: "Very long description!"
        },
        links: ["", "https://github.com/dwilliams304/NeonRain"]
    },
    {
        projectName: "HRF: Asylum Reports Generator",
        projectImg: "https://bwsrltsxndfbxnthgmlt.supabase.co/storage/v1/object/sign/Personal%20Projects/HRF-Banner2.PNG?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80MGIxMDcyMS1jZjI2LTQxZWMtOTZkNy1lYzdkYmUwNGNhNjUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQZXJzb25hbCBQcm9qZWN0cy9IUkYtQmFubmVyMi5QTkciLCJpYXQiOjE3NjYwNTA0OTYsImV4cCI6MTkyMzczMDQ5Nn0.dQLo5dTviyxZ9ciHuI2zgisVhhUqXHz3-AVcHONyNss",
        techUsed: ["JavaScript", "Node", "Redux", "React"],
        projectDescription: {
            shortest: "Website built with React/Redux.",
            short: "Short description.",
            normal: "Basic normal description",
            longer: "Long description",
            everything: "Very long description!"
        },
        links: ["https://asylum-rg-fe.vercel.app/", "https://github.com/dwilliams304/asylum-rg-fe-starter"]
    },
    {
        projectName: "TypeScript Job Board",
        projectImg: "https://bwsrltsxndfbxnthgmlt.supabase.co/storage/v1/object/sign/Personal%20Projects/ts-job-board.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80MGIxMDcyMS1jZjI2LTQxZWMtOTZkNy1lYzdkYmUwNGNhNjUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQZXJzb25hbCBQcm9qZWN0cy90cy1qb2ItYm9hcmQucG5nIiwiaWF0IjoxNzYyMDQ5MDY3LCJleHAiOjE3OTM1ODUwNjd9.BykxLFkR3SN3CT0IGXZZZEnAwBQJ8l88mbLFJdbpgE0",
        techUsed: ["TypeScript", "Node", "React", ".NET", "C#", "TailwindCSS"],
        projectDescription: {
            shortest: "Mock job-board made with TypeScript/.NET.",
            short: "",
            normal: "Normal description",
            longer: "Long description",
            everything: "Very long description!"
        },
        links: ["https://job-board-five-bice.vercel.app/", "https://github.com/dwilliams304/job-board"]
    },
    {
        projectName: "Contradictive Games",
        projectImg: ContradictiveGamesImg,
        techUsed: ["TypeScript", "Node", "React", "CSS"],
        projectDescription: {
            shortest: "Website built to showcase all my games.",
            short: "A website built to showcase all my games.",
            normal: "Normal description",
            longer: "Long description",
            everything: "Very long description!"
        },
        links: ["https://www.contradictivegames.com/", ""]
    },
    {
        projectName: "CGConsole",
        projectImg: CGConsoleImg,
        techUsed: ["Unity", "C#"],
        projectDescription: {
            shortest: "Developer console package made for Unity.",
            short: "Short description.",
            normal: "Normal description",
            longer: "Long description",
            everything: "Very long description!"
        },
        links: ["", "https://github.com/Contradictive-Games/RGS-CGConsole"]
    },
]


export function FetchSiteData(): [AboutInfo, Project[]] {
    const about = aboutData;

    const projects = DummyProjectData;

    return [about, projects]
}