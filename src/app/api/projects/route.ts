import { NextResponse } from "next/server";

export async function GET() {
    const data = [
      {
        id: 1,
        name: "EmotiPet",
        description:
          "EmotiPet is a system to help pet owners analyze their animals' emotions through images to identify possible signs of stress, sadness or happiness, thus allowing early detection of health or behavioral problems.",
        src: "/projects/emotipet.png",
        repository: "https://github.com/ddl-devs",
        technologies: [
            { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
            { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
            { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
            { name: "Next.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
            { name: "Java", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
            { name: "Spring Boot", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
            { name: "Docker", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
            { name: "PostgreSQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
            { name: "JaCoCo", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jacoco/jacoco-original.svg" },
            { name : "GitActions", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        ]
      },
      {
        id: 2,
        name: "Motocar",
        description:
          "Motocar aims to facilitate the provision of transportation services through motorcycle taxis and offer an easy-to-access environment where users can request rides without having to communicate directly with motorcycle taxi drivers. This service is provided by receiving the departure and destination points and using them to calculate the amount to be paid based on the distance between the points. With this, the user will be able to cancel, update and delete such rides, as well as make their payments.",
        src: "/projects/motocar.png",
        repository: "https://github.com/orgs/Integrador-Motoeste/repositories",
        technologies: [
            { name: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
            { name: "Expo", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/expo/expo-original.svg" },
            { name: "React Native", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
            { name: "Django", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-original.svg" },
            { name: "PostgreSQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        ]
      }
    ]
    return NextResponse.json(data)
}