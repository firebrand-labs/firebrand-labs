import { ThemeProvider } from "@/app/_components/theme-provider";
import { cn } from "@/lib/utils";
import { TRPCReactProvider } from "@/trpc/react";
import type { Metadata } from "next";
import { Shadows_Into_Light, Pixelify_Sans } from "next/font/google";
import localFont from "next/font/local";
import ScrollSnapHandler from "@/app/_components/scroll-snap-handler";
import "./globals.css";
import { Toaster } from "@/app/_components/ui/toaster";
import GoogleAnalytics from "@/app/_components/google-analytics";

const paragraph = localFont({
  src: [
    {
      path: "../../public/fonts/fonnts.com-Paralucent_Medium.otf",
      weight: "500",
    },
    {
      path: "../../public/fonts/fonnts.com-Paralucent_Light.otf",
      weight: "300",
    },
    {
      path: "../../public/fonts/fonnts.com-Paralucent_Demi_Bold.otf",
      weight: "800",
    },
  ],
  variable: "--heading",
  display: "swap",
  // weight: "800",
});

const heading = localFont({
  src: [
    {
      path: "../../public/fonts/fonnts.com-Paralucent_Medium.otf",
      weight: "500",
    },
    {
      path: "../../public/fonts/fonnts.com-Paralucent_Light.otf",
      weight: "300",
    },
    {
      path: "../../public/fonts/fonnts.com-Paralucent_Demi_Bold.otf",
      weight: "800",
    },
  ],
  variable: "--paragraph",
  display: "swap",
  // weight: "800",
});

const highlighter = Shadows_Into_Light({
  weight: ["400"],
  variable: "--highlighter",
  style: "normal",
  subsets: ["latin"],
});

const pixelify = Pixelify_Sans({
  style: "normal",
  variable: "--pixelify",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "firebrand labs",
  description: "solving business challenges using design and creativity",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon.png",
    },
  ],
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
          `${heading.variable} ${paragraph.variable} ${highlighter.variable} ${pixelify.variable} font-paragraph antialiased`,
          "antialiased grainy font-sans min-h-screen w-screen relative overflow-x-hidden"
        )}
      >
        <TRPCReactProvider>
          <ThemeProvider defaultTheme="dark" attribute="class">
            <ScrollSnapHandler />
            <GoogleAnalytics />
            {children}
            <Toaster />
          </ThemeProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
