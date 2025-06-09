import { NextResponse } from "next/server";


export async function GET() {
    const data =  {
            email: "jhondoe@example.com",
            phone: "+123 456 7890",
            socialLinks: {
            github: "https://github.com/jhondoe",
            linkedin: "https://linkedin.com/in/jhondoe",
            gitlab: "https://gitlab.com/jhondoe",
            instagram: "https://instagram.com/jhondoe",
        },
    };
    return NextResponse.json(data)
}