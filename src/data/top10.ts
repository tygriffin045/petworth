import type { Product } from "./types";
import { products, getProductsByCategory } from "./products";

/**
 * Top 10 picks per category page (ordered). Every ASIN was checked live and in stock on amazon.com on Oct 3, 2026.
 * Picks marked in TOP10_BESTSELLERS appeared on the matching Amazon Best Sellers list when checked.
 */
export const TOP10: Record<string, string[]> = {
  "dog-beds-crates": ["furhaven-orthopedic-dog-bed", "bedsure-orthopedic-dog-bed", "eheyciga-orthopedic-extra-large-dog-bed", "ksiia-washable-dog-bed-medium-size", "bedsure-calming-dog-bed-medium-size", "invenho-small-dog-bed-for-small", "bfpethome-orthopedic-washable-large-dog-bed", "spotted-play-orthopedic-dog-bed-with", "bedsure-supportmax-extra-thick-orthopedic-xl", "jollyvogue-small-dog-bed"],
  "cat-trees-scratchers": ["feandrea-cat-tree", "amazon-basics-cat-scratching-post", "petfusion-ultimate-cat-scratcher", "smartcat-ultimate-scratching-post", "scratch-lounge-original-xl", "kitty-city-xl-scratch-pads", "fdw-54-cat-tree-tower-dark", "yunique-cat-tree-with-cat-condo", "peekab-32-tall-cat-scratching-post", "heybly-cat-tree-with-toy"],
  "feeders-fountains": ["petsafe-drinkwell-platinum", "petlibro-automatic-feeder", "neater-feeder-deluxe", "frisco-double-diner", "veken-innovation-award-winner-stainless-steel", "veken-innovation-award-winner-95oz-2", "oneisall-7l-230oz-dog-water-fountain", "neareal-cat-water-fountain-stainless-steel", "grookpet-dog-water-fountain-for-large", "sharlovy-no-spill-dog-water-fountain"],
  "leashes-harnesses-collars": ["rabbitgoo-no-pull-harness", "ruffwear-front-range-harness", "blue-9-balance-harness", "ruffwear-flat-out-leash", "petsafe-easy-walk-harness", "taglory-rope-dog-leash-for-medium", "joytale-reflective-dog-leash-for-medium", "fida-heavy-duty-dog-leash-for", "2-hounds-design-freedom-no-pull", "best-pet-supplies-voyager-nylon-dog"],
  "grooming": ["furminator-deshedding-tool", "hertzko-slicker-brush", "furminator-cat-deshedding", "safari-nail-trimmer", "millers-forge-nail-clippers", "aumuca-cat-brush-for-shedding", "swihauk-self-cleaning-slicker-brush-skin", "dipoo-self-cleaning-shedding-brush-skin", "cooncicy-deshedding-brush-for-cat-small", "yiefur-cat-brush-for-shedding"],
  "toys-enrichment": ["kong-classic", "outward-hound-puzzle", "chuckit-ultra-ball", "kong-extreme", "west-paw-qwizl", "chuckit-sport-launcher", "nina-ottosson-dog-tornado", "kong-puppy", "kong-wobbler", "benebone-wishbone-dog-chew-toy-for"],
  "travel": ["sherpa-original-deluxe-carrier", "sleepypod-mobile-pet-bed", "kurgo-wander-bench-cover", "petmate-kennel-cab-carrier", "lehni-soft-sided-cat-dog-pet", "urpower-dog-car-seat-cover-for", "vceoa-17-5-x11-x11-pet", "victoper-dog-car-seat-cover", "henkelion-cat-carriers-dog-carrier-pet", "morpilot-cat-carrier-soft-for-large"],
  "litter": ["modkat-litter-box", "fresh-step-clumping-litter", "petsafe-scoopfree-litter-box", "petsafe-scoopfree-tray-refills", "dr-elsey-s-ultra-unscented-clumping", "kiseng-stainless-steel-cat-litter-box", "arm-hammer-slide-platinum-easy-clean", "petmate-basic-open-plastic-cat-litter", "onebug-high-sided-stainless-steel-xl", "cat-s-pride-antibacterial-litter"],
  "training-waste": ["petsafe-busy-buddy-tug-a-jug", "amazon-basics-leak-proof-dog-and", "amazon-basics-x-large-heavy-duty", "powools-puppy-pads-for-dogs", "glad-for-pets-activated-carbon-disposable", "cocoyo-best-value-22-x22-dog", "powools-puppy-pads-for-dogs-2", "cocoyo-training-pads", "honey-care-all-absorb", "dogcator-dog-pee-pads-extra-large"],
  "health-wellness": ["thundershirt-anxiety-vest", "greenies-dental-treats", "zesty-paws-calming-bites", "purina-pro-plan-veterinary-supplements-calming", "jasper-dog-toothbrush", "woof-pupsicle-refill-pops-for-calming", "pets-pupps-pet-toothbrush-for-dogs", "zesty-paws-calming-chews-for-dogs", "juwantu-dog-toothbrush-set-of-8", "therapetmd-60-day-dog-calming-diffuser"],
  "aquatics-aquarium": ["aqueon-20-gallon-led-starter-kit", "fluval-c3-power-filter", "api-freshwater-master-test-kit", "aqueon-pro-heater-50w", "aqueon-quietflow-cartridges-medium", "tetra-whisper-bio-bag-large-filter", "seachem-prime-500-ml-17-fl", "aqueon-aquarium-fish-tank-replacement-filter", "tetramin-tropical-flakes-fish-food", "tetra-goldfish-flakes-fish-food"],
  "small-pets": ["oxbow-western-timothy-hay", "oxbow-essentials-guinea-pig-food", "oxbow-essentials-adult-rabbit-food", "snaat-20-planes-guinea-pig-cages", "mcage-deluxe-double-unit-two-full", "kaytee-timothy-hay", "vevor-metal-small-animal-cage-34", "critter-nation-by-midwest-double-unit", "kaytee-fiesta-rabbit-food", "hotamo-wooden-hamster-cage-with-acrylic"],
  "bird-supplies": ["prevue-parakeet-starter-cage", "super-bird-star-gazer-toy", "viscoo-upgraded-encrypted-metal-46-inch", "lovyococo-bird-shredding-foraging-toys-parakeet", "a-e-cage-company-vitapol-smakers", "yixund-bird-toys-parrot-toys-for", "prevue-pet-parakeet-manor-bird-cage", "kyouki-bird-toys-parrot-toys-natural", "vevor-30-inch-flight-bird-cage", "lovyococo-bird-toys-conure-toys-bird"],
  "reptile-supplies": ["zoo-med-reptisun-5-uvb-24", "zoo-med-repti-basking-spot-100w", "coconut-reptile-hide", "fluker-s-incandescent-basking-spotlight-bulbs", "fluker-s-buffet-blend-aquatic-formula", "fluker-s-repta-clamp-lamp", "tetra-reptomin-floating-food-sticks-for", "reptiking-reptile-heat-bulb-lamp", "fluker-s-freeze-dried-river-shrimp", "reptiking-reptile-light-fixture"],
  "flea-tick-prevention": ["seresto-large-dog-collar", "tick-key-remover", "seresto-cat-collar", "seresto-small-dog-vet-recommended-flea", "hartz-ultraguard-flea-tick-collar-for", "arncre-flea-and-tick-collar-for", "hartz-ultraguard-pro-reflective-flea-tick", "petarmor-extend-large-dog-flea-and", "vicsom-flea-collar-for-cats", "wondercide-dog-collar"],
  "puppy-kitten-starter": ["midwest-puppy-starter-kit-medium", "amazon-basics-puppy-training-pads", "nylabone-puppy-teething-chew", "purina-kitten-chow", "gotags-slide-on-id-tag", "wowflash-50-count-30-x-36", "kong-puppy-natural-rubber-teething-chew", "nylabone-new-puppy-starter-kit", "cocoyo-best-value-training-pads-30", "nylabone-puppy-chew-teething-ring-bone"],
  "slow-feeders": ["outward-hound-slow-feeder", "mateeylife-2-pack-slow-feeder-dog", "lukito-lick-mat-for-dogs-cats", "woof-walkabout-dog-puzzle-slow-feeder", "le-tauci-ceramic-slow-feeder-dog", "yipetor-dog-lick-bowl", "feedoo-slow-feeder-dog-bowl-2cups", "boyoyo-interactive-dog-toys", "keegud-slow-feeder-dog-bowls-insert", "kilin-slow-feeder-dog-licking-bowl"],
};

