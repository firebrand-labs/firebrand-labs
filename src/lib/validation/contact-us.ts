import { z } from "zod";

export const contactusFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z
    .string()
    .regex(/^\+?[1-9]\d{1,14}$/, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  purpose: z.string().min(2, "Name must be at least 2 characters"),
});

export type contactusFormType = z.infer<typeof contactusFormSchema>;
