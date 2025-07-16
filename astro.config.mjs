import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import icon from "astro-icon";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), mdx(), react()],
  adapter: netlify()
});