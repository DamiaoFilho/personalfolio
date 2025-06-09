import { ContactInfo } from "@/types/profile"
import { Card, Flex, Text, Box, Spinner } from "@chakra-ui/react"
import { Mail, Phone, Github, Linkedin, Gitlab, Instagram } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function ContactIcons() {
    const [contactData, setContactData] = useState<ContactInfo>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        try {
            setLoading(true);
            const fetchContactData = async () => {
                const response = await fetch("/api/contact");
                if (!response.ok) {
                    throw new Error("Failed to fetch contact data");
                }
                const data: ContactInfo = await response.json();
                setContactData(data);
            };
            fetchContactData();
        }catch (error) {
            console.error("Error fetching contact data:", error);
        }finally {
            setLoading(false);
        }
    }, []);


    return (
        <Card.Root width="50%">
            <Card.Body gap="8">
                <Card.Title mt="2">Contacts</Card.Title>
                {loading && <Spinner size="md" />}
                {contactData && (
                    <>
                    <Flex direction={"column"} gap={8}>
                        <Flex gap={4}>
                            <Mail size={24} />
                            <Text>{contactData.email}</Text>
                        </Flex>
                        <Flex gap={4}>
                            <Phone size={24} />
                            <Text>{contactData.phone}</Text>
                        </Flex>
                    </Flex>
                    <Text>I am also in</Text>
                    <Flex gap={4}>
                        <Link href={contactData.socialLinks.github} target="_blank">
                            <Github size={24} />
                        </Link>
                        <Link href={contactData?.socialLinks.linkedin} target="_blank">
                            <Linkedin size={24} />
                        </Link>
                        <Link href={contactData?.socialLinks.gitlab} target="_blank">
                            <Gitlab size={24} />
                        </Link>
                        <Link href={contactData?.socialLinks.instagram} target="_blank">
                            <Instagram size={24} />
                        </Link>
                    </Flex>
                    </>
                )}
            </Card.Body>
        </Card.Root>
    )
}