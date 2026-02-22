import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/shared/ui/ErrorReporter";
import ClientLayout from "@/shared/layout/ClientLayout";
import { TrackingScripts } from "@/infrastructure/analytics/TrackingScripts";

export const metadata: Metadata = {
  title: "MWX Technologies | Digital Marketing & Technology Agency",
  description: "Transform your brand with MWX Technologies. We deliver cutting-edge web development, mobile apps, digital marketing, PR, and comprehensive growth solutions for startups, enterprises, and Web3 projects.",
  keywords: "digital marketing, web development, mobile apps, PR, social media marketing, influencer marketing, Web3, blockchain, exchange listing, CMC, CoinGecko",
  openGraph: {
    title: "MWX Technologies | Digital Marketing & Technology Agency",
    description: "Transform your brand with cutting-edge digital solutions",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className="
          antialiased
          bg-background
          text-foreground
          transition-colors
          duration-300
          overflow-x-hidden
          overflow-y-auto
          min-h-screen
        "
      >
        <TrackingScripts />
        <ErrorReporter />
        <ClientLayout>
          {children}
        </ClientLayout>
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
