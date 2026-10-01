import type { Metadata } from "next";
import "@fontsource-variable/inter";
import { content } from "@/lib/content";
import "./globals.css";

export const metadata: Metadata = {
  title: `${content.product_name} — ${content.hero_title}`,
  description: content.hero_subtitle,
  openGraph: {
    title: `${content.product_name} — ${content.hero_title}`,
    description: content.hero_subtitle,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: content.product_name,
    description: content.hero_subtitle,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
