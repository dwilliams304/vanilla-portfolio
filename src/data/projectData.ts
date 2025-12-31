
/*
    This file exists to test project data being listed, to prevent too many DB fetch requests.
*/

import type { Project } from "../types";



export const DummyProjectData: Project[] = [
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