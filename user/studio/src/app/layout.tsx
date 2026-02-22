import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/shared/ui/ErrorReporter";
import Script from "next/script";
import ClientLayout from "@/shared/layout/ClientLayout";

export const metadata: Metadata = {
  title: "Scaleo Media | Digital Marketing & Technology Agency",
  description: "Transform your brand with Scaleo Media. We deliver cutting-edge web development, mobile apps, digital marketing, PR, and comprehensive growth solutions for startups, enterprises, and Web3 projects.",
  keywords: "digital marketing, web development, mobile apps, PR, social media marketing, influencer marketing, Web3, blockchain, exchange listing, CMC, CoinGecko",
  openGraph: {
    title: "Scaleo Media | Digital Marketing & Technology Agency",
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
    <html lang="en" suppressHydrationWarning>
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
        <Script
          id="orchids-browser-logs"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
          strategy="afterInteractive"
          data-orchids-project-id="f9b50018-2d86-40b4-9045-31dc791fe057"
        />
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        <ClientLayout>
          {children}
        </ClientLayout>
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
