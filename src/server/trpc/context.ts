import { prisma } from "../db/client";

export async function createContext() {
  return { prisma };
}
export type Context = Awaited<ReturnType<typeof createContext>>;
