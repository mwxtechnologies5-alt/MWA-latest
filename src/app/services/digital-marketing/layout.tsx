import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing Services",
  description:
    "Drive growth with data-driven digital marketing. SEO, SEM, content marketing, and comprehensive strategy from MWX Technologies.",
  keywords:
    "digital marketing agency, search engine optimization, PPC management, growth marketing",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
