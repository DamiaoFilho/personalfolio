"use client";
import { Card, Stack, Field, Input, Textarea, Button, Badge } from "@chakra-ui/react"
import { toaster, Toaster } from "@/components/ui/toaster"
import { useForm } from "react-hook-form";
import handleEmailSubmit from "@/services/resend";
import React from "react";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema } from "@/schemas/contactForm";

export default function ContactForm() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: zodResolver(contactFormSchema)
    });
    const [loading, setLoading] = useState(false);


    const sendEmail = async (e: any) => {
        try {
            setLoading(true);
            const response = await handleEmailSubmit(e);
            if (response) {
                toaster.create({
                    type: "success",
                    description: "E-mail sent successfully!",
                })
                reset(); 
            } else {
                toaster.create({
                    type: "error",
                    description: "Failed to send e-mail. Please try again later.",
                })
            }
        } catch (error: any) {
            console.error("Error sending email:", error);
            toaster.create({
                type: "error",
                description: `Failed to send e-mail. Please try again later. Error: ${error.message}`,
            })
        } finally {
            setLoading(false);
        }
    }

    return (
        <Card.Root width={"50%"}>
            <Toaster />
            <Card.Header>
                <Card.Title>Send E-Mail</Card.Title>
                <Card.Description>
                    Fill the form below to send an e-mail to me!
                </Card.Description>
            </Card.Header>
            <form onSubmit={handleSubmit((e) => sendEmail(e))}>
                <Card.Body>
                    <Stack gap="4" w="full">
                        <Field.Root required {...errors.name && { invalid: true }}>
                            <Field.Label>Name</Field.Label>
                            <Input {...register("name")} placeholder="Jhon Doe"/>
                            {errors.name && <Field.ErrorText>{errors.name.message}</Field.ErrorText>}
                        </Field.Root>
                        <Field.Root required {...errors.email && { invalid: true }}>
                            <Field.Label>Email</Field.Label>
                            <Input {...register("email")} placeholder="me@example.com"/>
                            {errors.email && <Field.ErrorText>{errors.email.message}</Field.ErrorText>}
                        </Field.Root>
                        <Field.Root {...errors.subject && { invalid: true }}>
                            <Field.Label>
                                Subject
                                <Field.RequiredIndicator
                                    fallback={
                                        <Badge size="xs" variant="surface">
                                            Optional
                                        </Badge>
                                    }
                                />
                            </Field.Label>
                            <Input {...register("subject")} placeholder="Something Incredible"/>
                            {errors.subject && <Field.ErrorText>{errors.subject.message}</Field.ErrorText>}
                        </Field.Root>
                        <Field.Root required {...errors.name && { invalid: true }}>
                            <Field.Label>Content</Field.Label>
                            <Textarea {...register("message")} h={125} placeholder="Message"/>
                            {errors.message && <Field.ErrorText>{errors.message.message}</Field.ErrorText>}
                        </Field.Root>
                    </Stack>
                </Card.Body>
                <Card.Footer justifyContent="flex-end">
                    <Button type="reset" variant="outline">Discard</Button>
                    <Button
                        type="submit"
                        variant="solid"
                        {...loading && { disabled: true, loading: true }}
                    >
                        Send
                    </Button>
                </Card.Footer>
            </form>
        </Card.Root>
    )
}