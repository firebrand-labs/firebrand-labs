import { z } from "zod";

export const contactusFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters")
    .regex(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces"),

  email: z
    .string()
    .email("Please enter a valid email address")
    .max(100, "Email must be less than 100 characters"),

  phone: z
    .string()
    .regex(
      /^(\+\d{1,3}[- ]?)?\d{10}$/,
      "Please enter a valid phone number (10 digits, optional country code)"
    ),

  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters"),

  purpose: z.enum(["SERVICES", "JOBS", "PRODUCTS", "OTHER", "CAA"], {
    errorMap: () => ({ message: "Please select a category" }),
  }),
});

export type contactusFormType = z.infer<typeof contactusFormSchema>;
