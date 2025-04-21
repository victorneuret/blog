// @ts-check
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import expressiveCode from "astro-expressive-code";
import { defineConfig, fontProviders } from "astro/config";
import remarkGemoji from "remark-gemoji";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react(), expressiveCode({ themes: ["github-light"] }), mdx()],

  markdown: {
    remarkPlugins: [remarkGemoji],
  },

  experimental: {
    fonts: [
      {
        provider: fontProviders.fontsource(),
        name: "Inter",
        cssVariable: "--font-inter",
      },
    ],
  },

  adapter: vercel(),
});
