import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      // Transform string to Date object
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: image(),
      // Category slugs, matching ids in the `categories` collection.
      categories: z.array(z.string()).min(1),
    }),
});

const categories = defineCollection({
  loader: glob({ base: "./src/content/categories", pattern: "**/*.json" }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      order: z.number(),
      description: z.string(),
      color: z.string(),
      icon: image(),
    }),
});

export const collections = { blog, categories };
