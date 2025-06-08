import { Flex, Text, Box, Card, VStack, Image, HStack, StackSeparator } from "@chakra-ui/react"
import ButtonPopover from "./buttonPopover"
import TechIcon from "./techicon"

export default function SoftSkills() {
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
                <ButtonPopover
                    title="Versatile"
                    description="I’m comfortable working across the full stack — from crafting responsive UIs to designing scalable backend systems."
                />
                <ButtonPopover
                    title="Detail-oriented"
                    description="I care deeply about the little things, whether it's writing clean code, optimizing performance, or refining the user experience. I believe small details make a big difference"
                />
                <ButtonPopover
                    title="Problem-solver"
                    description="I enjoy tackling complex problems and turning them into practical, efficient solutions. Debugging, optimizing, and architecting systems are challenges I embrace with curiosity and focus."
                />
                <ButtonPopover
                    title="Collaborative"
                    description="I thrive in team environments and enjoy working closely with designers, developers, and stakeholders. Clear communication and collaboration are key to building great products, and I always strive to support and learn from those around me"
                />
            </HStack>
        </Flex>
    )
}