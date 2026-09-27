import Link from "next/link";

export function TrustStrip() {
  return (
    <section className="rounded-2xl border border-emerald-100 bg-emerald-50/70 p-6 sm:p-8">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
            How we pick
          </p>
          <h2 className="mt-1 font-serif text-2xl text-stone-900 sm:text-3xl">
            Tradeoffs first. Scores never.
          </h2>
        </div>
        <Link
          href="/affiliate-disclosure"
          className="text-sm font-medium text-emerald-800 underline underline-offset-4"
        >
          Read our FTC disclosure →
        </Link>
      </div>
      <div className="mt-6 grid gap-5 sm:grid-cols-3">
        <div>
          <p className="text-sm font-semibold text-emerald-950">
            Specific use cases
          </p>
          <p className="mt-1 text-sm text-stone-600">
            Every pick says who it is for — senior joints, apartment litter
            scatter, leash pullers — not a vague “best overall.”
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-emerald-950">
            What we would skip
          </p>
          <p className="mt-1 text-sm text-stone-600">
            We name failure modes: plush beds for shredders, fountains you will
            never clean, harnesses so loose a dog backs out at the first
            squirrel.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-emerald-950">
            Clear Amazon links
          </p>
          <p className="mt-1 text-sm text-stone-600">
            Associates tag petworth20-20 on every link. No invented 9.7/10 brand
            scores. You pay the same price.
          </p>
        </div>
      </div>
    </section>
  );
}
