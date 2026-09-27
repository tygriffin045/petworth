import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getGuide, guides } from "@/data/guides";
import { getProduct } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { AffiliateButton } from "@/components/AffiliateButton";
import { JsonLd } from "@/components/JsonLd";
import { AffiliateNote } from "@/components/AffiliateNote";
import { SITE_URL, SITE_NAME } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return { title: "Guide" };
  const meta = pageMetadata({
    path: `/guides/${slug}`,
    title: guide.seoTitle ?? guide.title,
    description: guide.metaDescription ?? guide.description,
  });
  return {
    ...meta,
    openGraph: { ...meta.openGraph, type: "article" },
  };
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const mentioned = guide.productSlugs
    .map((s) => getProduct(s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));
  const guideUrl = `${SITE_URL}/guides/${guide.slug}`;
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.metaDescription ?? guide.description,
    datePublished: guide.publishedAt,
    ...(guide.updatedAt ? { dateModified: guide.updatedAt } : {}),
    mainEntityOfPage: guideUrl,
    author: { "@type": "Organization", name: SITE_NAME },
  };
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Guides",
        item: `${SITE_URL}/guides`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: guide.title,
        item: guideUrl,
      },
    ],
  };
  const faqLd =
    guide.faqs && guide.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: guide.faqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          })),
        }
      : null;

  const picks = (guide.picks ?? [])
    .map((pick) => ({ pick, product: getProduct(pick.productSlug) }))
    .filter(
      (x): x is { pick: typeof x.pick; product: NonNullable<typeof x.product> } =>
        Boolean(x.product),
    );

  return (
    <article className="space-y-10">
      <JsonLd data={faqLd ? [articleLd, breadcrumbLd, faqLd] : [articleLd, breadcrumbLd]} />
      <header className="max-w-3xl">
        <p className="text-xs text-slate-500">
          <Link href="/guides" className="hover:text-slate-800">
            Guides
          </Link>{" "}
          · {guide.readingTime} · {guide.updatedAt ?? guide.publishedAt}
        </p>
        <h1 className="mt-2 font-serif text-4xl text-slate-900">
          {guide.title}
        </h1>
        <p className="mt-4 text-lg text-slate-600">{guide.description}</p>
        <AffiliateNote className="mt-3" />
      </header>

      {guide.quickPicks && guide.quickPicks.length > 0 && (
        <section
          aria-labelledby="quick-picks"
          className="max-w-3xl rounded-2xl border border-emerald-200 bg-emerald-50/60 p-5 sm:p-6"
        >
          <h2 id="quick-picks" className="font-serif text-2xl text-slate-900">
            Quick picks
          </h2>
          <ul className="mt-4 space-y-3 text-sm">
            {guide.quickPicks.map((q) => {
              const p = getProduct(q.productSlug);
              if (!p) return null;
              return (
                <li key={q.label} className="leading-relaxed text-slate-700">
                  <span className="font-semibold text-slate-900">{q.label}:</span>{" "}
                  <a
                    href={`#pick-${p.slug}`}
                    className="font-medium text-emerald-800 underline underline-offset-2"
                  >
                    {p.name}
                  </a>
                  . {q.note}
                </li>
              );
            })}
          </ul>
        </section>
      )}

      <div className="max-w-3xl space-y-8">
        {guide.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="font-serif text-2xl text-slate-900">
              {section.heading}
            </h2>
            <p className="mt-3 leading-relaxed text-slate-600">{section.body}</p>
          </section>
        ))}
      </div>

      {picks.length > 0 && (
        <section className="space-y-6">
          <h2 className="font-serif text-3xl text-slate-900">Our picks</h2>
          {picks.map(({ pick, product }, i) => (
            <div
              key={product.slug}
              id={`pick-${product.slug}`}
              className="scroll-mt-24 grid gap-6 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 md:grid-cols-[220px_1fr]"
            >
              <Link
                href={`/products/${product.slug}`}
                className="relative block aspect-square overflow-hidden rounded-xl bg-slate-50"
              >
                {product.imageUrl && (
                  <Image
                    src={product.imageUrl}
                    alt={product.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 220px"
                    className="object-contain p-3"
                    priority={i === 0}
                  />
                )}
              </Link>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
                  {i + 1}. {product.brand}
                </p>
                <h3 className="mt-1 font-serif text-2xl text-slate-900">
                  {pick.heading}
                </h3>
                <p className="mt-2 leading-relaxed text-slate-600">{pick.verdict}</p>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Pros</p>
                    <ul className="mt-1 list-disc space-y-1 pl-5 text-sm text-slate-600">
                      {pick.pros.map((x) => (
                        <li key={x}>{x}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Cons</p>
                    <ul className="mt-1 list-disc space-y-1 pl-5 text-sm text-slate-600">
                      {pick.cons.map((x) => (
                        <li key={x}>{x}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <p className="mt-4 text-sm text-slate-700">
                  <span className="font-semibold text-slate-900">Best for:</span>{" "}
                  {pick.suits}
                </p>
                {pick.skip && (
                  <p className="mt-1 text-sm text-slate-700">
                    <span className="font-semibold text-slate-900">Skip it if:</span>{" "}
                    {pick.skip}
                  </p>
                )}
                {pick.checked && (
                  <p className="mt-2 text-xs text-slate-500">{pick.checked}</p>
                )}
                <div className="mt-4 flex flex-wrap items-center gap-4">
                  <AffiliateButton
                    productSlug={product.slug}
                    productName={product.name}
                    amazonAsin={product.amazonAsin}
                    amazonQuery={product.amazonQuery}
                  />
                  <Link
                    href={`/products/${product.slug}`}
                    className="text-sm text-emerald-800 underline underline-offset-2"
                  >
                    Full notes
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </section>
      )}

      {guide.criteria && guide.criteria.length > 0 && (
        <section className="max-w-3xl">
          <h2 className="font-serif text-3xl text-slate-900">What to look for</h2>
          <dl className="mt-4 space-y-4">
            {guide.criteria.map((c) => (
              <div key={c.heading}>
                <dt className="font-semibold text-slate-900">{c.heading}</dt>
                <dd className="mt-1 leading-relaxed text-slate-600">{c.body}</dd>
              </div>
            ))}
          </dl>
        </section>
      )}

      {guide.faqs && guide.faqs.length > 0 && (
        <section className="max-w-3xl">
          <h2 className="font-serif text-3xl text-slate-900">FAQ</h2>
          <div className="mt-4 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
            {guide.faqs.map((f) => (
              <div key={f.question} className="p-5">
                <h3 className="font-semibold text-slate-900">{f.question}</h3>
                <p className="mt-2 leading-relaxed text-slate-600">{f.answer}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {picks.length === 0 && mentioned.length > 0 && (
        <section>
          <h2 className="font-serif text-2xl text-slate-900">
            Products mentioned
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {mentioned.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      )}

      <p className="text-sm text-slate-500">
        <Link href="/guides" className="underline underline-offset-2">
          ← All guides
        </Link>
      </p>
    </article>
  );
}
