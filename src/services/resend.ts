"use server";
import { Resend } from 'resend';
import * as React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

const handleEmailSubmit = async (data: any) => {
    const { name, email, subject, message } = data;
    try {
        await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to: ['damiaofilho0123@gmail.com'],
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