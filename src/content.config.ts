import { defineCollection } from "astro:content";
import { file } from "astro/loaders";
import { z } from "astro/zod";

const sets = defineCollection({
  loader: file("src/data/sets.json"),

  schema: z.object({
    id: z.string().min(1),
    title: z.string().min(1),
    platform: z.enum(["youtube", "soundcloud"]),
    url: z.url(),
    publishedAt: z.coerce.date(),
  }),
});

export const collections = { sets };
