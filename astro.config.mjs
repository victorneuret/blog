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
  site: "https://complexity-downward.com",
  base: "/",
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    react(),
    expressiveCode({
      themes: ["github-light", "github-dark-dimmed"],
      themeCssSelector: (theme) => {
        if (theme.name === "github-dark-dimmed") {
          return "html.dark, html[data-theme='dark']";
        }
        return false;
      },
    }),
    mdx(),
  ],

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
