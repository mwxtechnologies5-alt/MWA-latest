import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Media Marketing",
  description:
    "Grow your engaged community and amplify your brand voice across Twitter, LinkedIn, Instagram, and more with MWX Technologies.",
  keywords:
    "social media agency, community management, social media growth, engagement strategy",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
