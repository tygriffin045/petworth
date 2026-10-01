import type { Category } from "./types";

export const categories: Category[] = [
  {
    slug: "dog-beds-crates",
    name: "Dog Beds & Crates",
    shortLabel: "Beds & crates",
    description:
      "Orthopedic foam for seniors and recovering joints, bolstered loungers for nestlers, and wire crates for house-training. Size the crate to stand-turn-lie down — not “room to grow forever.” Skip soft beds if your dog shreds fabric overnight.",
  },
  {
    slug: "cat-trees-scratchers",
    name: "Cat Trees & Scratchers",
    shortLabel: "Trees & scratchers",
    description:
      "Vertical real estate and sisal that actually lasts. Tall trees for climbers, wall-stable bases for apartments, and horizontal scratchers when your cat ignores posts. Replace shredded sisal before they start on the sofa arm.",
  },
  {
    slug: "feeders-fountains",
    name: "Feeders & Fountains",
    shortLabel: "Feeders",
    description:
      "Moving water for cats who ignore still bowls, timed feeders for portion control, and elevated dishes for tall dogs. Cleanability beats gadget count — a fountain you hate scrubbing becomes a biofilm factory.",
  },
  {
    slug: "leashes-harnesses-collars",
    name: "Leashes, Harnesses & Collars",
    shortLabel: "Walk gear",
    description:
      "Front-clip and dual-clip harnesses for pullers, Y-shaped fits that spare the trachea, and sturdy leashes for daily miles. Collars stay for ID tags; harnesses take the load. Fit beats brand hype every time.",
  },
  {
    slug: "grooming",
    name: "Grooming",
    shortLabel: "Grooming",
    description:
      "Deshedding tools for double coats, slicker brushes for mats, and nail care that does not turn into a wrestling match. Coat type first — a FURminator on a single-coat dog is the wrong tool.",
  },
  {
    slug: "toys-enrichment",
    name: "Toys & Enrichment",
    shortLabel: "Toys",
    description:
      "Durable chews, food puzzles, and fetch toys that survive more than one afternoon. Rotate toys so “new” keeps working. Supervise anything that can be swallowed in pieces.",
  },
  {
    slug: "travel",
    name: "Travel Carriers",
    shortLabel: "Travel",
    description:
      "Airline-minded soft carriers, hard-sided crates for road trips, and crash-tested options when the car is the main use. Measure pet + airline size charts before you fall in love with a listing photo.",
  },
  {
    slug: "litter",
    name: "Litter & Boxes",
    shortLabel: "Litter",
    description:
      "Clumping clay, lighter alternatives, covered vs open boxes, and self-cleaning systems when scooping is the failure mode. Rule of thumb: one box per cat, plus one — and place matters more than scent marketing.",
  },
  {
    slug: "training-waste",
    name: "Training & Waste",
    shortLabel: "Training",
    description:
      "Poop bags that do not rip mid-walk, treat pouches, and remote treat trainers for calm focus work. Gear supports training — it does not replace consistency.",
  },
  {
    slug: "health-wellness",
    name: "Health & Wellness Accessories",
    shortLabel: "Wellness",
    description:
      "Dental chews, calming wraps, and everyday wellness accessories — framed as gear, not veterinary advice. If your pet has a medical issue, talk to your vet before buying a product that promises to fix it.",
  },
  {
    slug: "aquatics-aquarium",
    name: "Aquatics & Aquarium",
    shortLabel: "Aquarium",
    description:
      "Starter tanks, hang-on filters, heaters, and water test kits for freshwater setups. Cycle the tank before adding fish; match heater wattage to gallons; test water before chasing mystery deaths. Gear first — livestock second.",
  },
  {
    slug: "small-pets",
    name: "Small Pets",
    shortLabel: "Small pets",
    description:
      "Habitats, hay, bedding, and care gear for rabbits, guinea pigs, hamsters, and similar companions. Floor space beats stacked tubes; unlimited grass hay for herbivores; paper bedding over dusty cedar. Species needs differ — read before you cart.",
  },
  {
    slug: "bird-supplies",
    name: "Bird Supplies",
    shortLabel: "Birds",
    description:
      "Flight-friendly cages, fortified diets, and enrichment toys for companion birds. Bar spacing and horizontal space matter more than ornate roofs. Fresh food and foraging toys beat seed-only boredom.",
  },
  {
    slug: "reptile-supplies",
    name: "Reptile Supplies",
    shortLabel: "Reptiles",
    description:
      "Terrariums, UVB lighting, basking lamps, and screen habitats for lizards, geckos, and similar keepers. Heat and UV gradients are non-negotiable for many species — research husbandry before the animal arrives.",
  },
  {
    slug: "flea-tick-prevention",
    name: "Flea & Tick Prevention",
    shortLabel: "Flea & tick",
    description:
      "OTC collars, topicals, sprays, and fast-acting tablets framed as prevention gear — not veterinary prescriptions or medical advice. Read labels for species, weight, and age limits. Ask your vet which protocol fits your pet and region.",
  },
  {
    slug: "puppy-kitten-starter",
    name: "Puppy & Kitten Starter",
    shortLabel: "Puppy & kitten",
    description:
      "Pads, teething chews, soft puppy KONGs, clickers, and first-week basics for new arrivals. Soft materials for baby teeth; size up as they grow; supervise everything chewable. Starter gear is temporary — plan replacements.",
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
,
  {
    slug: "slow-feeders",
    name: "Slow Feeders",
    shortLabel: "Feeders",
    description: "Bowls and puzzles that slow a dog that inhales dinner.",
  },
];
