# PetWorth

Editorial Amazon Associates picks for happier pets (dogs & cats).

**Associates tag:** `petworth20-20`  
**Link format:** `https://www.amazon.com/dp/{ASIN}?tag=petworth20-20`  
**Intended live URL:** https://petworth.vercel.app

> Register `petworth20-20` in Amazon Associates before relying on attributed earnings. Until the tag is approved/registered, links still work for shoppers but may not credit the account.

## High-conversion routes

- `/best` — use-case hubs (apartment pets, seniors, leash pullers, budget starter kit)
- `/compare` — side-by-side tables (dog beds, harnesses, cat fountains, carriers)
- `/guides` — buying guides (crate vs orthopedic beds, fountain vs bowl, harness vs collar)
- `/affiliate-disclosure` — FTC / Associates disclosure (no About page; no contact email)

## Categories

Dog beds & crates · Cat trees & scratchers · Feeders & fountains · Leashes/harnesses/collars · Grooming · Toys & enrichment · Travel · Litter · Training & waste · Health & wellness accessories

## Scripts

```bash
cd /workspace/petworth
npm install
npm run build
# Deploy when ready (do not deploy from this agent by default):
# vercel --prod --yes --project petworth
```

### Vercel notes

1. Create a Vercel project named `petworth` from this repo/folder.
2. Set env vars (see `.env.example`):
   - `NEXT_PUBLIC_AMAZON_ASSOCIATE_TAG=petworth20-20`
   - `NEXT_PUBLIC_SITE_URL=https://petworth.vercel.app`
3. Confirm the Associates tag is registered to your Amazon Associates account.
4. After first deploy, spot-check affiliate links include `tag=petworth20-20`.

## SEO

- `/robots.txt` via `src/app/robots.ts`
- `/sitemap.xml` via `src/app/sitemap.ts`
