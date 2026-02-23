import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile App Development",
  description:
    "Award-winning iOS and Android mobile applications. Transform your ideas into engaging, high-performance mobile experiences.",
  keywords:
    "mobile app development company, iOS app developers, Android developers, cross-platform apps",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
