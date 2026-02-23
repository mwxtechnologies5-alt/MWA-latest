import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Podcast Production & Marketing",
  description:
    "Launch, produce, and grow an industry-leading podcast with end-to-end podcast services from MWX Technologies.",
  keywords:
    "podcast production company, podcast marketing, corporate podcasting, audio branding",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
