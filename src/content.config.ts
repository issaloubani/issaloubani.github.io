import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    kind: z.enum(['published', 'work']).default('work'),
    platform: z.string().optional(),
    demo: z.string().optional(),
    demoSample: z.string().optional(),
    stats: z
      .array(z.object({ label: z.string(), value: z.string() }))
      .default([]),
    year: z.string(),
    role: z.string(),
    context: z.string(),
    status: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    tags: z.array(z.string()).default([]),
    summary: z.string(),
    media: z
      .array(
        z.object({
          type: z.enum(['image', 'video']),
          src: z.string(),
          poster: z.string().optional(),
          alt: z.string(),
        })
      )
      .default([]),
    links: z
      .array(z.object({ label: z.string(), href: z.string() }))
      .default([]),
  }),
});

export const collections = { projects };
