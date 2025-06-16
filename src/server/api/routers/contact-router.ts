import { contactusFormSchema } from "@/lib/validation/contact-us";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { contactUsTable } from "@/server/db/schema";
import { z } from "zod";

export const contactRouter = createTRPCRouter({
  contactHandler: publicProcedure
    .input(contactusFormSchema)
    .mutation(async ({ input, ctx }) => {
      const result = await ctx.db
        .insert(contactUsTable)
        .values(input)
        .returning();

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
