import { ProfileType } from "@/types/profile";
import { Flex, Box, Text, Button, HStack, Image, Spinner, VStack } from "@chakra-ui/react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Boxes } from "lucide-react";

export default function Profile() {
    const [profile, setProfile] = useState<ProfileType>();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        try {
            setLoading(true);
            const fetchProfile = async () => {
                const response = await fetch("/api/profile");
                if (!response.ok) {
                    throw new Error("Failed to fetch profile data");
                }
                const data: ProfileType = await response.json();
                setProfile(data);
            };
            fetchProfile();
        } catch (error) {
            console.error("Error fetching profile data:", error);
        } finally {
            setLoading(false);
        }
    }, []);

    return (
        <Flex as="section" width={"100%"} alignContent={"center"} justifyContent={"center"} padding={4} gap={8}>
            {loading ? <Spinner size="xl" /> : profile ?
                <>
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
                    <Image margin={"auto"} height={"100%"} width={"100%"} rounded="xl" w={240} h={240} src={profile?.avatar} alt="Dan Abramov" />
                </>
                :
                <>
                    <VStack width="100%" justifyContent={"center"} textAlign="center" fontWeight="medium">
                        <Boxes />
                        Profile not found
                    </VStack>
                </>
            }
        </Flex>
    )
}