import { Container, Flex, Text } from "@chakra-ui/react";
import { CardProjetcs } from "@/components/projects/CardProjects";

export default function ProjectsPage() {
  return (
    <Container as={"main"} width={"65%"}>
        <Flex as="section" direction={"column"} width={"100%"} justifyContent={"center"} padding={4} gap={4}>
            <Flex as="h1" width={"100%"} direction={"column"} justifyContent={"start"} alignItems={"start"}>
                <Text fontSize={24}>Principais</Text>
                <Text fontSize={24} fontWeight={"bold"}>Projetos</Text>
            </Flex>
            <Flex width={"100%"}>
                <CardProjetcs></CardProjetcs>
            </Flex>
        </Flex>
    </Container>
  );
}