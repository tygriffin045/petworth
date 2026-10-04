// Generated 2026-10-04 by /workspace/top10/badges (choose.py + gen.py) from live Amazon prices of each category's Top 10.
// Prices and the full price table live in /badges.json (not rendered). Re-run the scripts to refresh.
export type BadgeKind = "premium" | "bang" | "value";

export const BADGE_PICKS: Record<string, { badge: BadgeKind; slug: string; line: string }[]> = {
  "leashes-harnesses-collars": [{ badge: "premium", slug: "ruffwear-front-range-harness", line: "Highest-end pick in this Top 10: Ruffwear's Front Range chest harness." }, { badge: "bang", slug: "fida-heavy-duty-dog-leash-for", line: "Mid-priced Amazon Best Seller: a heavy-duty 4 ft leash with dual padded handles." }, { badge: "value", slug: "joytale-reflective-dog-leash-for-medium", line: "Lowest-priced pick in this Top 10, still well rated on Amazon: a reflective 6 ft leash." }],
  "toys-enrichment": [{ badge: "premium", slug: "west-paw-qwizl", line: "Highest-end pick in this Top 10: an interactive treat-dispensing puzzle toy." }, { badge: "bang", slug: "kong-classic", line: "Mid-priced Amazon Best Seller: the stuffable natural-rubber KONG Classic, in large." }, { badge: "value", slug: "chuckit-ultra-ball", line: "Lowest-priced pick in this Top 10, still well rated on Amazon: a floating fetch ball, 2-pack." }],
};
