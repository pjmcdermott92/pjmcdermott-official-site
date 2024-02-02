import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import tunnel from "astro-tunnel";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon(), mdx(), tunnel()],
  site: 'https://www.pjmcdermott.com',
  output: 'server',
  adapter: netlify()
});