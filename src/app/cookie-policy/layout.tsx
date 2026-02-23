import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Cookie Policy for MWX Technologies website. Learn how we use cookies and similar technologies to improve your experience.",
  robots: "noindex, follow", // Typically we don't index pure policy pages heavily, but follow is fine. Let's just let it index.
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
