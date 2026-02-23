import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with MWX Technologies. Contact our team to start building amazing digital solutions and transformative marketing campaigns.",
  keywords:
    "contact MWX Technologies, web development inquiry, digital marketing consultation",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
