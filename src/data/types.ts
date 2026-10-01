export type CategorySlug =
  | "dog-beds-crates"
  | "cat-trees-scratchers"
  | "feeders-fountains"
  | "leashes-harnesses-collars"
  | "grooming"
  | "toys-enrichment"
  | "travel"
  | "litter"
  | "training-waste"
  | "health-wellness"
  | "aquatics-aquarium"
  | "small-pets"
  | "bird-supplies"
  | "reptile-supplies"
  | "flea-tick-prevention"
  | "puppy-kitten-starter"
  | "slow-feeders";

export type BudgetBand = "budget" | "mid" | "premium";

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  slug: string;
  name: string;
  brand: string;
  category: CategorySlug;
  /** Short conversion label, e.g. "Best for pullers" */
  bestFor: string;
  tagline: string;
  summary: string;
  priceBand: string;
  budget: BudgetBand;
  priceMin: number;
  priceMax: number;
  imageGradient: string;
  imageAlt: string;
  imageUrl?: string;
  featured: boolean;
  pros: string[];
  cons: string[];
  whoItsFor: string;
  skipIf: string;
  specs: ProductSpec[];
  relatedSlugs: string[];
  amazonAsin?: string;
  amazonQuery: string;
  asinPlaceholder?: boolean;
}

export interface Category {
  slug: CategorySlug;
  name: string;
  description: string;
  shortLabel: string;
}

export interface Guide {
  slug: string;
  title: string;
  description: string;
  readingTime: string;
  publishedAt: string;
  productSlugs: string[];
  sections: { heading: string; body: string }[];
  /** Optional query-targeted <title>; falls back to `title`. */
  seoTitle?: string;
  /** Optional meta description; falls back to `description`. */
  metaDescription?: string;
  /** Top-of-page "quick picks" summary. */
  quickPicks?: { label: string; productSlug: string; note: string }[];
  /** Detailed product picks with pros/cons and who each suits. */
  picks?: GuidePick[];
  /** Short buying-criteria checklist. */
  criteria?: { heading: string; body: string }[];
  /** FAQ rendered on page and emitted as FAQPage JSON-LD. */
  faqs?: { question: string; answer: string }[];
  /** Existing category pages that should link to this guide. */
  categorySlugs?: CategorySlug[];
  /** Existing best-for hub pages that should link to this guide. */
  hubSlugs?: string[];
  updatedAt?: string;
}

export interface GuidePick {
  productSlug: string;
  heading: string;
  verdict: string;
  pros: string[];
  cons: string[];
  suits: string;
  skip?: string;
  /** Verified listing note, e.g. price/size seen on Amazon with the check date. */
  checked?: string;
}
