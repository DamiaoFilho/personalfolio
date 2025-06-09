import { NextResponse } from "next/server";


export async function GET() {
    const data = [
      {
        name: "Versatile",
        description:
          "I’m comfortable working across the full stack — from crafting responsive UIs to designing scalable backend systems.",
      },
      {
        name: "Detail-oriented",
        description:
          "I care deeply about the little things, whether it's writing clean code, optimizing performance, or refining the user experience. I believe small details make a big difference",
      },
      {
        name: "Problem-solver",
        description:
          "I enjoy tackling complex problems and turning them into practical, efficient solutions. Debugging, optimizing, and architecting systems are challenges I embrace with curiosity and focus.",
      },
      {
        name: "Collaborative",
        description:
          "I thrive in team environments and enjoy working closely with designers, developers, and stakeholders. Clear communication and collaboration are key to building great products, and I always strive to support and learn from those around me",
      },
      {
        name: "Adaptable",
        description:
          "I quickly adjust to new technologies, workflows, and project requirements, ensuring smooth progress even in changing environments.",
      },
    ]
    return NextResponse.json(data)
}