import { Container, Flex, Text, Card, Avatar, Button, Stack, Field, Input, Textarea } from "@chakra-ui/react";
import ContactForm from "@/components/contactForm";
import ContactIcons from "@/components/ContactIcons";

export default function Contact() {
    return (
        <Container as="main" width="65%" gap={8}>
            <Flex mb={4} width={"100%"} direction={"column"} justifyContent={"start"} alignItems={"start"}>
                <Text as="h1" fontSize={24}>Contact</Text>
                <Text as="h1" fontSize={24} fontWeight={"bold"}>Me</Text>
            </Flex>
            <Flex width={"100%"} gap="4" justifyContent="space-between" alignItems="start">
                <ContactForm />
                <ContactIcons />
            </Flex>
        </Container>
    );
}