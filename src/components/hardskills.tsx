import { Flex, Text, Box, Card, VStack, HStack, For } from "@chakra-ui/react"
import TechIcon from "./techicon"
import { HardSkillCategoryType } from "@/types/profile";
import { useEffect, useState } from "react";
import { Boxes } from "lucide-react";

export default function HardSkills() {
    const [hardSkills, setHardSkills] = useState<HardSkillCategoryType[]>([]);

    useEffect(() => {
        const fetchHardSkills = async () => {
            const response = await fetch("/api/hardskills");
            const data: HardSkillCategoryType[] = await response.json();
            setHardSkills(data);
        };
        fetchHardSkills();
    }, [])


    return (
        <Flex as="section" direction={"column"} width={"100%"} justifyContent={"center"} padding={4} gap={4}>
            <Flex width={"100%"} direction={"column"} justifyContent={"start"} alignItems={"start"}>
                <Text fontSize={24}>Hard</Text>
                <Text fontSize={24} fontWeight={"bold"}>Skills</Text>
            </Flex>
            <HStack justifyContent={"space-between"} gap={8} width={"100%"}>
                <For each={hardSkills} fallback={
                    <VStack width="100%" justifyContent={"center"} textAlign="center" fontWeight="medium">
                        <Boxes />
                        No hard skills found
                    </VStack>
                }>
                    {(category, index) => (
                        <Card.Root width="200px" key={category.name}>
                            <Card.Body gap="2">
                                <Card.Title>{category.name}</Card.Title>
                                {category.skills.map((skill) => (
                                    <Box key={skill.name} as="ul">
                                        <li><TechIcon src={skill.src} name={skill.name} /></li>
                                    </Box>
                                ))}
                            </Card.Body>
                        </Card.Root>
                    )}
                </For>
            </HStack>
        </Flex>
    )
}