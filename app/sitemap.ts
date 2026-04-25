import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://universaldocument.hive.baby', lastModified: new Date('2026-04-24'), changeFrequency: 'monthly', priority: 1 },
    { url: 'https://universaldocument.hive.baby/certified', lastModified: new Date('2026-04-24'), changeFrequency: 'monthly', priority: 0.8 },
  ]
}
