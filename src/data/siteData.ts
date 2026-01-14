import { CGConsoleImg, ContradictiveGamesImg, HeadshotImg } from "../assets";
import type { AboutInfo, Project } from "../types";

const aboutData: AboutInfo = {
    h2: "My name is <span class='txt-highlight-p-co'>Davis</span>.",
    h3: "A <span class='txt-highlight-s-co'>Software Engineer</span> based out of South Carolina",
    description: {
        shortest: "Welcome!",
        short: "Welcome to my portfolio. This is where I share the projects I've worked on.",
        normal: "Welcome to my portfolio. Here you'll find projects I've built, along with some background on who I am and the kind of work I enjoy doing.",
        longer: `
            Welcome to my portfolio. I enjoy building things and learning through hands-on work. 
            This site highlights a selection of projects I've worked on, with more detailed descriptions 
            of how they were built and what I learned along the way.`,
        everything: `
            Welcome to my portfolio. I'm a software engineer who enjoys learning by building real projects.
            Everything here represents work I've done, and each
            project reflects different problems I wanted to solve or technologies I wanted to learn.`
    },
    img: HeadshotImg
}

const DummyProjectData: Project[] = [
    {
        projectName: "Neon Rain",
        projectImg: "https://bwsrltsxndfbxnthgmlt.supabase.co/storage/v1/object/sign/Personal%20Projects/NeonRainGameplay.PNG?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80MGIxMDcyMS1jZjI2LTQxZWMtOTZkNy1lYzdkYmUwNGNhNjUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQZXJzb25hbCBQcm9qZWN0cy9OZW9uUmFpbkdhbWVwbGF5LlBORyIsImlhdCI6MTc2NjA1MDQ1OCwiZXhwIjo0ODg4MTE0NDU4fQ.Tw9zP1nXUzbBJI2sR57PXL-ych9zt825gRaEjylMsV4",
        techUsed: ["Unity", "C#"],
        projectDescription: {
            shortest: "2D top-down shooter built in Unity.",
            short: "A 2D top-down shooter built in Unity using C#, featuring a complete game loop.",
            normal: "A 2D top-down shooter built in Unity with C# that features a complete game loop, including combat, progression, and player upgrades.",
            longer: "A 2D top-down shooter built in Unity using C#. The game includes a complete loop with enemies, progression systems, player upgrades, and basic UI such as menus and in-game feedback.",
            everything: "Neon Rain is an earlier and archived 2D version of a project I'm still actively working on. This version of the game was built in Unity using C# and includes a complete game loop, main menu, UI management, player abilities, and upgrade systems. While it reflects an earlier stage in my development journey, it was an important project in my learning and helped establish many of the systems I continue to use across all of my other game projects."
        },
        links: ["", "https://github.com/dwilliams304/NeonRain"]
    },
    {
        projectName: "HRF: Asylum Reports Generator",
        projectImg: "https://bwsrltsxndfbxnthgmlt.supabase.co/storage/v1/object/sign/Personal%20Projects/HRF-Banner2.PNG?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80MGIxMDcyMS1jZjI2LTQxZWMtOTZkNy1lYzdkYmUwNGNhNjUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQZXJzb25hbCBQcm9qZWN0cy9IUkYtQmFubmVyMi5QTkciLCJpYXQiOjE3NjYwNTA0OTYsImV4cCI6MTkyMzczMDQ5Nn0.dQLo5dTviyxZ9ciHuI2zgisVhhUqXHz3-AVcHONyNss",
        techUsed: ["JavaScript", "Redux", "React", "CSS"],
        projectDescription: {
            shortest: "Full-stack web app for visualizing asylum data.",
            short: "A full-stack web application that fetches and visualizes asylum data using external APIs.",
            normal: "A full-stack web application built with React and Redux that fetches asylum data from external APIs and displays it using charts and graphs.",
            longer: "A full-stack web application built with React, Redux, and Node.js that fetches asylum-related data from external APIs and presents it through interactive charts and visual reports. The app also supports user authentication via Auth0.",
            everything: "I contributed to the development of a full-stack asylum report creation website which utilizes React, Redux, JavaScript, CSS, and Node.js. I primarily focused on building the data visualization components which consumed an external API to generate charts/graphs for reporting/analysis, and also integrated Auth0 into the project. Additionally, I participated in remote stand-ups where I would present my development progress and features that I successfully implemented."
        },
        links: ["https://asylum-rg-fe.vercel.app/", "https://github.com/dwilliams304/asylum-rg-fe-starter"]
    },
    {
        projectName: "TypeScript Job Board",
        projectImg: "https://bwsrltsxndfbxnthgmlt.supabase.co/storage/v1/object/sign/Personal%20Projects/ts-job-board.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80MGIxMDcyMS1jZjI2LTQxZWMtOTZkNy1lYzdkYmUwNGNhNjUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQZXJzb25hbCBQcm9qZWN0cy90cy1qb2ItYm9hcmQucG5nIiwiaWF0IjoxNzYyMDQ5MDY3LCJleHAiOjE3OTM1ODUwNjd9.BykxLFkR3SN3CT0IGXZZZEnAwBQJ8l88mbLFJdbpgE0",
        techUsed: ["TypeScript", "React", ".NET", "C#", "Tailwind"],
        projectDescription: {
            shortest: "Mock job board built with TypeScript and .NET.",
            short: "A full-stack mock job board with a .NET CRUD API and a React/TypeScript frontend.",
            normal: "A full-stack mock job board built with a .NET CRUD API connected to MongoDB and a React/TypeScript frontend styled with Tailwind.",
            longer: "A full-stack mock job board built using a .NET API connected to MongoDB and a React/TypeScript frontend styled with Tailwind. The application supports client-side routing, job searching, filtering, and responsive layouts.",
            everything: "I designed and built a full-stack job board application from scratch. The backend is a RESTful CRUD API built with .NET Core and C#, connected to a MongoDB database deployed on Azure. The frontend is a responsive single-page application built with React and TypeScript, using react-router for navigation. The app includes job searching and filtering by location, experience level, and posting age, and is styled with TailwindCSS for a clean and readable layout."
        },
        links: ["https://job-board-five-bice.vercel.app/", "https://github.com/dwilliams304/job-board"]
    },
    {
        projectName: "Contradictive Games",
        projectImg: ContradictiveGamesImg,
        techUsed: ["TypeScript", "React", "CSS"],
        projectDescription: {
            shortest: "Website used to showcase my game projects.",
            short: "A website built to showcase and organize my game development projects.",
            normal: "A personal website built to showcase my game development work and provide a central place for project updates and links.",
            longer: "A website built to showcase my game development projects, providing information, visuals, and links for each game in one place.",
            everything: "Contradictive Games is my personal site for showcasing the games I've worked on. It serves as a central hub for project information, visuals, and external links, and gives me a place to present my work in a clean and structured way."
        },
        links: ["https://www.contradictivegames.com/", ""]
    },
    {
        projectName: "CGConsole",
        projectImg: CGConsoleImg,
        techUsed: ["Unity", "C#"],
        projectDescription: {
            shortest: "Custom developer console package for Unity.",
            short: "A customizable developer console package for Unity built with C#.",
            normal: "A customizable developer console package for Unity built with C#, using attributes to define custom commands.",
            longer: "A customizable developer console package for Unity built with C#. Commands are defined using attributes, support typed arguments, and return structured responses when executed.",
            everything: "CGConsole is a customizable developer console package built for Unity using C#. It allows users to define their own commands using C# attributes, which includes support for typed arguments as well as structured responses when executing a command. This project includes command suggestions, descriptions, and configurable naming validation using regex. Several default behaviors and commands can be enabled/disabled through the Unity project settings, allowing the package to be tailored to your project's needs."
        },
        links: ["", "https://github.com/Contradictive-Games/RGS-CGConsole"]
    },
]


export function FetchSiteData(): [AboutInfo, Project[]] {
    const about = aboutData;

    const projects = DummyProjectData;

    return [about, projects]
}