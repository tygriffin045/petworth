import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categories, getCategory } from "@/data/categories";
import { getTopPicks } from "@/data/top10";
import { ProductCard } from "@/components/ProductCard";
import { AffiliateNote } from "@/components/AffiliateNote";
import { guides } from "@/data/guides";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return { title: "Category" };
  return pageMetadata({
    path: `/category/${slug}`,
    title: category.name,
    description: category.description,
  });
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const items = getTopPicks(slug);
  const relatedGuides = guides.filter((g) =>
    g.categorySlugs?.includes(category.slug),
  );

  return (
    <div className="space-y-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
          Category
        </p>
        <h1 className="mt-2 font-serif text-4xl text-slate-900">
          {category.name}
        </h1>
        <p className="mt-3 max-w-3xl text-lg text-slate-600">
          {category.description}
        </p>
        <p className="mt-2 text-sm text-slate-500">
          Top {items.length} picks · each card
          carries a &quot;best for&quot; label ·{" "}
          <Link href="/products" className="underline underline-offset-2">
            View all
          </Link>
        </p>
        <AffiliateNote />
      </div>
      {relatedGuides.length > 0 && (
        <section className="rounded-2xl border border-stone-200 bg-white p-5">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
            Buying guides
          </h2>
          <ul className="mt-2 space-y-1 text-sm">
            {relatedGuides.map((g) => (
              <li key={g.slug}>
                <Link
                  href={`/guides/${g.slug}`}
                  className="font-medium text-stone-900 underline-offset-2 hover:underline"
                >
                  {g.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </div>
  );
}
