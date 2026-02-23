import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Portfolio",
  description:
    "Explore the successful projects and campaigns delivered by MWX Technologies for global enterprises, startups, and Web3 innovators.",
  keywords:
    "digital agency portfolio, web development case studies, marketing success stories",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
