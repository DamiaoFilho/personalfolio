"use server";
import { Resend } from 'resend';
import * as React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

const handleEmailSubmit = async (data: any) => {
    const { name, email, subject, message } = data;
    try {

        const response = await fetch(`${process.env.API_HOST}/api/contact`);
        const responseData = await response.json();
        if (!response.ok) {
            throw new Error("Failed to fetch contact data");
        }
        await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to: [responseData.email],
            subject: `Email from ${name} - ${subject}`,
            replyTo: email,
            html: `<p>${message}</p>`,
        });
        return true;
    } catch (error) {
        console.error("Error sending email:", error);
        return false;
    }
}

export default handleEmailSubmit;