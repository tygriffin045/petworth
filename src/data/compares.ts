export type CompareRow = {
  productSlug: string;
  bestFor: string;
  loftOrFeel: string;
  cooling: string;
  priceBand: string;
  skipIf: string;
};

export type CompareTable = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  columns: { key: keyof CompareRow | "name"; label: string }[];
  rows: CompareRow[];
  verdict: string;
};

export const compares: CompareTable[] = [
  {
    slug: "dog-beds",
    title: "Dog bed comparison",
    description:
      "Orthopedic sofa beds vs thick foam slabs vs crate life — which sleep setup fits your dog's age and chewing habits.",
    intro:
      "Beds fail when foam is too thin, covers shred, or the dog prefers the crate. Match the failure mode: joints → orthopedic foam; puppy routines → crate + pad; shredders → skip plush.",
    columns: [
      { key: "name", label: "Bed / setup" },
      { key: "bestFor", label: "Best for" },
      { key: "loftOrFeel", label: "Feel / setup" },
      { key: "cooling", label: "Notes" },
      { key: "priceBand", label: "Price band" },
      { key: "skipIf", label: "Skip if" },
    ],
    rows: [
      {
        productSlug: "furhaven-orthopedic-dog-bed",
        bestFor: "Seniors / nestlers",
        loftOrFeel: "Egg-crate + bolster",
        cooling: "Cover washable",
        priceBand: "About $35–$80",
        skipIf: "Dog shreds fabric beds",
      },
      {
        productSlug: "bedsure-orthopedic-dog-bed",
        bestFor: "Heavy dogs flattening thin beds",
        loftOrFeel: "Thicker foam slab",
        cooling: "Removable cover",
        priceBand: "About $40–$90",
        skipIf: "You need a flat crate pad only",
      },
      {
        productSlug: "midwest-puppy-starter-kit-medium",
        bestFor: "House-training / travel enclosure",
        loftOrFeel: "Wire crate + divider",
        cooling: "Add a crate pad",
        priceBand: "About $40–$120",
        skipIf: "You want furniture-style only",
      },
    ],
    verdict:
      "Joints complaining → Furhaven. Heavy dog crushing foam → Bedsure. Puppy routines → MidWest iCrate sized correctly.",
  },
  {
    slug: "harnesses",
    title: "Harness comparison",
    description:
      "Budget no-pull vs Ruffwear daily driver vs Blue-9 precision fit — pick by pull strength, mileage, and body shape.",
    intro:
      "Harnesses are fit and philosophy. Front clip helps redirect pullers. Padded hiking harnesses win on long miles. Odd proportions need more adjustment points.",
    columns: [
      { key: "name", label: "Harness" },
      { key: "bestFor", label: "Best for" },
      { key: "loftOrFeel", label: "Fit / clips" },
      { key: "cooling", label: "Build" },
      { key: "priceBand", label: "Price band" },
      { key: "skipIf", label: "Skip if" },
    ],
    rows: [
      {
        productSlug: "rabbitgoo-no-pull-harness",
        bestFor: "Budget pullers",
        loftOrFeel: "Front + back D-rings",
        cooling: "Reflective straps",
        priceBand: "About $18–$30",
        skipIf: "You need trail durability",
      },
      {
        productSlug: "ruffwear-front-range-harness",
        bestFor: "Daily miles / light trails",
        loftOrFeel: "Padded dual-clip",
        cooling: "Hike-ready hardware",
        priceBand: "About $40–$60",
        skipIf: "Puppy still growing fast",
      },
      {
        productSlug: "blue-9-balance-harness",
        bestFor: "Odd proportions / escapes",
        loftOrFeel: "Multi-point Y-fit",
        cooling: "Trainer favorite",
        priceBand: "About $45–$65",
        skipIf: "You want simplest on/off",
      },
    ],
    verdict:
      "First harness on a budget → Rabbitgoo. Daily walker → Ruffwear Front Range. Escape artist or weird chest → Blue-9.",
  },
  {
    slug: "cat-fountains",
    title: "Cat fountain comparison",
    description:
      "Catit Flower vs Drinkwell Platinum vs sticking with bowls — capacity, cleaning, and who actually drinks.",
    intro:
      "Fountains help cats who prefer moving water. Capacity and cleaning effort decide which one you will keep running. A dirty fountain is worse than a clean bowl.",
    columns: [
      { key: "name", label: "Option" },
      { key: "bestFor", label: "Best for" },
      { key: "loftOrFeel", label: "Capacity / style" },
      { key: "cooling", label: "Upkeep" },
      { key: "priceBand", label: "Price band" },
      { key: "skipIf", label: "Skip if" },
    ],
    rows: [
      {
        productSlug: "petsafe-drinkwell-platinum",
        bestFor: "Multi-pet / high volume",
        loftOrFeel: "Large reservoir",
        cooling: "Filter + weekly scrub",
        priceBand: "About $50–$80",
        skipIf: "Tiny counter space only",
      },
      {
        productSlug: "petlibro-automatic-feeder",
        bestFor: "Timed dry meals (not water)",
        loftOrFeel: "Scheduled kibble",
        cooling: "Different job than fountains",
        priceBand: "About $50–$120",
        skipIf: "You only need water movement",
      },
    ],
    verdict:
      "One picky cat → Catit Flower. Multi-pet water hogs → Drinkwell Platinum. Meal timing problem → feeder, not fountain.",
  },
  {
    slug: "carriers",
    title: "Travel carrier comparison",
    description:
      "Sherpa airline soft carrier vs Sleepypod car focus vs wire crate — match the trip type before you buy.",
    intro:
      "Airline cabin, car commuting, and house-training crates are different jobs. Measure underseat limits for flights; prioritize secure anchoring for cars.",
    columns: [
      { key: "name", label: "Carrier" },
      { key: "bestFor", label: "Best for" },
      { key: "loftOrFeel", label: "Form" },
      { key: "cooling", label: "Trip type" },
      { key: "priceBand", label: "Price band" },
      { key: "skipIf", label: "Skip if" },
    ],
    rows: [
      {
        productSlug: "sherpa-original-deluxe-carrier",
        bestFor: "Cabin flights / vet runs",
        loftOrFeel: "Soft-sided underseat class",
        cooling: "Airline dimension check",
        priceBand: "About $50–$90",
        skipIf: "You need crash-tested car primary",
      },
      {
        productSlug: "sleepypod-mobile-pet-bed",
        bestFor: "Car-first travel",
        loftOrFeel: "Premium soft structured",
        cooling: "Automotive focus",
        priceBand: "About $150–$250",
        skipIf: "Budget underseat bag only",
      },
      {
        productSlug: "midwest-puppy-starter-kit-medium",
        bestFor: "Road trips / home base crate",
        loftOrFeel: "Folding wire",
        cooling: "Secure in vehicle properly",
        priceBand: "About $40–$120",
        skipIf: "Airline cabin underseat needed",
      },
    ],
    verdict:
      "Flying cabin → Sherpa (sized to airline). Mostly car → Sleepypod class. Home training + road → MidWest crate.",
  },
];

export function getCompare(slug: string): CompareTable | undefined {
  return compares.find((c) => c.slug === slug);
}
