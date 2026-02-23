import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for engaging with MWX Technologies. Read our terms and conditions for our digital marketing and development services.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
