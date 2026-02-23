import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crypto Exchange Listings",
  description:
    "Get your cryptocurrency listed on top-tier global exchanges quickly and reliably with MWX Technologies exchange listing services.",
  keywords:
    "crypto exchange listing, tier 1 exchange listing, token listing services, CEX listing firm",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
