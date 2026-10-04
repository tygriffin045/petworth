import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/types";
import { getCategory } from "@/data/categories";
import { AffiliateButton } from "@/components/AffiliateButton";

export function ProductCard({
  product,
  priority = false,
  showAffiliateCta = true,
}: {
  product: Product;
  priority?: boolean;
  showAffiliateCta?: boolean;
}) {
  const category = getCategory(product.category);

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <Link href={`/products/${product.slug}`} className="block">
        <div
          className={`relative aspect-[4/3] overflow-hidden bg-slate-100 bg-gradient-to-br ${product.imageGradient}`}
        >
          {product.imageUrl ? (
            <Image
              src={product.imageUrl}
              alt={product.imageAlt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-contain p-4 transition duration-300 group-hover:scale-[1.02]"
              priority={priority}
            />
          ) : (
            <div
              className="absolute inset-0 opacity-40 mix-blend-overlay bg-[radial-gradient(circle_at_30%_20%,white,transparent_45%)]"
              role="img"
              aria-label={product.imageAlt}
            />
          )}
          <span className="absolute left-3 top-3 rounded-full bg-emerald-700 px-2.5 py-0.5 text-[11px] font-semibold text-white shadow-sm">
            {product.bestFor}
          </span>
          <span className="absolute bottom-3 left-3 rounded-full bg-slate-900/50 px-2.5 py-0.5 text-[11px] font-medium text-white backdrop-blur">
            {category?.shortLabel}
          </span>
        </div>
      </Link>
      <div className="flex flex-1 flex-col p-4">
        <p className="text-xs uppercase tracking-wide text-slate-500">
          {product.brand}
        </p>
        <Link href={`/products/${product.slug}`}>
          <h3 className="mt-1 font-serif text-lg text-slate-900 group-hover:underline group-hover:decoration-emerald-300 group-hover:underline-offset-4">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1 line-clamp-2 text-sm text-slate-600">
          {product.tagline}
        </p>
        {showAffiliateCta && (
          <AffiliateButton
            className="mt-3 [&_a]:w-full [&_a]:py-2 [&_a]:text-xs"
            productSlug={product.slug}
            productName={product.name}
            amazonAsin={product.amazonAsin}
            amazonQuery={product.amazonQuery}
          />
        )}
      </div>
    </article>
  );
}
