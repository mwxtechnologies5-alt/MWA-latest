import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore the full suite of digital services offered by MWX Technologies, from web development and mobile apps to PR, digital marketing, and Web3 solutions.",
  keywords:
    "digital agency services, web development services, blockchain services, PR agency",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
