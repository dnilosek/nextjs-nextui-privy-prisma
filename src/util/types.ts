import { z } from "zod";

export const AuthedUserPostSchema = z.object({
  id: z.string(),
  wallet: z.string(),
});

export type AuthedUserPost = z.infer<typeof AuthedUserPostSchema>;
