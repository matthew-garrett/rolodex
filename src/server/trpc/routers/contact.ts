import { z } from "zod";
import { router, publicProcedure } from "../trpc";

export const contactRouter = router({
  list: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.contact.findMany({
      orderBy: { due: "asc" },
    });
  }),
  get: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.contact.findUnique({ where: { id: input.id } });
    }),
  create: publicProcedure
    .input(
      z.object({
        name: z.string(),
        email: z.string().email().optional(),
        // … include other fields as in your schema
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.contact.create({ data: input });
    }),
  update: publicProcedure
    .input(
      z.object({
        id: z.number(),
        data: z
          .object({
            name: z.string().optional(),
            // … all updatable fields optional
          })
          .partial(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.contact.update({
        where: { id: input.id },
        data: input.data,
      });
    }),
  delete: publicProcedure
    .input(z.object({ id: z.number() }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.contact.delete({ where: { id: input.id } });
    }),
});
