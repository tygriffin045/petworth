import type { Guide } from "./types";

export const guides: Guide[] = [
  {
    slug: "dog-beds-crate-vs-orthopedic",
    title: "Dog beds: crate training vs orthopedic seniors",
    description:
      "When a wire crate builds habits, when thick foam saves joints, and how chewing habits should veto plush beds.",
    readingTime: "7 min read",
    publishedAt: "2026-06-10",
    productSlugs: [
      "midwest-puppy-starter-kit-medium",
      "furhaven-orthopedic-dog-bed",
      "bedsure-orthopedic-dog-bed",
      "kong-classic",
    ],
    sections: [
      {
        heading: "Crate first when the job is routine",
        body: "Puppies and newly adopted dogs often need a correctly sized crate more than a designer bed. A MidWest-style double-door iCrate with a divider keeps the space snug for house-training: stand, turn, lie down — not a playpen palace. Add a flat crate pad once chewing calms down. Soft sofa beds inside an oversized crate can slow potty training if the dog learns to soil one corner.",
      },
      {
        heading: "Orthopedic foam when joints are the complaint",
        body: "Seniors who hesitate to lie on hard floors usually need pressure relief, not more crate drama. Furhaven-style bolstered orthopedic beds give chin rests for nestlers; thicker Bedsure-style slabs help heavy dogs that pancake thin foam in weeks. Washable covers matter — orthopedics get oily and dusty.",
      },
      {
        heading: "Chewing vetoes fabric",
        body: "If your dog shreds beds overnight, stop buying plush. Use a chew-resistant cot or keep rest inside a crate with a tough pad, and give legal outlets like a stuffed KONG. Replacing destroyed orthopedic beds is how people decide “dog beds do not work.”",
      },
      {
        heading: "A practical buy order",
        body: "1) Puppy / potty routine → correctly sized wire crate. 2) Adult or senior with stiff mornings → orthopedic foam bed sized by weight. 3) Heavy dog flattening foam → thicker slab. 4) Shredder → skip fabric until chewing is managed. Give any new bed a week in the dog's favorite spot before you judge it.",
      },
    ],
  },
  {
    slug: "cat-fountain-vs-bowl",
    title: "Cat fountain vs bowl: when moving water is worth it",
    description:
      "Why some cats ignore still water, how to transition safely, and which fountain size matches your household.",
    readingTime: "6 min read",
    publishedAt: "2026-07-02",
    productSlugs: [
      "pioneer-pet-raindrop-fountain",
      "petsafe-drinkwell-platinum",
      "petlibro-automatic-feeder",
      "modkat-litter-box",
    ],
    sections: [
      {
        heading: "Bowls fail quietly",
        body: "Cats often prefer fresh, moving water — and they notice stale bowls next to food. Whisker fatigue is debated, but wide shallow dishes help some cats. If urine looks concentrated or your cat hangs around the sink, a fountain is a reasonable experiment — not a medical diagnosis. See your vet for drinking or urinary concerns.",
      },
      {
        heading: "Fountain tradeoffs that matter",
        body: "Catit Flower wins for small footprints and adjustable trickle modes. PetSafe Drinkwell Platinum wins when multiple pets empty small reservoirs daily. Both need real cleaning; biofilm is the failure mode people underestimate. Keep the old bowl available for several days during the switch.",
      },
      {
        heading: "What a fountain is not",
        body: "A fountain is not an automatic feeder, not a litter solution, and not a substitute for wet food moisture if your vet recommended dietary changes. If meal timing is the problem, look at a dry-food timed feeder separately.",
      },
      {
        heading: "Buy order",
        body: "1) Single picky cat → Catit Flower. 2) Multi-pet water station → Drinkwell Platinum. 3) Confirm you will scrub weekly before buying any motorized fountain. Place water away from litter when possible — most cats prefer that separation.",
      },
    ],
  },
  {
    slug: "harness-vs-collar-for-pullers",
    title: "Harness vs collar for pullers",
    description:
      "Why collars stay for ID, when front-clip harnesses help, and how fit beats brand stories on the sidewalk.",
    readingTime: "7 min read",
    publishedAt: "2026-08-15",
    productSlugs: [
      "rabbitgoo-no-pull-harness",
      "ruffwear-front-range-harness",
      "blue-9-balance-harness",
      "amazon-basics-puppy-training-pads",
      "greenies-dental-treats",
    ],
    sections: [
      {
        heading: "Collars for identity, harnesses for load",
        body: "Keep a collar with ID tags. Put walking load on a well-fitted harness, especially for pullers and small breeds prone to tracheal stress. A collar-only setup teaches many dogs that leaning into pressure works.",
      },
      {
        heading: "Front-clip is a steering aid",
        body: "Front D-rings on harnesses like Rabbitgoo redirect forward lunges sideways so you can reset. Back clips are fine for polite walkers and casual strolls. Neither installs manners alone — pair with treats, short sessions, and realistic exercise.",
      },
      {
        heading: "Fit failures to avoid",
        body: "Too loose = escape artist. Too tight = chafing. Deep-chested or skinny-waisted dogs often need more adjustment points (Blue-9 Balance) or a padded daily driver (Ruffwear Front Range) once the budget harness wears out. Two-finger checks at the girth are a useful starting heuristic.",
      },
      {
        heading: "Buy order",
        body: "1) First puller harness on a budget → Rabbitgoo dual-clip. 2) Daily miles in all weather → Ruffwear Front Range. 3) Escape artist / odd proportions → Blue-9. Always bring waste bags. Add a remote treat trainer only after basic engagement exists.",
      },
    ],
  },
];

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}
