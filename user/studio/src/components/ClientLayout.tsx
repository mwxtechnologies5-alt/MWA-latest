"use client";

import { ReactNode } from "react";
import { Navbar } from "@/shared/layout/Navbar";
import { Footer } from "@/shared/layout/Footer";
import { ThemeProvider } from "@/lib/ThemeContext";

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="relative w-full">
        {children}
      </main>
      <Footer />
    </ThemeProvider>
  );
}
