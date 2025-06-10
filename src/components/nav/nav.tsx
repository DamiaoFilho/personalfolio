import { Flex, Tabs } from "@chakra-ui/react"
import { ColorModeButton } from "../ui/color-mode"
export default function Nav() {
    return (
        <Flex as="nav" padding={4} marginBottom={100} width={"100%"} justifyContent={"center"}>
            <Tabs.Root width={"100%"} lazyMount unmountOnExit defaultValue="tab-1">
                <Tabs.List alignContent={"center"} gap={8} justifyContent={"center"} borderBottomWidth={0}>
                    <Tabs.Trigger value="tab-1">About Me</Tabs.Trigger>
                    <Tabs.Trigger value="tab-2">Projects</Tabs.Trigger>
                    <Tabs.Trigger value="tab-3">Contacts</Tabs.Trigger>
                </Tabs.List>
            </Tabs.Root>
            <ColorModeButton/>
        </Flex>
    )
}