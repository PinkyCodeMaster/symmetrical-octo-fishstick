import { pinoLogger as logger } from "hono-pino";
import pretty from "pino-pretty";
import env from "@/config/env";
import pino from "pino";

export function pinoLogger() {
  return logger({
    pino: pino({
      level: env.LOG_LEVEL || "info",
    }, env.NODE_ENV === "production" ? undefined : pretty()),
  });
}
