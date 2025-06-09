import { NextResponse } from "next/server";


export async function GET() {
    const data = {
        name: "Jhon Doe",
        role: "Full-Stack Developer",
        description:
            "I'm a passionate Full Stack Developer with a strong foundation in both front-end and back-end technologies. I specialize in building scalable web applications, designing intuitive user interfaces, and crafting clean, maintainable code. My tech stack includes JavaScript, React, Node.js, Python, and SQL, among others."
            + "With a keen eye for detail and a problem-solving mindset, I enjoy turning complex challenges into efficient digital solutions. Whether it's developing APIs, optimizing database performance, or enhancing user experiences, I thrive at every layer of development.",
        avatar: "https://bit.ly/dan-abramov",
    };
    return NextResponse.json(data)
}