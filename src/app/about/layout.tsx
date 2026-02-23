import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about MWX Technologies, our mission, vision, and how we deliver cutting-edge digital solutions across the globe.",
  keywords:
    "about MWX Technologies, digital agency team, tech innovators, web3 developers, PR agency",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
