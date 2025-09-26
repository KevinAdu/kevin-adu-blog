import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import icon from "astro-icon";
import sentry from "@sentry/astro";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), mdx(), react(), sentry({
    project: "javascript-astro",
    org: "kevin-adu",
    authToken: process.env.SENTRY_AUTH_TOKEN,
  }),],
  adapter: netlify()
});