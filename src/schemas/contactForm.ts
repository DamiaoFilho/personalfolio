import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(4, "Must be at least 4 characters long"),
  email: z.string().email("Invalid email"),
  subject: z.string().optional(),
  message: z.string().min(6, "Must be at least 6 characters long"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
