import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/products/kong-catnip-toys", destination: "/category/toys-enrichment", permanent: true },
      { source: "/products/pioneer-pet-raindrop-fountain", destination: "/category/feeders-fountains", permanent: true },
      { source: "/products/litter-genie-plus", destination: "/category/litter", permanent: true },
      { source: "/products/catit-senses-scratcher", destination: "/category/cat-trees-scratchers", permanent: true },
      { source: "/products/amazon-basics-small-animal-cage", destination: "/category/small-pets", permanent: true },
      { source: "/products/kaytee-silent-spinner-wheel", destination: "/category/small-pets", permanent: true },
      { source: "/products/prevue-cuttlebone-6inch", destination: "/category/bird-supplies", permanent: true },
      { source: "/products/hartz-ultraguard-flea-tick-collar-for", destination: "/category/flea-tick-prevention", permanent: true },
      { source: "/products/hartz-ultraguard-pro-reflective-flea-tick", destination: "/category/flea-tick-prevention", permanent: true },
      { source: "/products/veken-innovation-award-winner-stainless-steel", destination: "/products/veken-innovation-award-winner-95oz-2", permanent: true },
      { source: "/products/powools-puppy-pads-for-dogs-2", destination: "/products/powools-puppy-pads-for-dogs", permanent: true },
      { source: "/products/cocoyo-training-pads", destination: "/products/cocoyo-best-value-22-x22-dog", permanent: true },
      { source: "/products/cocoyo-best-value-training-pads-30", destination: "/products/cocoyo-best-value-22-x22-dog", permanent: true },
      { source: "/products/amazon-basics-leak-proof-dog-and", destination: "/products/amazon-basics-puppy-training-pads", permanent: true },
      { source: "/products/amazon-basics-x-large-heavy-duty", destination: "/products/amazon-basics-puppy-training-pads", permanent: true },
      { source: "/categories/:slug", destination: "/category/:slug", permanent: true },
    ];
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "images-na.ssl-images-amazon.com",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "images-eu.ssl-images-amazon.com",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