export const TOP10_BESTSELLERS: Record<string, string[]> = {
  "dog-beds-crates": ["eheyciga-orthopedic-extra-large-dog-bed", "ksiia-washable-dog-bed-medium-size", "bedsure-calming-dog-bed-medium-size", "invenho-small-dog-bed-for-small", "bfpethome-orthopedic-washable-large-dog-bed", "spotted-play-orthopedic-dog-bed-with", "bedsure-supportmax-extra-thick-orthopedic-xl", "jollyvogue-small-dog-bed"],
  "cat-trees-scratchers": ["feandrea-cat-tree", "amazon-basics-cat-scratching-post", "fdw-54-cat-tree-tower-dark", "yunique-cat-tree-with-cat-condo", "peekab-32-tall-cat-scratching-post", "heybly-cat-tree-with-toy"],
  "feeders-fountains": ["veken-innovation-award-winner-stainless-steel", "veken-innovation-award-winner-95oz-2", "oneisall-7l-230oz-dog-water-fountain", "neareal-cat-water-fountain-stainless-steel", "grookpet-dog-water-fountain-for-large", "sharlovy-no-spill-dog-water-fountain"],
  "leashes-harnesses-collars": ["taglory-rope-dog-leash-for-medium", "joytale-reflective-dog-leash-for-medium", "fida-heavy-duty-dog-leash-for", "2-hounds-design-freedom-no-pull", "best-pet-supplies-voyager-nylon-dog"],
  "grooming": ["furminator-cat-deshedding", "aumuca-cat-brush-for-shedding", "swihauk-self-cleaning-slicker-brush-skin", "dipoo-self-cleaning-shedding-brush-skin", "cooncicy-deshedding-brush-for-cat-small", "yiefur-cat-brush-for-shedding"],
  "toys-enrichment": ["kong-classic", "chuckit-ultra-ball", "benebone-wishbone-dog-chew-toy-for"],
  "travel": ["sherpa-original-deluxe-carrier", "lehni-soft-sided-cat-dog-pet", "urpower-dog-car-seat-cover-for", "vceoa-17-5-x11-x11-pet", "victoper-dog-car-seat-cover", "henkelion-cat-carriers-dog-carrier-pet", "morpilot-cat-carrier-soft-for-large"],
  "litter": ["fresh-step-clumping-litter", "dr-elsey-s-ultra-unscented-clumping", "kiseng-stainless-steel-cat-litter-box", "arm-hammer-slide-platinum-easy-clean", "petmate-basic-open-plastic-cat-litter", "onebug-high-sided-stainless-steel-xl", "cat-s-pride-antibacterial-litter"],
  "training-waste": ["amazon-basics-leak-proof-dog-and", "amazon-basics-x-large-heavy-duty", "powools-puppy-pads-for-dogs", "glad-for-pets-activated-carbon-disposable", "cocoyo-best-value-22-x22-dog", "powools-puppy-pads-for-dogs-2", "cocoyo-training-pads", "honey-care-all-absorb", "dogcator-dog-pee-pads-extra-large"],
  "health-wellness": ["purina-pro-plan-veterinary-supplements-calming", "jasper-dog-toothbrush", "woof-pupsicle-refill-pops-for-calming", "pets-pupps-pet-toothbrush-for-dogs", "zesty-paws-calming-chews-for-dogs", "juwantu-dog-toothbrush-set-of-8", "therapetmd-60-day-dog-calming-diffuser"],
  "aquatics-aquarium": ["api-freshwater-master-test-kit", "aqueon-quietflow-cartridges-medium", "tetra-whisper-bio-bag-large-filter", "seachem-prime-500-ml-17-fl", "aqueon-aquarium-fish-tank-replacement-filter", "tetramin-tropical-flakes-fish-food", "tetra-goldfish-flakes-fish-food"],
  "small-pets": ["oxbow-essentials-guinea-pig-food", "oxbow-essentials-adult-rabbit-food", "snaat-20-planes-guinea-pig-cages", "mcage-deluxe-double-unit-two-full", "kaytee-timothy-hay", "vevor-metal-small-animal-cage-34", "critter-nation-by-midwest-double-unit", "kaytee-fiesta-rabbit-food", "hotamo-wooden-hamster-cage-with-acrylic"],
  "bird-supplies": ["viscoo-upgraded-encrypted-metal-46-inch", "lovyococo-bird-shredding-foraging-toys-parakeet", "a-e-cage-company-vitapol-smakers", "yixund-bird-toys-parrot-toys-for", "prevue-pet-parakeet-manor-bird-cage", "kyouki-bird-toys-parrot-toys-natural", "vevor-30-inch-flight-bird-cage", "lovyococo-bird-toys-conure-toys-bird"],
  "reptile-supplies": ["fluker-s-incandescent-basking-spotlight-bulbs", "fluker-s-buffet-blend-aquatic-formula", "fluker-s-repta-clamp-lamp", "tetra-reptomin-floating-food-sticks-for", "reptiking-reptile-heat-bulb-lamp", "fluker-s-freeze-dried-river-shrimp", "reptiking-reptile-light-fixture"],
  "flea-tick-prevention": ["seresto-large-dog-collar", "seresto-cat-collar", "seresto-small-dog-vet-recommended-flea", "hartz-ultraguard-flea-tick-collar-for", "arncre-flea-and-tick-collar-for", "hartz-ultraguard-pro-reflective-flea-tick", "petarmor-extend-large-dog-flea-and", "vicsom-flea-collar-for-cats", "wondercide-dog-collar"],
  "puppy-kitten-starter": ["wowflash-50-count-30-x-36", "kong-puppy-natural-rubber-teething-chew", "nylabone-new-puppy-starter-kit", "cocoyo-best-value-training-pads-30", "nylabone-puppy-chew-teething-ring-bone"],
  "slow-feeders": ["outward-hound-slow-feeder", "mateeylife-2-pack-slow-feeder-dog", "lukito-lick-mat-for-dogs-cats", "woof-walkabout-dog-puzzle-slow-feeder", "le-tauci-ceramic-slow-feeder-dog", "yipetor-dog-lick-bowl", "feedoo-slow-feeder-dog-bowl-2cups", "boyoyo-interactive-dog-toys", "keegud-slow-feeder-dog-bowls-insert", "kilin-slow-feeder-dog-licking-bowl"],
};

