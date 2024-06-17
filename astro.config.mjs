import { defineConfig } from "astro/config";
import icon from "astro-icon";
import vercel from "@astrojs/vercel/serverless";
import db from "@astrojs/db";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), db(), svelte()],
  output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  })
});