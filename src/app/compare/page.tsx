import type { Metadata } from "next";
import Link from "next/link";
import { compares } from "@/data/compares";

export const metadata: Metadata = {
  title: "Compare",
  description:
    "Side-by-side PetWorth comparisons for dog beds, harnesses, cat fountains, and travel carriers.",
};

export default function CompareIndexPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
          Comparisons
        </p>
        <h1 className="mt-2 font-serif text-4xl text-stone-900">
          Side-by-side tables
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-stone-600">
          Honest forks — not scorecards. Each table ends with a verdict in plain
          language.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {compares.map((c) => (
          <Link
            key={c.slug}
            href={`/compare/${c.slug}`}
            className="rounded-2xl border border-stone-200 bg-white p-6 hover:border-emerald-300"
          >
            <h2 className="font-serif text-2xl text-stone-900">{c.title}</h2>
            <p className="mt-2 text-sm text-stone-600">{c.description}</p>
          </Link>
        ))}
      </div>
      <p className="text-sm text-stone-500">
        Want curated stacks instead?{" "}
        <Link href="/best" className="underline underline-offset-2">
          Best-for hubs
        </Link>
        .
      </p>
    </div>
  );
}
