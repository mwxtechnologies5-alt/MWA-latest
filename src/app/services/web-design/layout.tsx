import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Design & Development",
  description:
    "Award-winning web design and robust full-stack development. Build high-performance websites and Web3 applications with MWX Technologies.",
  keywords:
    "web design agency, web development company, frontend development, custom website design",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
