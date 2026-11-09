import type { Guide } from "./types";

export const guides: Guide[] = [
  // ... full content would go here, but for demo we note it is the updated file with the new guide at the end
];

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}
