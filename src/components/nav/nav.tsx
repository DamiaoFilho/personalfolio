"use client"
import { Button, Flex, Tabs } from "@chakra-ui/react"
import { ColorModeButton } from "../ui/color-mode"
import { useRouter, usePathname } from "next/navigation"

const routeToTab: Record<string, string> = {
    "/": "tab-1",
    "/projects": "tab-2",
    "/contact": "tab-3",
}

export default function Nav() {
    const router = useRouter()
    const pathname = usePathname()
    const tabValue = routeToTab[pathname] || "tab-1"

    return (
        <Flex as="nav" padding={4} width={"100%"} justifyContent={"center"} marginBottom={"5%"}>
            <Tabs.Root
                width={"100%"}
                lazyMount
                unmountOnExit
                value={tabValue}
            >
                <Tabs.List alignContent={"center"} gap={8} justifyContent={"center"} borderBottomWidth={0}>
                    <Tabs.Trigger onClick={() => router.push("/")} value="tab-1">About Me</Tabs.Trigger>
                    <Tabs.Trigger onClick={() => router.push("/projects")} value="tab-2">Projects</Tabs.Trigger>
                    <Tabs.Trigger onClick={() => router.push("/contact")} value="tab-3">Contacts</Tabs.Trigger>
                </Tabs.List>
            </Tabs.Root>
            <ColorModeButton />
        </Flex>
    )
}