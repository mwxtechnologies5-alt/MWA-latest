import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the MWX Technologies team. We are always looking for passionate innovators in development, marketing, Web3, and design.",
  keywords:
    "careers at MWX Technologies, tech jobs, web development careers, digital marketing jobs",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
