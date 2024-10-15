import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";

import { loginSchem, registerSchema } from "../schemas";

const app = new Hono()
  .post("/login", zValidator("json", loginSchem), (c) => {
    const { email, password } = c.req.valid("json");

    return c.json({ email, password });
  })
  .post("/register", zValidator("json", registerSchema), (c) => {
    const { name, email, password } = c.req.valid("json");

    return c.json({ name, email, password });
  });

export default app;
