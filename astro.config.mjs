import { defineConfig } from "astro/config";
import icon from "astro-icon";
import vercel from "@astrojs/vercel/serverless";

import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), db()],
  output: "hybrid",
  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  })
});