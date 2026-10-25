import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  // 1. Change this to your GitHub Pages domain
  site: 'https://uminoerika.github.io',
  
  // 2. Add the base path (your exact repository name starting with a slash)
  // WARNING: Delete this `base` line entirely ONLY if your repository is named exactly "<your-github-username>.github.io"
  // base: '/<your-repository-name>',

  integrations: [mdx(), sitemap(), tailwind()]
});