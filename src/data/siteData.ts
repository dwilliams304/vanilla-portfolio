export type AboutInfo = {
    readonly h2: string,
    readonly h3: string,
    readonly description: string,
    readonly img: string
}

export type Project = {
    readonly projectName: string;
    readonly projectImg: string;
    readonly techUsed: string[];
    readonly projectDescription: string;
    readonly links: [string, string];
}


const aboutData: AboutInfo = {
    h2: "My name is <span class='txt-highlight-p-cul'>Davis</span>.",
    h3: "A <span class='txt-highlight-s-co'>Software Engineer</span> based out of South Carolina",
    description: "Welcome to my portfolio! Here you can view some information about me, as well as information about some of the projects I've worked on.",
    img: "https://daviswilliams-portfolio.vercel.app/assets/coin-Q8Ml-U-z.jpg" 
}

const DummyProjectData: Project[] = [
    {
        projectName: "Neon Rain",
        projectImg: "https://bwsrltsxndfbxnthgmlt.supabase.co/storage/v1/object/sign/Personal%20Projects/NeonRainGameplay.PNG?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80MGIxMDcyMS1jZjI2LTQxZWMtOTZkNy1lYzdkYmUwNGNhNjUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQZXJzb25hbCBQcm9qZWN0cy9OZW9uUmFpbkdhbWVwbGF5LlBORyIsImlhdCI6MTc2NjA1MDQ1OCwiZXhwIjo0ODg4MTE0NDU4fQ.Tw9zP1nXUzbBJI2sR57PXL-ych9zt825gRaEjylMsV4",
        techUsed: ["Unity", "C#"],
        projectDescription: "A 2D top-down shooter game made within the Unity engine.",
        links: ["https://github.com", "https://github.com"]
    },
    {
        projectName: "HRF: Asylum Reports Generator",
        projectImg: "https://bwsrltsxndfbxnthgmlt.supabase.co/storage/v1/object/sign/Personal%20Projects/HRF-Banner2.PNG?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80MGIxMDcyMS1jZjI2LTQxZWMtOTZkNy1lYzdkYmUwNGNhNjUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQZXJzb25hbCBQcm9qZWN0cy9IUkYtQmFubmVyMi5QTkciLCJpYXQiOjE3NjYwNTA0OTYsImV4cCI6MTkyMzczMDQ5Nn0.dQLo5dTviyxZ9ciHuI2zgisVhhUqXHz3-AVcHONyNss",
        techUsed: ["JavaScript", "Node", "Redux", "React"],
        projectDescription: "A tool to explore USCIS data on Asylum Office decisions.",
        links: ["https://github.com", "https://github.com"]
    },
    {
        projectName: "TypeScript Job Board",
        projectImg: "https://bwsrltsxndfbxnthgmlt.supabase.co/storage/v1/object/sign/Personal%20Projects/ts-job-board.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80MGIxMDcyMS1jZjI2LTQxZWMtOTZkNy1lYzdkYmUwNGNhNjUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQZXJzb25hbCBQcm9qZWN0cy90cy1qb2ItYm9hcmQucG5nIiwiaWF0IjoxNzYyMDQ5MDY3LCJleHAiOjE3OTM1ODUwNjd9.BykxLFkR3SN3CT0IGXZZZEnAwBQJ8l88mbLFJdbpgE0",
        techUsed: ["JavaScript", "Node", "React"],
        projectDescription: "A React website built to showoff all of my projects.",
        links: ["https://github.com", "https://github.com"]
    },
]


export function FetchSiteData(): [AboutInfo, Project[]]{
    const about = aboutData;

    const projects = DummyProjectData;

    return [about, projects]
}