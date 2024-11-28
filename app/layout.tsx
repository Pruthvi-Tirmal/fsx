import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/landingUI/Navbar";
import { TooltipProvider } from "@/components/ui/tooltip";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "fsX - Seamless File Sharing.",
  description: "Effortless File Transfers, Anywhere, Anytime.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-hero-pattern `}>
        {/* <div className="absolute w-full h-full "></div> */}
        <div className="mx-w-[1440px]">
          <TooltipProvider>
            <Navbar />
            {children}
          </TooltipProvider>
        </div>
      </body>
    </html>
  );
}
