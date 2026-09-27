import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getGuide, guides } from "@/data/guides";
import { getProduct } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { JsonLd } from "@/components/JsonLd";
import { AffiliateNote } from "@/components/AffiliateNote";
import { SITE_URL, SITE_NAME } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return { title: "Guide" };
  return {
    title: guide.title,
    description: guide.description,
    openGraph: {
      title: guide.title,
      description: guide.description,
      url: `/guides/${slug}`,
      type: "article",
      images: [{ url: `${SITE_URL}/og/default.jpg`, width: 1200, height: 630, alt: guide.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: guide.title,
      description: guide.description,
      images: [`${SITE_URL}/og/default.jpg`],
    },
    alternates: { canonical: `/guides/${slug}` },
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
    description: guide.description,
    datePublished: guide.publishedAt,
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

  return (
    <article className="space-y-10">
      <JsonLd data={[articleLd, breadcrumbLd]} />
      <header className="max-w-3xl">
        <p className="text-xs text-slate-500">
          <Link href="/guides" className="hover:text-slate-800">
            Guides
          </Link>{" "}
          · {guide.readingTime} · {guide.publishedAt}
        </p>
        <h1 className="mt-2 font-serif text-4xl text-slate-900">
          {guide.title}
        </h1>
        <p className="mt-4 text-lg text-slate-600">{guide.description}</p>
        <AffiliateNote className="mt-3" />
      </header>

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

      {mentioned.length > 0 && (
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
