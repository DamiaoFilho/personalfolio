import { Flex, Text, Box, Card, VStack, Image, HStack } from "@chakra-ui/react"
import TechIcon from "./techicon"

export default function HardSkills() {
    return (
        <Flex as="section" direction={"column"} width={"100%"} justifyContent={"center"} padding={4} gap={4}>
            <Flex width={"100%"} direction={"column"} justifyContent={"start"} alignItems={"start"}>
                <Text fontSize={24}>Hard</Text>
                <Text fontSize={24} fontWeight={"bold"}>Skills</Text>
            </Flex>
            <HStack justifyContent={"space-between"} gap={8} width={"100%"}>
                <Card.Root width="200px">
                    <Card.Body gap="2">
                        <Card.Title>Frontend</Card.Title>
                        <Box as="ul">
                            <li><TechIcon src="/logos/angular.png" name="Angular"/></li>
                            <li><TechIcon src="logos/vite-js-logo.png" name="Vite.js"/></li>
                        </Box>
                    </Card.Body>
                </Card.Root>
                <Card.Root width="200px">
                    <Card.Body gap="2">
                        <Card.Title>Backend</Card.Title>
                        <Box as="ul">
                            <li><TechIcon src="/logos/angular.png" name="Angular"/></li>
                            <li><TechIcon src="logos/vite-js-logo.png" name="Vite.js"/></li>
                        </Box>
                    </Card.Body>
                </Card.Root>
                <Card.Root width="200px">
                    <Card.Body gap="2">
                        <Card.Title>DevOps</Card.Title>
                        <Box as="ul">
                            <li><TechIcon src="/logos/angular.png" name="Angular"/></li>
                            <li><TechIcon src="logos/vite-js-logo.png" name="Vite.js"/></li>
                        </Box>
                    </Card.Body>
                </Card.Root>
                <Card.Root width="200px">
                    <Card.Body gap="2">
                        <Card.Title>Languages</Card.Title>
                        <Box as="ul">
                            <li><TechIcon src="/logos/angular.png" name="Angular"/></li>
                            <li><TechIcon src="logos/vite-js-logo.png" name="Vite.js"/></li>
                        </Box>
                    </Card.Body>
                </Card.Root>
            </HStack>
        </Flex>
    )
}