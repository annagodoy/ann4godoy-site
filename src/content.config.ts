import { defineCollection } from "astro:content";
import { file } from "astro/loaders";
import { z } from "astro/zod";

const baseSetSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  url: z.url(),
  publishedAt: z.coerce.date(),
});

const sets = defineCollection({
  loader: file("src/data/sets.json"),

  schema: z.discriminatedUnion("platform", [
    baseSetSchema.extend({
      platform: z.literal("youtube"),
      providerId: z.string().regex(/^[A-Za-z0-9_-]{11}$/),
    }),
    baseSetSchema.extend({
      platform: z.literal("soundcloud"),
      providerId: z.string().regex(/^[a-z0-9-]+\/[a-z0-9-]+$/),
    }),
  ]),
});

export const collections = { sets };
