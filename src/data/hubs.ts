export type Hub = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  intro: string[];
  productSlugs: string[];
  skipAdvice: string;
};

export const hubs: Hub[] = [
  {
    slug: "apartment-pets",
    title: "Best for apartment pets",
    eyebrow: "Use-case hub",
    description:
      "Quiet enrichment, compact fountains, litter scatter control, and walk gear that fits elevators — without buying a suburban yard's worth of stuff.",
    intro: [
      "Apartments fail pets on vertical space (cats), noise tolerance (dogs), and litter tracking. Fix those before adding more toys nobody uses.",
      "Prioritize: a stable cat tree or scratcher, a fountain cats will drink from, a litter setup that contains mess, and a harness that makes short walks productive.",
    ],
    productSlugs: [
      "feandrea-cat-tree",
      "amazon-basics-puppy-training-pads",
      "modkat-litter-box",
      "petsafe-scoopfree-litter-box",
      "kong-classic",
      "outward-hound-puzzle",
      "rabbitgoo-no-pull-harness",
      "amazon-basics-puppy-training-pads",
    ],
    skipAdvice:
      "Skip giant unanchored cat trees on tiny bases, scented litter wars your cat rejects, and “bark collars” as a first apartment fix — train and enrich first.",
  },
  {
    slug: "senior-pets",
    title: "Best for senior dogs & cats",
    eyebrow: "Use-case hub",
    description:
      "Orthopedic beds, easy-entry considerations, soft grooming, and low-stress travel — comfort gear for aging joints and quieter routines.",
    intro: [
      "Seniors need softer landings and fewer awkward jumps. Orthopedic foam beats thin flat cushions; ramps and low-entry litter matter more than cute colors.",
      "Keep wellness accessories honest: dental chews and calming wraps are tools, not diagnoses. Pain or sudden behavior changes belong with your vet.",
    ],
    productSlugs: [
      "furhaven-orthopedic-dog-bed",
      "bedsure-orthopedic-dog-bed",
      "petsafe-drinkwell-platinum",
      "hertzko-slicker-brush",
      "sherpa-original-deluxe-carrier",
      "thundershirt-anxiety-vest",
      "greenies-dental-treats",
    ],
    skipAdvice:
      "Skip high-sided litter boxes seniors cannot climb, thin crate pads on hard floors, and forcing long fetch sessions on sore joints.",
  },
  {
    slug: "pullers-and-walkers",
    title: "Best for leash pullers",
    eyebrow: "Use-case hub",
    description:
      "Front-clip harnesses, durable waste gear, and enrichment that burns brain energy so walks are not the only outlet.",
    intro: [
      "Pulling is usually under-exercise plus practiced habit. A front-clip harness helps steering; it does not install manners by itself.",
      "Pair gear with short training sessions and enrichment at home (KONG, puzzles) so the leash is not the only exciting thing in the day.",
    ],
    productSlugs: [
      "rabbitgoo-no-pull-harness",
      "ruffwear-front-range-harness",
      "blue-9-balance-harness",
      "amazon-basics-puppy-training-pads",
      "kong-classic",
      "outward-hound-puzzle",
      "greenies-dental-treats",
      "chuckit-ultra-ball",
    ],
    skipAdvice:
      "Skip choke/prong experiments as a first Amazon cart, and skip harnesses so loose the dog can back out at the first squirrel.",
  },
  {
    slug: "budget-starter-kit",
    title: "Budget starter pet kit",
    eyebrow: "Use-case hub",
    description:
      "A practical first cart for a new dog or cat: sleep/crate or litter basics, water, walk or scratch gear, cleanup, and one enrichment toy.",
    intro: [
      "Order of operations on a budget: safety containment (crate or litter setup), water they will drink, walk or scratch redirection, waste cleanup, then enrichment.",
      "Boring reliable gear that ships tomorrow beats a premium wishlist that never gets ordered.",
    ],
    productSlugs: [
      "midwest-puppy-starter-kit-medium",
      "furhaven-orthopedic-dog-bed",
      "amazon-basics-puppy-training-pads",
      "rabbitgoo-no-pull-harness",
      "amazon-basics-puppy-training-pads",
      "kong-classic",
      "fresh-step-clumping-litter",
      "hertzko-slicker-brush",
    ],
    skipAdvice:
      "Skip automatic litter robots and premium car carriers until the basics are covered and you know your pet's habits.",
  },
];

export function getHub(slug: string): Hub | undefined {
  return hubs.find((h) => h.slug === slug);
}
