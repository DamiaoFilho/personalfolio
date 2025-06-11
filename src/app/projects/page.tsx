"use client"
import { Card, Container, Flex, Text, Image, Box, Button, For, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ProjectType } from "@/types/profile"
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ProjectsPage() {
  const [projectType, setProjectType] = useState<ProjectType[]>([])

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch("/api/projects");
      const data: ProjectType[] = await response.json();
      setProjectType(data);
    }
    fetchProjects();
  },[])

  return (
    <Container as={"main"} width={"65%"}>
        <Flex as="section" direction={"column"} width={"100%"} justifyContent={"center"} padding={4} gap={4}>
            <Flex as="h1" width={"100%"} direction={"column"} justifyContent={"start"} alignItems={"start"}>
                <Text fontSize={24}>Main</Text>
                <Text fontSize={24} fontWeight={"bold"}>Projects</Text>
            </Flex>
            <Flex width={"100%"}>
              <VStack>
                <For each={projectType} fallback={
                  <Flex width="100%" justifyContent="center" textAlign="center" fontWeight="medium">
                    <Text>No projects found</Text>
                  </Flex>
                }>
                  {(project, index) => (
                    <Card.Root border={"0"} paddingY={5} overflow="hidden" height="auto" maxW="100%" justifyContent={"center"} alignItems={"center"} key={project.name}>
                      <Image
                        src={project.src || "https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8fHw%3D&auto=format&fit=crop&w=800&q=60"}
                        alt="Project Banner"
                        objectFit="cover"
                        position="absolute"
                        zIndex={0}
                        width="100%"
                        height="100%"
                        borderRadius="md"
                        opacity={0.2}
                        filter="blur(10px)"
                      />
                      <Flex zIndex={10} height="100%" flexDirection={` ${index %2 === 0 ? "row": "row-reverse"}`} gap={2} maxW="90%" flexWrap={"wrap"} justifyContent={"center"} alignItems={"center"}>
                        <Image
                          boxShadow={"0 0px 50px 5px rgba(0, 0, 0, 0.274)"}
                          objectFit="cover"
                          width="350px"
                          height="200px"
                          src={project.src || "https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8fHw%3D&auto=format&fit=crop&w=800&q=60"}
                          alt="Project Image"
                          borderRadius="md"
                          
                          />
                        <Box padding={` ${index %2 === 0 ? "0 0 0 24px": "0 24px 0 0"}`} maxW="50%" height="100%" minW="30%" display={"flex"} flexDirection="column" justifyContent="space-between">
                          <Card.Body padding={0}>
                            <Card.Title mb="2" fontSize={26}>{project.name}</Card.Title>
                            <Card.Description 
                              truncate
                              lineClamp={4}>
                                {project.description}
                            </Card.Description>
                          </Card.Body>
                          <Card.Footer padding={0} justifyContent={"right"}>
                            <Link href={`/projects/${project.id}`}> <Button>Details</Button> </Link>
                          </Card.Footer>
                        </Box>
                      </Flex>
                    </Card.Root>
                  )}
                </For>
              </VStack>
            </Flex>
        </Flex>
    </Container>
  );
}