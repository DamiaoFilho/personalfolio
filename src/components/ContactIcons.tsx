import { Card, Flex, Text, Box } from "@chakra-ui/react"
import { Mail, Phone, Github, Linkedin, Gitlab } from "lucide-react"
import Link from "next/link"

export default function ContactIcons() {
    return (
        <Card.Root width="50%">
            <Card.Body gap="8">
                <Card.Title mt="2">Contacts</Card.Title>
                <Flex gap={8}>
                    <Flex gap={4}>
                        <Mail size={24} />
                        <Text>jhondoe@example.com</Text>
                    </Flex>
                    <Flex gap={4}>
                        <Phone size={24} />
                        <Text>+123 456 7890</Text>
                    </Flex>
                </Flex>
                <Text>I am also in</Text>
                <Flex gap={4}>
                    <Link href={"#"} target="_blank">
                        <Github size={24} />
                    </Link>
                    <Link href={"#"} target="_blank">
                        <Linkedin size={24} />
                    </Link>
                    <Link href={"#"} target="_blank">
                        <Gitlab size={24} />
                    </Link>
                </Flex>
            </Card.Body>
        </Card.Root>
    )
}