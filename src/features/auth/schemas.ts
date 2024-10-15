import { z } from "zod";

export const loginSchem = z.object({
  email: z.string().email(),
  password: z.string().min(1, "Required"),
});
