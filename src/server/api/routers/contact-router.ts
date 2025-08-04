import { contactusFormSchema } from "@/lib/validation/contact-us";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { env } from "@/env";
import { contactUsTable, registerBookShema } from "@/server/db/schema";
import { z } from "zod";
import { Resend } from "resend";
import { bookDownloadFormSchema } from "@/lib/validation/book-download";
import { google } from "googleapis";

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: env.GOOGLE_CLIENT_EMAIL,
    private_key: env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  },
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({ version: "v4", auth });

export const contactRouter = createTRPCRouter({
  contactHandler: publicProcedure
    .input(contactusFormSchema)
    .mutation(async ({ input, ctx }) => {
      const result = await ctx.db
        .insert(contactUsTable)
        .values(input)
        .returning();

      const purposeMap = {
        SERVICES: "Services Inquiry",
        CAREERS: "Job Application",
        OTHER: "Other",
        CAA: "Cards Against Ambiguity",
      };

      const resend = new Resend(env.RESEND_KEY);
      const response = await resend.emails.create({
        from: "firebrandlabs@jeyakumarjeyaraj.in",
        to: "jeyakumar@firebrandlabs.in",
        subject: "You Have a New Website Lead",
        text: `You have received a new inquiry via the website contact form.`,
        html: `
        <p><strong>Name:</strong> ${input.name}</p>
        <p><strong>Email:</strong> ${input.email}</p>
        <p><strong>Phone:</strong> ${input.phone}</p>
        <p><strong>Purpose:</strong> ${purposeMap[input.purpose]}</p>
        <p><strong>Message:</strong>${input.message}</p>
        
        <p><em>Submitted at: ${new Date().toLocaleString()}</em></p>
      `,
        headers: {
          "X-Entity-Ref-ID": new Date().getTime() + "",
        },
      });

      console.log(response, input);

      if (!result) {
        throw new Error("Something went wrong, please try again later");
      }

      return result;
    }),
  registerTheBook: publicProcedure
    .input(bookDownloadFormSchema)
    .mutation(async ({ input, ctx }) => {
      const result = await ctx.db
        .insert(registerBookShema)
        .values(input)
        .returning();

      const purposeMap = {
        SERVICES: "Services Inquiry",
        JOBS: "Job Application",
        PRODUCTS: "Product Inquiry",
        OTHER: "Other",
        CAA: "Cards Against Ambiguity",
      };

      try {
        await sheets.spreadsheets.values.append({
          spreadsheetId: env.GOOGLE_SHEET_ID,
          range: "Sheet1!A:F",
          valueInputOption: "RAW",
          requestBody: {
            values: [
              [
                new Date().toLocaleString(), // Timestamp
                input.name,
                input.email,
                input.phone,
                input.city,
                input.country,
              ],
            ],
          },
        });
      } catch (err) {
        console.log("Failed to add to Google Sheets:", err);
      }

      const resend = new Resend(env.RESEND_KEY);
      const response = await resend.emails.create({
        from: "firebrandlabs@jeyakumarjeyaraj.in",
        to: "venkatesh@firebrandlabs.in",
        subject: "You Have a New Lead for downloading",
        text: `You have received a new inquiry via the website book registering form.`,
        html: `
        <p><strong>Name:</strong> ${input.name}</p>
        <p><strong>Email:</strong> ${input.email}</p>
        <p><strong>Phone:</strong> ${input.phone}</p>
        <p><strong>City:</strong> ${input.city}</p>
        <p><strong>Country:</strong>${input.country}</p>
        
        <p><em>Submitted at: ${new Date().toLocaleString()}</em></p>
      `,
        headers: {
          "X-Entity-Ref-ID": new Date().getTime() + "",
        },
      });

      console.log(response, input);

      if (!result) {
        throw new Error("Something went wrong, please try again later");
      }

      return result;
    }),
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),
});
