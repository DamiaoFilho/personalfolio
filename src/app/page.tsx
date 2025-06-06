"use client";
import Profile from "@/components/profile";
import { Container } from "@chakra-ui/react";
import HardSkills from "@/components/hardskills";

export default function Home() {
  return (
    <Container as={"main"} width={"65%"}>
      <Profile />
      <HardSkills />
    </Container>
  );
}
