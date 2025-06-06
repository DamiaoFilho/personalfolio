"use client"
import { Button, Flex, Tabs } from "@chakra-ui/react"
import { ColorModeButton } from "../ui/color-mode"
import { useRouter } from "next/navigation"

export default function Nav() {
    const router = useRouter()
    return (
        <Flex as="nav" padding={4} width={"100%"} justifyContent={"center"} marginBottom={"5%"}>
            <Tabs.Root width={"100%"} lazyMount unmountOnExit defaultValue="tab-1">
                <Tabs.List alignContent={"center"} gap={8} justifyContent={"center"} borderBottomWidth={0}>
                    <Button onClick={() => router.push("/")} variant={"outline"} > <Tabs.Trigger value="tab-1">Sobre mim</Tabs.Trigger> </Button>
                    <Button onClick={() => router.push("/projects")} variant={"outline"} > <Tabs.Trigger value="tab-2">Projetos</Tabs.Trigger> </Button>
                    <Button variant={"outline"} > <Tabs.Trigger value="tab-3">Contatos</Tabs.Trigger> </Button>
                </Tabs.List>
            </Tabs.Root>
            <ColorModeButton/>
        </Flex>
    )
}