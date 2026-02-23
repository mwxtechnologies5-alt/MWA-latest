import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Video Production & Editing",
  description:
    "Captivate your audience with high-quality video production, animation, and editing services for your digital campaigns.",
  keywords:
    "video production agency, promo videos, commercial editing, animation studio",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
