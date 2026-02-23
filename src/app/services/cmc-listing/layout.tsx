import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CoinMarketCap Listing Services",
  description:
    "Fast-track your cryptocurrency token listing on CoinMarketCap (CMC) with MWX Technologies expert guidance and connections.",
  keywords:
    "CoinMarketCap listing service, CMC fast track, token listing agency, cryptocurrency listing",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
