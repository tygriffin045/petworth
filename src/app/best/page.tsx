import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { AffiliateNote } from "@/components/AffiliateNote";
import { hubs } from "@/data/hubs";

export const metadata: Metadata = pageMetadata({
  path: "/best",
  title: "Best for… hubs",
  description:
    "High-conversion PetWorth hubs: apartment pets, seniors, leash pullers, and budget starter kits.",
});

export default function BestIndexPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
          Use-case hubs
        </p>
        <h1 className="mt-2 font-serif text-4xl text-stone-900">
          Best for… starting points
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-stone-600">
          Skip vague “best overall” lists. These hubs start from the failure mode
          you feel — apartment limits, senior comfort, pulling, or budget — and
          point to picks with clear skip advice.
        </p>
        <AffiliateNote />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {hubs.map((h) => (
          <Link
            key={h.slug}
            href={`/best/${h.slug}`}
            className="rounded-2xl border border-stone-200 bg-white p-6 hover:border-emerald-300"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">
              {h.eyebrow}
            </p>
            <h2 className="mt-2 font-serif text-2xl text-stone-900">
              {h.title}
            </h2>
            <p className="mt-2 text-sm text-stone-600">{h.description}</p>
          </Link>
        ))}
      </div>
      <p className="text-sm text-stone-500">
        Prefer a side-by-side table?{" "}
        <Link href="/compare" className="underline underline-offset-2">
          Browse comparisons
        </Link>
        .
      </p>
    </div>
  );
}
