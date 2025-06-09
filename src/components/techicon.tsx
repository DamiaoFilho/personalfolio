import { Box, Flex, Image, Text } from "@chakra-ui/react";

interface TechIconProps {
    src: string;
    name: string;
}


export default function TechIcon({ src, name }: TechIconProps) {
    return (
        <Flex gap={2} alignContent={"center"}>
            <Image objectFit={"contain"} h={8} w={8} src={src} borderRadius={"md"}/>
            <Text color={"#52525b"} fontSize={"0.875rem"} alignContent={"center"} as="span">{name}</Text>
        </Flex>
    );

}