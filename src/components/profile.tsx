import { Flex, Box, Text, Button, HStack, Image } from "@chakra-ui/react"

export default function Profile() {
    return (
        <Flex as="section" width={"100%"} justifyContent={"center"} padding={4} gap={8}>
            <Flex direction={"column"} justifyContent={"center"}>
                <Box>
                    <Text as="h1" fontSize={42} fontWeight={"bold"}>Jhon Doe</Text>
                    <Text as="h2" color={"#A1A1A1"} fontSize={24}>Full-Stack Developer</Text>
                </Box >
                <Text marginTop={4} fontSize={14}>
                    I'm a passionate Full Stack Developer with a strong foundation in both front-end and back-end technologies. I specialize in building scalable web applications, designing intuitive user interfaces, and crafting clean, maintainable code. My tech stack includes JavaScript, React, Node.js, Python, and SQL, among others.
                </Text>
                <HStack width={"100%"} marginTop={4} justifyContent={"end"}>
                    <Button colorPalette="teal" variant="outline">
                        Contato
                    </Button>
                    <Button colorPalette="teal" variant="solid">
                        Projetos
                    </Button>
                </HStack>
            </Flex>
            <Image rounded="xl" w={240} h={240} src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
        </Flex>
    )
}