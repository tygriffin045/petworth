import { BreadcrumbLd, ItemListLd } from "@/components/SeoLd";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categories, getCategory } from "@/data/categories";
import { getTopPicks, getThreePicks } from "@/data/top10";
import { AffiliateButton } from "@/components/AffiliateButton";
import { StickyAffiliateBar } from "@/components/StickyAffiliateBar";
import { Top10List } from "@/components/Top10List";
import { AffiliateNote } from "@/components/AffiliateNote";
import { guides } from "@/data/guides";
import { BadgePicks } from "@/components/BadgePicks";

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
  const lead = getThreePicks(slug)?.best ?? items[0];
  const relatedGuides = guides.filter((g) =>
    g.categorySlugs?.includes(category.slug),
  );

  return (
    <div className="space-y-8">
      <BreadcrumbLd trail={[[category.name, `/category/${category.slug}`]]} />
      <ItemListLd name={`Top ${items.length} ${category.name}`} items={items.map((p) => ({ name: p.name, path: `/products/${p.slug}` }))} />
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
          Top {items.length} picks with pros and cons · budget tiers: $ budget ·
          $$ mid-range · $$$ premium ·{" "}
          <Link href="/products" className="underline underline-offset-2">
            View all
          </Link>
        </p>
        <AffiliateNote />
        {lead && (
          <div
            className="mt-5 flex flex-col gap-3 rounded-2xl border-2 border-emerald-800/25 bg-white p-4 sm:flex-row sm:items-center sm:justify-between"
            data-top-cta
          >
            <p className="text-sm text-slate-700">
              <span className="font-bold uppercase tracking-wide text-emerald-800">Best Overall:</span>{" "}
              <Link href={`/products/${lead.slug}`} className="font-semibold text-slate-900 underline underline-offset-2">
                {lead.name}
              </Link>
            </p>
            <AffiliateButton
              productSlug={lead.slug}
              productName={lead.name}
              amazonAsin={lead.amazonAsin}
              amazonQuery={lead.amazonQuery}
              placement="category_top"
              className="shrink-0"
            />
          </div>
        )}
      </div>
      <BadgePicks category={slug} />
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
      <Top10List items={items} heading={`Top ${items.length} ${category.name}`} />
      {lead && (
        <StickyAffiliateBar
          productSlug={lead.slug}
          productName={lead.name}
          amazonAsin={lead.amazonAsin}
          amazonQuery={lead.amazonQuery}
          label="Best Overall"
          placement="category_sticky"
        />
      )}
    </div>
  );
}
