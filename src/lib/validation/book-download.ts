import { z } from "zod";
import { fetchCountries } from "@/lib/country-data";

export const bookDownloadFormSchema = z.object({
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

  city: z
    .string()
    .min(2, "City name must be at least 2 characters")
    .max(1000, "City name must be less than 1000 characters"),

  country: z.string().refine(
    async (val) => {
      const countries = await fetchCountries();
      return countries.includes(val);
    },
    {
      message: "Please select a valid country",
    }
  ),
});

export type BookDonwloadFormType = z.infer<typeof bookDownloadFormSchema>;
