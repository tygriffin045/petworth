import { categories } from "./categories";

type NavGroupDef = {
  id: string;
  label: string;
  description: string;
  slugs: string[];
};

const navGroups: NavGroupDef[] = [
  {
    id: "dogs",
    label: "Dogs",
    description: "Beds, walk gear, training, and toys",
    slugs: ["dog-beds-crates", "leashes-harnesses-collars", "training-waste", "toys-enrichment"],
  },
  {
    id: "cats",
    label: "Cats",
    description: "Trees, litter, feeding, and travel",
    slugs: ["cat-trees-scratchers", "litter", "feeders-fountains", "travel"],
  },
  {
    id: "small-pets-more",
    label: "Small pets & more",
    description: "Small animals, birds, reptiles, and fish",
    slugs: ["small-pets", "bird-supplies", "reptile-supplies", "aquatics-aquarium"],
  },
  {
    id: "health-care",
    label: "Health & care",
    description: "Grooming, flea and tick, wellness, and starter kits",
    slugs: ["grooming", "flea-tick-prevention", "health-wellness", "puppy-kitten-starter"],
  },
];

export function getAllNavGroupsWithLinks() {
  return navGroups.map((g) => ({
    id: g.id,
    label: g.label,
    description: g.description,
    links: g.slugs
      .map((slug) => categories.find((c) => c.slug === slug))
      .filter((c): c is (typeof categories)[number] => Boolean(c))
      .map((c) => ({ slug: c.slug, label: c.name, href: `/category/${c.slug}` })),
  }));
}
