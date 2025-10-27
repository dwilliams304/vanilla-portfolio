
/*
    This file exists to test project data being listed, to prevent too many DB fetch requests.
*/

import type { Project } from "../types";



export const DummyProjectData: Project[] = [
    {
        projectName: "Neon Rain",
        projectImg: "https://bwsrltsxndfbxnthgmlt.supabase.co/storage/v1/object/sign/Personal%20Projects/ts-job-board.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJQZXJzb25hbCBQcm9qZWN0cy90cy1qb2ItYm9hcmQucG5nIiwiaWF0IjoxNzM0NTcwMzYxLCJleHAiOjE3MzcxNjIzNjF9.lH1Vb-ZKtANSDjNehHMjY_lwDixIf86NmkrUyA1JDsY&t=2024-12-19T01%3A06%3A01.408Z",
        techUsed: ["Unity", "C#"],
        projectDescription: "A 2D top-down shooter game made within the Unity engine.",
        links: ["https://github.com", "https://github.com"]
    },
    {
        projectName: "HRF: Asylum Reports Generator",
        projectImg: "https://bwsrltsxndfbxnthgmlt.supabase.co/storage/v1/object/sign/Personal%20Projects/ts-job-board.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJQZXJzb25hbCBQcm9qZWN0cy90cy1qb2ItYm9hcmQucG5nIiwiaWF0IjoxNzM0NTcwMzYxLCJleHAiOjE3MzcxNjIzNjF9.lH1Vb-ZKtANSDjNehHMjY_lwDixIf86NmkrUyA1JDsY&t=2024-12-19T01%3A06%3A01.408Z",
        techUsed: ["JavaScript", "Node", "Redux", "React"],
        projectDescription: "A tool to explore USCIS data on Asylum Office decisions.",
        links: ["https://github.com", "https://github.com"]
    },
    {
        projectName: "Weather App",
        projectImg: "https://bwsrltsxndfbxnthgmlt.supabase.co/storage/v1/object/sign/Personal%20Projects/ts-job-board.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJQZXJzb25hbCBQcm9qZWN0cy90cy1qb2ItYm9hcmQucG5nIiwiaWF0IjoxNzM0NTcwMzYxLCJleHAiOjE3MzcxNjIzNjF9.lH1Vb-ZKtANSDjNehHMjY_lwDixIf86NmkrUyA1JDsY&t=2024-12-19T01%3A06%3A01.408Z",
        techUsed: ["JavaScript", "Node", "React"],
        projectDescription: "A React website that can tell you the weather/conditions of any city.",
        links: ["https://github.com", "https://github.com"]
    },
    {
        projectName: "Portfolio Website",
        projectImg: "https://bwsrltsxndfbxnthgmlt.supabase.co/storage/v1/object/sign/Personal%20Projects/ts-job-board.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJQZXJzb25hbCBQcm9qZWN0cy90cy1qb2ItYm9hcmQucG5nIiwiaWF0IjoxNzM0NTcwMzYxLCJleHAiOjE3MzcxNjIzNjF9.lH1Vb-ZKtANSDjNehHMjY_lwDixIf86NmkrUyA1JDsY&t=2024-12-19T01%3A06%3A01.408Z",
        techUsed: ["JavaScript", "Node", "React"],
        projectDescription: "A React website built to showoff all of my projects.",
        links: ["https://github.com", "https://github.com"]
    },
]