import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Maintenance & Support",
  description:
    "Keep your digital platforms secure, updated, and performing flawlessly with MWX Technologies maintenance and support services.",
  keywords:
    "website maintenance, 24/7 web support, security updates, ongoing development support",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
