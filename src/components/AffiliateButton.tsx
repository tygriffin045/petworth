"use client";

import { track } from "@vercel/analytics";
import { getAffiliateUrl } from "@/lib/affiliate";

export function AffiliateButton({
  productSlug,
  productName,
  amazonAsin,
  amazonQuery,
  className = "",
}: {
  productSlug: string;
  productName: string;
  amazonAsin?: string;
  amazonQuery?: string;
  className?: string;
}) {
  const href = getAffiliateUrl({
    slug: productSlug,
    amazonAsin,
    amazonQuery,
  });

  return (
    <div className={className}>
      <a
        href={href}
        target="_blank"
        rel="nofollow sponsored noopener noreferrer"
        className="inline-flex w-full items-center justify-center rounded-full bg-emerald-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-800 sm:w-auto"
        onClick={() =>
          track("amazon_outbound_click", {
            product_slug: productSlug,
            asin: amazonAsin ?? "",
            product_name: productName,
          })
        }
      >
        {"Check price on Amazon"}
      </a>
      <p className="mt-2 text-xs text-slate-500">
        Amazon Associate link · We may earn a commission at no extra cost to you
      </p>
      <span className="sr-only">{productName}</span>
    </div>
  );
}
