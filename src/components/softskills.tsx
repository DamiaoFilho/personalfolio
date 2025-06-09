import { Flex, Text, Box, HStack, For, VStack } from "@chakra-ui/react"
import ButtonPopover from "./buttonPopover"
import { useEffect, useState } from "react"
import { SoftSkillType } from "@/types/profile"
import { Boxes } from "lucide-react"

export default function SoftSkills() {
    const [softsSkills, setSoftSkills] = useState<SoftSkillType[]>([]);

    useEffect(() => {
        const fetchSoftSkills = async () => {
            const response = await fetch("/api/softskills");
            const data: SoftSkillType[] = await response.json();
            setSoftSkills(data);
        };
        fetchSoftSkills();
    }, [])


    return (
        <Flex as="section" direction={"column"} width={"100%"} justifyContent={"center"} padding={4} gap={4}>
            <Flex width={"100%"} direction={"column"} justifyContent={"start"} alignItems={"start"}>
                <Text fontSize={24}>Soft</Text>
                <Text fontSize={24} fontWeight={"bold"}>Skills</Text>
            </Flex>
            <HStack
                justifyContent={"space-between"}
                gap={8}
                width={"100%"}
                separator={
                    <Box
                        width="12px"
                        height="12px"
                        borderRadius="100%"
                        bg="gray.300"
                        display="inline-block"
                    />
                }
            >
                {softsSkills.length > 0 ? (
                    <HStack
                        justifyContent="space-between"
                        gap={8}
                        wrap={"wrap"}
                        width={"100%"}
                        separator={
                            <Box
                                width="12px"
                                height="12px"
                                borderRadius="full"
                                bg="gray.300"
                                display="inline-block"
                            />
                        }
                    >
                        {softsSkills.map((skill) => (
                            <ButtonPopover
                                key={skill.name}
                                title={skill.name}
                                description={skill.description}
                            />
                        ))}
                    </HStack>
                ) : (
                    <VStack width="100%" justifyContent="center" textAlign="center" fontWeight="medium">
                        <Boxes />
                        No soft skills found
                    </VStack>
                )}
            </HStack>
        </Flex>
    )
}