export function getTopPicks(category: string): Product[] {
  const slugs = TOP10[category];
  if (!slugs) return getProductsByCategory(category).slice(0, 10);
  return slugs
    .map((s) => products.find((p) => p.slug === s))
    .filter((p): p is Product => Boolean(p));
}

export const PICKS: Record<string, { best: string; premium: string; value: string }> = {
  "dog-beds-crates": { best: "furhaven-orthopedic-dog-bed", premium: "bedsure-orthopedic-dog-bed", value: "jollyvogue-small-dog-bed" },
  "cat-trees-scratchers": { best: "feandrea-cat-tree", premium: "smartcat-ultimate-scratching-post", value: "kitty-city-xl-scratch-pads" },
  "feeders-fountains": { best: "petsafe-drinkwell-platinum", premium: "petlibro-automatic-feeder", value: "frisco-double-diner" },
  "leashes-harnesses-collars": { best: "rabbitgoo-no-pull-harness", premium: "blue-9-balance-harness", value: "joytale-reflective-dog-leash-for-medium" },
  "grooming": { best: "furminator-deshedding-tool", premium: "furminator-cat-deshedding", value: "cooncicy-deshedding-brush-for-cat-small" },
  "toys-enrichment": { best: "kong-classic", premium: "kong-wobbler", value: "chuckit-ultra-ball" },
  "travel": { best: "sherpa-original-deluxe-carrier", premium: "sleepypod-mobile-pet-bed", value: "lehni-soft-sided-cat-dog-pet" },
  "litter": { best: "modkat-litter-box", premium: "petsafe-scoopfree-litter-box", value: "petmate-basic-open-plastic-cat-litter" },
  "training-waste": { best: "petsafe-busy-buddy-tug-a-jug", premium: "glad-for-pets-activated-carbon-disposable", value: "cocoyo-best-value-22-x22-dog" },
  "health-wellness": { best: "thundershirt-anxiety-vest", premium: "purina-pro-plan-veterinary-supplements-calming", value: "juwantu-dog-toothbrush-set-of-8" },
  "aquatics-aquarium": { best: "aqueon-20-gallon-led-starter-kit", premium: "fluval-c3-power-filter", value: "tetra-goldfish-flakes-fish-food" },
  "small-pets": { best: "oxbow-western-timothy-hay", premium: "critter-nation-by-midwest-double-unit", value: "oxbow-essentials-adult-rabbit-food" },
  "bird-supplies": { best: "prevue-parakeet-starter-cage", premium: "viscoo-upgraded-encrypted-metal-46-inch", value: "a-e-cage-company-vitapol-smakers" },
  "reptile-supplies": { best: "zoo-med-reptisun-5-uvb-24", premium: "zoo-med-repti-basking-spot-100w", value: "fluker-s-incandescent-basking-spotlight-bulbs" },
  "flea-tick-prevention": { best: "seresto-large-dog-collar", premium: "seresto-cat-collar", value: "tick-key-remover" },
  "puppy-kitten-starter": { best: "midwest-puppy-starter-kit-medium", premium: "amazon-basics-puppy-training-pads", value: "nylabone-puppy-chew-teething-ring-bone" },
  "slow-feeders": { best: "outward-hound-slow-feeder", premium: "woof-walkabout-dog-puzzle-slow-feeder", value: "keegud-slow-feeder-dog-bowls-insert" },
};

