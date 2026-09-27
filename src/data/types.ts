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
  | "puppy-kitten-starter";

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
}
