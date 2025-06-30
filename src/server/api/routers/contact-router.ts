import { contactusFormSchema } from "@/lib/validation/contact-us";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { env } from "@/env";
import { contactUsTable } from "@/server/db/schema";
import { z } from "zod";
import { Resend } from "resend";

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
        JOBS: "Job Application",
        PRODUCTS: "Product Inquiry",
        OTHER: "Other",
      };

      const resend = new Resend(env.RESEND_KEY);
      const response = await resend.emails.create({
        from: "firebrandlabs@jeyakumarjeyaraj.in",
        to: "jeyakumar@firebrandlabs.in",
        subject: "You Have a New Website Lead",
        text: `You have received a new inquiry via the website contact form.`,
        html: `
        <h2>A Visitor Has Reached Out via Contact Form</h2>
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

      console.log(response);

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
