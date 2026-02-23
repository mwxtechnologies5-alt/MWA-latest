import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Event Management & Marketing",
  description:
    "Expert event planning, execution, and marketing services to ensure your corporate, Web3, or crypto event is a massive success.",
  keywords:
    "event management agency, Web3 event planning, crypto conferences marketing, corporate event promotion",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
