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
