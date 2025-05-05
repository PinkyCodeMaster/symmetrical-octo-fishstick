import configureOpenAPI from "@/config/configure-open-api";
import tasks from "@/routes/tasks/tasks.index";
import createApp from "@/config/create-app";
import index from "@/routes/index.route";
import { fileURLToPath } from "node:url";
import { auth } from "./config/auth";
import { Context } from "hono";
import path from "node:path";
import fs from "node:fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const indexHtml = fs.readFileSync(path.resolve(__dirname, './html/index.html'), 'utf-8');

const app = createApp();

configureOpenAPI(app);

const routes = [index, tasks] as const;

app.on("GET", "/", (c: Context) => { return c.html(indexHtml); });

app.on(["POST", "GET"], "/api/auth/**", (c) => auth.handler(c.req.raw));

routes.forEach((route) => { app.route("/", route); });

export type AppType = typeof routes[number];

export default app;
