import { serve } from "@hono/node-server";
import env from "./config/env";
import app from "./app";

const port = env.PORT;
console.log(`Server is running on port http://localhost:${port}`);

serve({
    fetch: app.fetch,
    port,
});
