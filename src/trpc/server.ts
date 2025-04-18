import "server-only";
import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import superjson from "superjson";
import { type AppRouter } from "@/server/trpc/router";

export const createServerClient = () => {
  return createTRPCProxyClient<AppRouter>({
    links: [
      httpBatchLink({
        url: `${
          process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"
        }/api/trpc`,
        transformer: superjson,
      }),
    ],
  });
};
