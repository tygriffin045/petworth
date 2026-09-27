import Link from "next/link";
import { categories } from "@/data/categories";
import { AFFILIATE_DISCLOSURE_SHORT } from "@/lib/affiliate";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-emerald-900/30 bg-emerald-950 text-emerald-100/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-serif text-2xl text-[#f3f6f1]">PetWorth</p>
          <p className="mt-2 text-sm text-emerald-200/70">
            Editorial pet gear picks for dogs and cats — beds and crates, cat
            trees, feeders and fountains, walk gear, grooming, toys, travel,
            litter, training, and wellness accessories. Tradeoffs over hype.
          </p>
          <p className="mt-4 text-xs leading-relaxed text-emerald-300/60">
            {AFFILIATE_DISCLOSURE_SHORT}{" "}
            <Link
              href="/affiliate-disclosure"
              className="underline underline-offset-2 hover:text-emerald-100"
            >
              Full disclosure
            </Link>
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-emerald-300/50">
            Categories
          </p>
          <ul className="mt-3 columns-1 space-y-2 text-sm sm:columns-2">
            {categories.map((c) => (
              <li key={c.slug} className="break-inside-avoid">
                <Link
                  href={`/category/${c.slug}`}
                  className="hover:text-[#f3f6f1]"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-emerald-300/50">
            Site
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/products" className="hover:text-[#f3f6f1]">
                All products
              </Link>
            </li>
            <li>
              <Link href="/best" className="hover:text-[#f3f6f1]">
                Best for… hubs
              </Link>
            </li>
            <li>
              <Link href="/compare" className="hover:text-[#f3f6f1]">
                Compare tables
              </Link>
            </li>
            <li>
              <Link href="/guides" className="hover:text-[#f3f6f1]">
                Buying guides
              </Link>
            </li>
            <li>
              <Link
                href="/affiliate-disclosure"
                className="hover:text-[#f3f6f1]"
              >
                Affiliate disclosure
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-emerald-900 py-4 text-center text-xs text-emerald-300/40">
        © {new Date().getFullYear()} PetWorth. As an Amazon Associate we earn
        from qualifying purchases. Tag: petworth20-20.
      </div>
    </footer>
  );
}
