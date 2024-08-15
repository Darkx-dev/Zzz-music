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
      <body className={ubuntu.className + " text-white"}>
        <PlayerProvider>
          <SearchProvider>{children}</SearchProvider>
        </PlayerProvider>
      </body>
    </html>
  );
}
