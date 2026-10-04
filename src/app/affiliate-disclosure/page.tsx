import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/affiliate-disclosure",
  title: "Affiliate disclosure",
  description:
    "PetWorth Amazon Associates disclosure — how affiliate links and the petworth20-20 tag work.",
});

export default function AffiliateDisclosurePage() {
  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <h1 className="font-serif text-4xl text-stone-900">
        Affiliate disclosure
      </h1>
      <p className="text-lg text-stone-600">
        PetWorth is a participant in the Amazon Services LLC Associates
        Program, an affiliate advertising program designed to provide a means
        for sites to earn advertising fees by advertising and linking to
        Amazon.com.
      </p>
      <p className="text-stone-600">
        As an Amazon Associate, we earn from qualifying purchases. Product
        links on this site typically include our Associates tag{" "}
        <strong>petworth20-20</strong> in the format{" "}
        <code className="rounded bg-stone-100 px-1.5 py-0.5 text-sm break-all">
          https://www.amazon.com/dp/&#123;ASIN&#125;?tag=petworth20-20
        </code>
        . When a verified ASIN is unavailable, we link to Amazon search results
        with the same tag.
      </p>
      <p className="text-stone-600">
        We do not show prices because they change frequently on Amazon. Always check the live
        Amazon listing for current pricing, availability, and shipping.
      </p>
      <p className="text-stone-600">
        Amazon, Amazon.com, and the Amazon logo are trademarks of Amazon.com,
        Inc. or its affiliates. PetWorth is not endorsed by Amazon.
      </p>
    </div>
  );
}
