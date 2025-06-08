import { NextResponse } from "next/server";


export async function GET() {
    const data = [
        {
            name: "Frontend",
            skills: [
                { name: "Angular", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
                { name: "Vite.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg" }
            ]
        },
        {
            name: "Backend",
            skills: [
                { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
                { name: "Express", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" }
            ]
        },
        {
            name: "DevOps",
            skills: [
                { name: "Docker", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
                { name: "GitHub Actions", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" }
            ]
        },
        {
            name: "Languages",
            skills: [
                { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
                { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" }
            ]
        }
    ];
    return NextResponse.json(data)
}