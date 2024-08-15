import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import SearchProvider from "@/context/SearchContext";
import PlayerProvider from "@/context/PlayerContext";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Zzz music",
  description: "Listen to your favourite music for free!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="manifest" href="/manifest.json" />
      <link rel="apple-touch-icon" href="/images/icons/icon-192x192.png" />
      <meta name="theme-color" content="#042940" />
      <body className={ubuntu.className + " text-white"}>
        <PlayerProvider>
          <SearchProvider>{children}</SearchProvider>
        </PlayerProvider>
      </body>
    </html>
  );
}
