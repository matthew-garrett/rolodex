import { router } from "./trpc";
import { contactRouter } from "./routers/contact";

export const appRouter = router({
  contact: contactRouter,
});

export type AppRouter = typeof appRouter;
