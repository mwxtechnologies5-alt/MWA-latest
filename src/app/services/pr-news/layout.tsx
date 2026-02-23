import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PR & News Publishing",
  description:
    "Dominate the headlines with our global PR and news publishing services. Secure placements in top-tier media outlets for massive visibility.",
  keywords:
    "PR agency, press release distribution, media relations, crisis management, news publishing",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
