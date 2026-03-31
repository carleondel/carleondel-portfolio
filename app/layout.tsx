import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Carlos León — Data Engineer, analytics-focused",
    template: "%s — Carlos León",
  },
  description:
    "Data Engineer, analytics-focused. I build business-facing data products and modern data workflows with dbt, Google Cloud, Python, and SQL.",
  metadataBase: new URL("https://carlosleon.dev"),
  openGraph: {
    title: "Carlos León — Data Engineer, analytics-focused",
    description:
      "Data Engineer, analytics-focused. I build business-facing data products and modern data workflows with dbt, Google Cloud, Python, and SQL.",
    url: "https://carlosleon.dev",
    siteName: "Carlos León",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Carlos León — Data Engineer, analytics-focused",
    description:
      "Data Engineer, analytics-focused. I build business-facing data products and modern data workflows with dbt, Google Cloud, Python, and SQL.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