export function getThreePicks(category: string) {
  const m = PICKS[category];
  if (!m) return null;
  const find = (s: string) => products.find((p) => p.slug === s);
  const best = find(m.best), premium = find(m.premium), value = find(m.value);
  if (!best || !premium || !value) return null;
  return { best, premium, value };
}

/** Home page Top 10: the Best Overall pick from ten of the seventeen pet categories (dog and cat essentials first). */
export const HOME_TOP10: { category: string; role: "best" | "premium" }[] = [
  { category: "dog-beds-crates", role: "best" },
  { category: "cat-trees-scratchers", role: "best" },
  { category: "feeders-fountains", role: "best" },
  { category: "leashes-harnesses-collars", role: "best" },
  { category: "grooming", role: "best" },
  { category: "toys-enrichment", role: "best" },
  { category: "travel", role: "best" },
  { category: "litter", role: "best" },
  { category: "health-wellness", role: "best" },
  { category: "slow-feeders", role: "best" },
];
export const HOME_TOP10_CATEGORIES = HOME_TOP10.map((h) => h.category);

export function getHomeTop10(): Product[] {
  return HOME_TOP10.map((h) => products.find((p) => p.slug === PICKS[h.category][h.role])).filter(
    (p): p is Product => Boolean(p),
  );
}
