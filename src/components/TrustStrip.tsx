export function TrustStrip() {
  return (
    <section className="rounded-2xl border border-emerald-100 bg-emerald-50/70 p-6 sm:p-8">
      <div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
            How we pick
          </p>
          <h2 className="mt-1 font-serif text-2xl text-stone-900 sm:text-3xl">
            Tradeoffs first. Scores never.
          </h2>
        </div>
      </div>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
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
      </div>
    </section>
  );
}
