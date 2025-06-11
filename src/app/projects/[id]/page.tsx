// filepath: d:\documentos\Projeto Portifolio\personalfolio\src\app\projects\[slug].tsx
"use client"
import { Container, Flex, Text, Image, Box, VStack, Heading, IconButton, Spinner, Button, Center, HStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ProjectType, HardSkillType } from "@/types/profile";
import { useParams, useRouter } from "next/navigation";
import { IoReturnUpBack } from "react-icons/io5";
import TechIcon from "@/components/techicon";
import Link from "next/link";


export default function ProjectDetailPage() {
  const [project, setProject] = useState<ProjectType | null>(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const router = useRouter();

  useEffect(() => {
    if (id) {
      const fetchProjectDetails = async () => {
        setLoading(true);
        try {
          const response = await fetch(`/api/projects`);
          if (!response.ok) {
            throw new Error("Failed to fetch projects list");
          }
          const projects: ProjectType[] = await response.json();
          
          const foundProject = projects.find((p) => p.id === Number(id));
          if (!foundProject) {
            throw new Error("Project not found");
          }
          setProject(foundProject);
        } catch (error) {
          console.error("Error fetching project details:", error);
          setProject(null);
        } finally {
          setLoading(false);
        }
      };
      fetchProjectDetails();
    } else {
      setLoading(false);
      setProject(null);
    }
  }, [id]);

  if (loading) {
    return (
      <Container as="main" maxW="container.lg" py={8} centerContent>
        <Spinner size="xl" />
      </Container>
    );
  }

  if (!project) {
    return (
      <Container as="div" maxW="container.lg" py={8} centerContent>
        <VStack gap={4}>
          <Text fontSize="xl" fontWeight="bold">Project Not Found</Text>
          <Text>The project you are looking for does not exist or could not be loaded.</Text>
          <Button onClick={() => router.push('/projects')} colorScheme="teal">
            Back to Projects
          </Button>
        </VStack>
      </Container>
    );
  }

  const projectImageSrc = project.src || "https://via.placeholder.com/300x200.png?text=Project+Image";
  return (
    <Container as="main" maxW="65%" paddingX={12} paddingY={4}>
      <IconButton
        aria-label="Go back"
        onClick={() => router.back()}
        mb={4}
        variant="outline"
        size="xl"
      >
        <IoReturnUpBack className="scale-[1.5]"/>
      </IconButton> 

      <Flex 
        direction="column" 
        borderRadius="lg"
        border={"0"} 
      >
        <Heading as="div"  gap={4} mb={6} direction={"row"} display={"flex"} alignItems={"center"} fontWeight="bold">
          <Text as={"h1"} fontSize={26}> {project.name} </Text>
            <Link href={project.repository} target="_blank" rel="noopener noreferrer">
              <Button>View Repository</Button>
            </Link>
        </Heading>

        <Flex direction={{ base: "column", md: "row" }} gap={{ base: 4, md: 6 }}>
          <Box 
            flexShrink={0} 
            w={{ base: "100%", md: "400px" }} 
            h="auto" 
            borderRadius="md" 
            overflow="hidden"
            boxShadow={"0 0px 20px 2px rgba(0, 0, 0, 0.274)"} 
          >
            <Image 
              src={projectImageSrc} 
              alt={`Image of ${project.name}`} 
              objectFit="cover" 
              width="100%" 
              height="100%"
            />
          </Box>
          <Box flex="1">
            <Text fontSize="md" whiteSpace="pre-wrap" color="gray.700" _dark={{ color: "gray.300" }}>
              {project.description}
            </Text>
          </Box>
        </Flex>

        <Heading as="h2" size="lg" mt={8} mb={4} fontWeight="semibold">
          Technologies
        </Heading>
        <HStack flexWrap={"wrap"} gap={3} align="start">
          {project.technologies && project.technologies.length > 0 ? (
            project.technologies.map((tech: HardSkillType) => (
              <Flex key={tech.name} display="flex" width={"fit-content"} alignItems="center" border={"1px solid #8d8d8d8b"} borderRadius="md" p={2} >
                  <TechIcon src={tech.src} name={tech.name} />
              </Flex>
            ))
          ) : (
            
            <Text>No technologies listed for this project.</Text>
          )}
        </HStack>
      </Flex>
    </Container>
  );
}