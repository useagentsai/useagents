import type { Metadata } from "next";
import "@/styles/globals.css";
import { NuqsAdapter } from "nuqs/adapters/next";
import Header from "@/components/header";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { geistMono, geistSans } from "@/styles/fonts";

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "font-sans antialiased",
          geistSans.variable,
          geistMono.variable
        )}
      >
        <NuqsAdapter>
          <Header />

          {children}
        </NuqsAdapter>
      </body>
    </html>
  );
}
