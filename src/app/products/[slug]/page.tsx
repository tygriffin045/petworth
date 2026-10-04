import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getProduct,
  getRelatedProducts,
  products,
} from "@/data/products";
import { getCategory } from "@/data/categories";
import { AffiliateButton } from "@/components/AffiliateButton";
import { AffiliateNote } from "@/components/AffiliateNote";
import { ProductCard } from "@/components/ProductCard";
import { JsonLd } from "@/components/JsonLd";
import { SITE_URL, SITE_NAME } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Product" };
  const imageAbs = product.imageUrl
    ? product.imageUrl.startsWith("http")
      ? product.imageUrl
      : `${SITE_URL}${product.imageUrl}`
    : `${SITE_URL}/og/default.jpg`;
  return {
    title: product.name,
    description: `${product.bestFor}. ${product.tagline}`,
    openGraph: {
      title: product.name,
      description: `${product.bestFor}. ${product.tagline}`,
      url: `/products/${slug}`,
      images: [{ url: imageAbs, alt: product.imageAlt || product.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: product.name,
      description: `${product.bestFor}. ${product.tagline}`,
      images: [imageAbs],
    },
    alternates: { canonical: `/products/${slug}` },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const category = getCategory(product.category);
  const related = getRelatedProducts(product);
  const productUrl = `${SITE_URL}/products/${product.slug}`;
  const imageAbs = product.imageUrl
    ? product.imageUrl.startsWith("http")
      ? product.imageUrl
      : `${SITE_URL}${product.imageUrl}`
    : undefined;
  const productLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.summary,
    brand: { "@type": "Brand", name: product.brand },
    ...(imageAbs ? { image: [imageAbs] } : {}),
    // Only emit an Offer when we verified a price on Amazon.
    ...(product.priceMin > 0
      ? {
          offers: {
            "@type": "Offer",
            url: productUrl,
            priceCurrency: "USD",
            price: String(product.priceMin || product.priceMax || 0),
            availability: "https://schema.org/InStock",
          },
        }
      : {}),
  };
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Products",
        item: `${SITE_URL}/products`,
      },
      ...(category
        ? [
            {
              "@type": "ListItem" as const,
              position: 2,
              name: category.name,
              item: `${SITE_URL}/category/${category.slug}`,
            },
            {
              "@type": "ListItem" as const,
              position: 3,
              name: product.name,
              item: productUrl,
            },
          ]
        : [
            {
              "@type": "ListItem" as const,
              position: 2,
              name: product.name,
              item: productUrl,
            },
          ]),
    ],
  };

  return (
    <div className="space-y-12">
      <JsonLd data={[productLd, breadcrumbLd]} />
      <nav className="text-sm text-slate-500">
        <Link href="/products" className="hover:text-slate-800">
          Products
        </Link>
        <span className="mx-2">/</span>
        {category && (
          <>
            <Link
              href={`/category/${category.slug}`}
              className="hover:text-slate-800"
            >
              {category.name}
            </Link>
            <span className="mx-2">/</span>
          </>
        )}
        <span className="text-slate-700">{product.name}</span>
      </nav>
      <div className="grid gap-8 lg:grid-cols-2">
        <div
          className={`relative aspect-square overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br ${product.imageGradient}`}
        >
          {product.imageUrl ? (
            <Image
              src={product.imageUrl}
              alt={product.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain p-8"
              priority
            />
          ) : (
            <div className="flex h-full items-center justify-center p-8 text-center text-slate-500">
              <p className="text-sm">
                <span className="font-medium text-slate-700">
                  {product.name}
                </span>
                <br />
                Check the live Amazon listing for current photos and pricing.
              </p>
            </div>
          )}
        </div>

        <div>
          {category && (
            <Link
              href={`/category/${category.slug}`}
              className="text-xs font-semibold uppercase tracking-wider text-emerald-700 hover:underline"
            >
              {category.name}
            </Link>
          )}
          <p className="mt-3 inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-900">
            {product.bestFor}
          </p>
          <h1 className="mt-3 font-serif text-3xl text-slate-900 sm:text-4xl">
            {product.name}
          </h1>
          <p className="mt-1 text-sm text-slate-500">{product.brand}</p>
          <AffiliateNote />
          <p className="mt-4 text-lg text-slate-600">{product.tagline}</p>
          <p className="mt-4 text-xl font-semibold text-emerald-950">
            {product.priceBand}
          </p>
          <AffiliateButton
            className="mt-6"
            productSlug={product.slug}
            productName={product.name}
            amazonAsin={product.amazonAsin}
            amazonQuery={product.amazonQuery}
          />
          {product.asinPlaceholder && (
            <p className="mt-3 text-xs text-amber-800">
              ASIN may be size-variant or best-effort — confirm the live listing.
            </p>
          )}
        </div>
      </div>

      <section className="grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="font-serif text-2xl text-slate-900">Our take</h2>
          <p className="mt-3 leading-relaxed text-slate-600">
            {product.summary}
          </p>
          <p className="mt-4 text-sm text-slate-600">
            <span className="font-semibold text-slate-800">Who it&apos;s for: </span>
            {product.whoItsFor}
          </p>
          <p className="mt-2 text-sm text-slate-600">
            <span className="font-semibold text-slate-800">Skip if: </span>
            {product.skipIf}
          </p>
        </div>
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              Pros
            </h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-600">
              {product.pros.map((pro) => (
                <li key={pro}>{pro}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              Cons
            </h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-600">
              {product.cons.map((con) => (
                <li key={con}>{con}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="font-serif text-2xl text-slate-900">Specs</h2>
        <dl className="mt-4 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
          {product.specs.map((spec) => (
            <div
              key={spec.label}
              className="flex flex-col gap-1 px-4 py-3 sm:flex-row sm:justify-between"
            >
              <dt className="text-sm text-slate-500">{spec.label}</dt>
              <dd className="text-sm font-medium text-slate-800">
                {spec.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {related.length > 0 && (
        <section>
          <h2 className="font-serif text-2xl text-slate-900">
            Compare nearby picks
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            Alternatives with different tradeoffs — not clones of the same pitch.
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
