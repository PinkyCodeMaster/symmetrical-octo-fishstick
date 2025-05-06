import packageJSON from "../../package.json" with { type: "json" };
import { Scalar } from "@scalar/hono-api-reference";
import type { AppOpenAPI } from "@/types";
import { merge } from "openapi-merge";
import { auth } from "@/config/auth";

export default function configureOpenAPI(app: AppOpenAPI) {
  app.get("/doc", async (c) => {
    const taskSpec = app.getOpenAPI31Document({
      openapi: "3.0.0",
      info: {
        title: "Tasks API",
        version: packageJSON.version,
      },
    });

    const authSpec = await auth.api.generateOpenAPISchema();

    const merged = merge([
      { oas: taskSpec as any },
      {
        oas: authSpec as any,
        pathModification: { prepend: "/auth" },
      },
    ]);

    // ✅ Safely handle the result
    if ("output" in merged) {
      return c.json(merged.output);
    } else {
      console.error("OpenAPI merge error:", merged.message);
      return c.json({ error: "Failed to merge OpenAPI schemas." }, 500);
    }
  });

  app.get(
    "/reference",
    Scalar({
      theme: "kepler",
      layout: "classic",
      defaultHttpClient: {
        targetKey: "js",
        clientKey: "fetch",
      },
      url: "/doc",
    })
  );
}
