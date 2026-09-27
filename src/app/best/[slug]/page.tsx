import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getHub, hubs } from "@/data/hubs";
import { getProduct } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { AffiliateNote } from "@/components/AffiliateNote";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return hubs.map((h) => ({ slug: h.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const hub = getHub(slug);
  if (!hub) return { title: "Best for…" };
  return pageMetadata({
    path: `/best/${slug}`,
    title: hub.title,
    description: hub.description,
  });
}

export default async function HubPage({ params }: Props) {
  const { slug } = await params;
  const hub = getHub(slug);
  if (!hub) notFound();

  const items = hub.productSlugs
    .map((s) => getProduct(s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <div className="space-y-10">
      <header className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
          {hub.eyebrow}
        </p>
        <h1 className="mt-2 font-serif text-4xl text-slate-900">{hub.title}</h1>
        <p className="mt-4 text-lg text-slate-600">{hub.description}</p>
        <AffiliateNote className="mt-3" />
      </header>

      <div className="max-w-3xl space-y-4">
        {hub.intro.map((para) => (
          <p key={para.slice(0, 48)} className="leading-relaxed text-slate-600">
            {para}
          </p>
        ))}
      </div>

      <section className="rounded-2xl border border-amber-200/80 bg-amber-50/50 p-5">
        <p className="text-sm font-semibold text-amber-950">What we would skip</p>
        <p className="mt-1 text-sm text-amber-900/90">{hub.skipAdvice}</p>
      </section>

      <section>
        <h2 className="font-serif text-2xl text-slate-900">Picks for this use case</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      <p className="text-sm text-slate-500">
        <Link href="/best" className="underline underline-offset-2">
          ← All hubs
        </Link>
        {" · "}
        <Link href="/compare" className="underline underline-offset-2">
          Compare tables
        </Link>
      </p>
    </div>
  );
}
