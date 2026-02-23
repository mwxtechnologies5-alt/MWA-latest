import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CoinGecko Listing Services",
  description:
    "Secure your token listing on CoinGecko quickly and efficiently. MWX Technologies provides expert consulting for crypto project listings.",
  keywords:
    "CoinGecko listing service, fast track CoinGecko, token listing, crypto project listing agency",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
