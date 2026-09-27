import type { Metadata } from "next";
import Link from "next/link";
import { categories } from "@/data/categories";
import { getFeaturedProducts } from "@/data/products";
import { guides } from "@/data/guides";
import { hubs } from "@/data/hubs";
import { compares } from "@/data/compares";
import { ProductCard } from "@/components/ProductCard";
import { TrustStrip } from "@/components/TrustStrip";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const featured = getFeaturedProducts();

  return (
    <div className="space-y-16">
      <section className="relative overflow-hidden rounded-3xl border border-emerald-200/60 bg-[#e7efe8] px-6 py-14 sm:px-12 sm:py-20">
        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-emerald-400/20 blur-3xl" />
        <div className="absolute -bottom-20 left-1/3 h-56 w-56 rounded-full bg-amber-300/15 blur-3xl" />
        <div className="relative max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
            Pet gear, pressure-tested
          </p>
          <h1 className="mt-3 font-serif text-4xl leading-tight text-stone-900 sm:text-5xl">
            Honest picks for happier pets
          </h1>
          <p className="mt-4 text-lg text-stone-600">
            We edit dog and cat gear — beds and crates, cat trees, feeders and
            fountains, harnesses, grooming, toys, travel carriers, litter,
            training tools, and wellness accessories — with clear tradeoffs,
            who each pick is for, and what we would skip. No invented brand
            scores.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/products"
              className="rounded-full bg-emerald-950 px-5 py-2.5 text-sm font-semibold text-[#f3f6f1] hover:bg-stone-900"
            >
              Browse all products
            </Link>
            <Link
              href="/guides/harness-vs-collar-for-pullers"
              className="rounded-full border border-emerald-300/70 bg-white/70 px-5 py-2.5 text-sm font-semibold text-emerald-950 hover:bg-white"
            >
              Harness buying guide
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="font-serif text-3xl text-stone-900">
              Shop by category
            </h2>
            <p className="mt-1 text-stone-600">
              Start with the failure mode you feel — joints, pulling, litter
              scatter, ignored water bowls, or chewed furniture.
            </p>
          </div>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/category/${c.slug}`}
              className="rounded-2xl border border-stone-200/80 bg-white p-5 transition hover:border-emerald-300 hover:shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                Category
              </p>
              <h3 className="mt-1 font-serif text-xl text-stone-900">
                {c.name}
              </h3>
              <p className="mt-2 line-clamp-3 text-sm text-stone-600">
                {c.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="font-serif text-3xl text-stone-900">Top picks</h2>
            <p className="mt-1 text-stone-600">
              Featured gear with clear “best for” labels — the short list we
              would put in our own homes first.
            </p>
          </div>
          <Link
            href="/products"
            className="hidden text-sm font-medium text-emerald-800 underline underline-offset-4 sm:inline"
          >
            View all
          </Link>
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <ProductCard
              key={p.slug}
              product={p}
              priority={i === 0}
              showAffiliateCta
            />
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="font-serif text-3xl text-stone-900">
              Best for… & compare
            </h2>
            <p className="mt-1 text-stone-600">
              High-conversion starting points and side-by-side tables — not fake
              scorecards.
            </p>
          </div>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-stone-200 bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
              Hubs
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              {hubs.map((h) => (
                <li key={h.slug}>
                  <Link
                    href={`/best/${h.slug}`}
                    className="font-medium text-stone-900 underline-offset-2 hover:underline"
                  >
                    {h.title}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/best"
              className="mt-4 inline-block text-sm text-emerald-800 underline underline-offset-4"
            >
              All hubs
            </Link>
          </div>
          <div className="rounded-2xl border border-stone-200 bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
              Tables
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              {compares.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/compare/${c.slug}`}
                    className="font-medium text-stone-900 underline-offset-2 hover:underline"
                  >
                    {c.title}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/compare"
              className="mt-4 inline-block text-sm text-emerald-800 underline underline-offset-4"
            >
              All comparisons
            </Link>
          </div>
        </div>
      </section>

      <TrustStrip />

      <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
        <h2 className="font-serif text-2xl text-stone-900">
          Quick comparisons
        </h2>
        <p className="mt-1 text-sm text-stone-600">
          If you only remember three forks in the road:
        </p>
        <ul className="mt-4 space-y-3 text-sm text-stone-700">
          <li>
            <span className="font-semibold text-stone-900">
              Puppy vs senior sleep?
            </span>{" "}
            House-training → MidWest crate sized right. Stiff joints → Furhaven
            orthopedic. Shredder → skip plush until chewing is managed.
          </li>
          <li>
            <span className="font-semibold text-stone-900">
              Cat ignoring the bowl?
            </span>{" "}
            Try Catit Flower first. Multi-pet water hogs → Drinkwell Platinum.
            Dirty fountains beat clean bowls — only buy what you will scrub.
          </li>
          <li>
            <span className="font-semibold text-stone-900">Leash puller?</span>{" "}
            Budget dual-clip → Rabbitgoo. Daily miles → Ruffwear Front Range.
            Escape artist / odd proportions → Blue-9 Balance. Collars keep ID;
            harnesses take the load.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="font-serif text-3xl text-stone-900">Buying guides</h2>
        <p className="mt-1 text-stone-600">
          Longer reads with internal links to the products we mention.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {[...guides]
            .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
            .map((g) => (
            <Link
              key={g.slug}
              href={`/guides/${g.slug}`}
              className="rounded-2xl border border-stone-200/80 bg-white p-6 hover:border-emerald-300"
            >
              <p className="text-xs text-stone-500">
                {g.readingTime} · {g.publishedAt}
              </p>
              <h3 className="mt-2 font-serif text-xl text-stone-900">
                {g.title}
              </h3>
              <p className="mt-2 text-sm text-stone-600">{g.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
