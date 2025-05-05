import packageJSON from "../../package.json" with { type: "json" };
import { Scalar } from "@scalar/hono-api-reference";
import type { AppOpenAPI } from "@/types";

export default function configureOpenAPI(app: AppOpenAPI) {
  app.doc("/doc", {
    openapi: "3.0.0",
    info: {
      version: packageJSON.version,
      title: "Tasks API",
    },
  });

  app.get(
    "/reference",
    Scalar({
      theme: "kepler",
      layout: "modern",
      defaultHttpClient: {
        targetKey: "js",
        clientKey: "fetch",
      },
      url: "/doc",
    }),
  );
}
