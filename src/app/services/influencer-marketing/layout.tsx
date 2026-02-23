import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Influencer Marketing",
  description:
    "Amplify your brand's reach with our extensive network of global influencers and KOLs in Web3, tech, and lifestyle.",
  keywords:
    "influencer marketing agency, KOL network, Web3 influencers, brand ambassadors",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
