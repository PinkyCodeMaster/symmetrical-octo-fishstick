/* eslint-disable node/no-process-env */
import { expand } from "dotenv-expand";
import { config } from "dotenv";
import path from "node:path";
import { z } from "zod";

// Load and expand environment variables
expand(
  config({
    path: path.resolve(
      process.cwd(),
      process.env.NODE_ENV === "test" ? ".env.test" : ".env"
    ),
  })
);

// Define schema for your env vars
const EnvSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
  PORT: z.coerce.number().default(9000),
  DATABASE_URL: z.string().url(),
  RESEND_API_KEY: z.string().min(1),
  RESEND_FROM_EMAIL: z.string().email(),
  BETTER_AUTH_SECRET: z.string().min(1),
  BETTER_AUTH_URL: z.string().url().default(`http://localhost:9000`),
  LOG_LEVEL: z.enum(["info", "debug", "warn", "error"]).default("info"),
  STRIPE_WEBHOOK_SECRET: z.string().min(1),
  STRIPE_SECRET_KEY: z.string().min(1),
});

export type Env = z.infer<typeof EnvSchema>;

// Parse and validate
const { data: rawEnv, error } = EnvSchema.safeParse(process.env);

if (error) {
  console.error("❌ Invalid environment variables:");
  console.error(JSON.stringify(error.flatten().fieldErrors, null, 2));
  process.exit(1);
}

// Fallback for BETTER_AUTH_URL
const env: Env = {
  ...rawEnv,
  BETTER_AUTH_URL:
    rawEnv.BETTER_AUTH_URL ?? `http://localhost:${rawEnv.PORT ?? 9000}`,
};

export default env;
