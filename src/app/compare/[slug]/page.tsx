import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { compares, getCompare } from "@/data/compares";
import { getProduct } from "@/data/products";
import { getAffiliateUrl } from "@/lib/affiliate";
import { ProductCard } from "@/components/ProductCard";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return compares.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const table = getCompare(slug);
  if (!table) return { title: "Compare" };
  return { title: table.title, description: table.description };
}

export default async function ComparePage({ params }: Props) {
  const { slug } = await params;
  const table = getCompare(slug);
  if (!table) notFound();

  const products = table.rows
    .map((r) => getProduct(r.productSlug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <div className="space-y-10">
      <header className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
          Comparison
        </p>
        <h1 className="mt-2 font-serif text-4xl text-slate-900">{table.title}</h1>
        <p className="mt-4 text-lg text-slate-600">{table.intro}</p>
      </header>

      <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-wider text-slate-500">
            <tr>
              {table.columns.map((col) => (
                <th key={col.key} className="px-4 py-3 font-semibold">
                  {col.label}
                </th>
              ))}
              <th className="px-4 py-3 font-semibold">CTA</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {table.rows.map((row) => {
              const product = getProduct(row.productSlug);
              const name = product?.name ?? row.productSlug;
              const href = getAffiliateUrl({
                slug: row.productSlug,
                amazonAsin: product?.amazonAsin,
                amazonQuery: product?.amazonQuery,
              });
              return (
                <tr key={row.productSlug} className="align-top">
                  <td className="px-4 py-3 font-medium text-slate-900">
                    <Link
                      href={`/products/${row.productSlug}`}
                      className="underline-offset-2 hover:underline"
                    >
                      {name}
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-slate-600">{row.bestFor}</td>
                  <td className="px-4 py-3 text-slate-600">{row.loftOrFeel}</td>
                  <td className="px-4 py-3 text-slate-600">{row.cooling}</td>
                  <td className="px-4 py-3 text-slate-600">{row.priceBand}</td>
                  <td className="px-4 py-3 text-slate-600">{row.skipIf}</td>
                  <td className="px-4 py-3">
                    <a
                      href={href}
                      target="_blank"
                      rel="nofollow sponsored noopener noreferrer"
                      className="inline-flex whitespace-nowrap rounded-full bg-emerald-700 px-3 py-1.5 text-xs font-semibold text-white hover:bg-emerald-800"
                    >
                      Check price
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <section className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-6">
        <h2 className="font-serif text-xl text-slate-900">Verdict</h2>
        <p className="mt-2 text-slate-700">{table.verdict}</p>
      </section>

      <section>
        <h2 className="font-serif text-2xl text-slate-900">Cards</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      <p className="text-sm text-slate-500">
        <Link href="/compare" className="underline underline-offset-2">
          ← All comparisons
        </Link>
        {" · "}
        <Link href="/best" className="underline underline-offset-2">
          Best-for hubs
        </Link>
      </p>
    </div>
  );
}
