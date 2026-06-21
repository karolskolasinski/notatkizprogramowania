import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import keystatic from "@keystatic/astro";
import { loadEnv } from "vite";
import netlify from "@astrojs/netlify";

const env = loadEnv("", process.cwd(), "PUBLIC_");

export default defineConfig({
  site: env.PUBLIC_SITE_URL,
  output: "server",

  redirects: {
    "/admin": "/keystatic",
  },

  integrations: [mdx(), sitemap(), react(), keystatic()],

  fonts: [
    {
      provider: fontProviders.google(),
      name: "Chonburi",
      subsets: ["latin", "latin-ext"],
      cssVariable: "--font-chonburi",
    },
    {
      provider: fontProviders.google(),
      name: "Open Sans",
      subsets: ["latin", "latin-ext"],
      cssVariable: "--font-open-sans",
    },
    {
      provider: fontProviders.google(),
      name: "Mulish",
      cssVariable: "--font-mulish",
      subsets: ["latin", "latin-ext"],
      weights: [1000],
    },
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: netlify(),
});