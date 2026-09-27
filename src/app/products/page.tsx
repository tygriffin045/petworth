import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { AffiliateNote } from "@/components/AffiliateNote";

export const metadata: Metadata = pageMetadata({
  path: "/products",
  title: "All products",
  description:
    "Browse PetWorth pet gear picks with best-for labels and clear Amazon Associate links.",
});

export default function ProductsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-serif text-4xl text-stone-900">All products</h1>
        <p className="mt-2 text-lg text-stone-600">
          {products.length} editorial picks — each with a use-case label, honest
          cons, and a direct Amazon link. No invented scores.
        </p>
        <AffiliateNote />
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </div>
  );
}
