import type { Metadata } from "next";
import { SITE_URL, SITE_NAME } from "@/lib/site";

const DEFAULT_OG_IMAGE = `${SITE_URL}/og/default.jpg`;

/**
 * Per-page canonical + Open Graph + Twitter metadata.
 * Next.js replaces (does not merge) `openGraph`/`twitter` objects set by a page,
 * so this rebuilds the full set, including the default share image.
 */
export function pageMetadata({
  path,
  title,
  description,
}: {
  path: string;
  title: string;
  description: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: SITE_NAME,
      url: path,
      title,
      description,
      images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}
