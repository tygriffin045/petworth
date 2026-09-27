import type { Metadata } from "next";
import Link from "next/link";
import { AffiliateNote } from "@/components/AffiliateNote";
import { guides } from "@/data/guides";

export const metadata: Metadata = {
  title: "Buying guides",
  description:
    "PetWorth buying guides for dog beds, cat fountains, and harnesses vs collars for pullers.",
};

export default function GuidesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-serif text-4xl text-stone-900">Buying guides</h1>
        <p className="mt-2 text-lg text-stone-600">
          Longer reads with internal links to the products we mention — no
          invented brand scores.
        </p>
        <AffiliateNote />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {guides.map((g) => (
          <Link
            key={g.slug}
            href={`/guides/${g.slug}`}
            className="rounded-2xl border border-stone-200/80 bg-white p-6 hover:border-emerald-300"
          >
            <p className="text-xs text-stone-500">
              {g.readingTime} · {g.publishedAt}
            </p>
            <h2 className="mt-2 font-serif text-2xl text-stone-900">
              {g.title}
            </h2>
            <p className="mt-2 text-sm text-stone-600">{g.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
