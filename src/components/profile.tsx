import { ProfileType } from "@/types/profile";
import { Flex, Box, Text, Button, HStack, Image } from "@chakra-ui/react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Profile() {
    const [profile, setProfile] = useState<ProfileType>();

    useEffect(() => {
        const fetchProfile = async () => {
            const response = await fetch("/api/profile");
            const data: ProfileType = await response.json();
            setProfile(data);
        };
        fetchProfile();
    }, []);

    return (
        <Flex as="section" width={"100%"} alignContent={"center"} justifyContent={"center"} padding={4} gap={8}>
            <Flex direction={"column"} justifyContent={"center"}>
                <Box>
                    <Text as="h1" fontSize={42} fontWeight={"bold"}>{profile?.name}</Text>
                    <Text as="h2" color={"#A1A1A1"} fontSize={24}>{profile?.role}</Text>
                </Box >
                <Text textAlign={"justify"} marginTop={4} fontSize={14}>
                    {profile?.description}
                </Text>
                <HStack width={"100%"} marginTop={4} justifyContent={"end"}>
                    <Link href={"/contact"}>
                        <Button colorPalette="teal" variant="outline">
                            Contact
                        </Button>
                    </Link>
                    <Link href={"#"}>
                        <Button colorPalette="teal" variant="solid">
                            Projects
                        </Button>
                    </Link>
                </HStack>
            </Flex>
            <Image rounded="xl" w={240} h={240} src={profile?.avatar} alt="Dan Abramov" />
        </Flex>
    )
}