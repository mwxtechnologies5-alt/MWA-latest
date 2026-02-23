import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing & Packages",
  description:
    "Transparent, scalable pricing and packages tailored to your digital growth needs. Partner with MWX Technologies today.",
  keywords:
    "digital agency pricing, web development cost, marketing packages, startup agency rates",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
