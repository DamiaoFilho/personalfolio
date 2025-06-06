import { Flex, Text, Box, Card } from "@chakra-ui/react"

export default function HardSkills() {
    return (
        <Flex as="section" direction={"column"} width={"100%"} justifyContent={"center"} padding={4} gap={4}>
            <Flex width={"100%"} direction={"column"} justifyContent={"start"} alignItems={"start"}>
                <Text fontSize={24}>Hard</Text>
                <Text fontSize={24} fontWeight={"bold"}>Skills</Text>
            </Flex>
            <Flex width={"100%"}>
                <Card.Root width="200px">
                    <Card.Body gap="2">
                        <Card.Title>Frontend</Card.Title>
                        <Card.Description>
                            This is the card body. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Curabitur nec odio vel dui euismod fermentum.
                            Curabitur nec odio vel dui euismod fermentum.
                        </Card.Description>
                    </Card.Body>
                </Card.Root>
            </Flex>
        </Flex>
    )
}