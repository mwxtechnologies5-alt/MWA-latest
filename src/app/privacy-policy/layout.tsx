import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for MWX Technologies. We are committed to protecting your privacy and personal data.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
