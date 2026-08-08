import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");

  return {
    metadataBase: new URL(`${protocol}://${host}`),
    title: {
      default: "Yen-Chen Feng — HCI & Creative Technology",
      template: "%s — Yen-Chen Feng",
    },
    description: "馮妍禎的人機互動作品集：實體互動、軟硬整合、Web 與 Creative Technology。",
    openGraph: {
      title: "Yen-Chen Feng — HCI & Creative Technology",
      description: "把數位邏輯，做成可以摸得到的互動。",
      images: [{ url: "/og.png", width: 1200, height: 630, alt: "Yen-Chen Feng HCI portfolio" }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Yen-Chen Feng — HCI & Creative Technology",
      description: "把數位邏輯，做成可以摸得到的互動。",
      images: ["/og.png"],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
