import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { GoogleAnalytics } from "@/components/google-analytics";

export const metadata: Metadata = {
  metadataBase: new URL("https://niteshmrh.vercel.app"),

  title: "Nitesh Kumar — Full Stack Developer",
  description:
    "Portfolio of Nitesh Kumar, Full Stack Developer building scalable web applications and AI-powered products.",

  openGraph: {
    title: "Nitesh Kumar — Full Stack Developer",
    description:
      "Full Stack Developer building scalable web applications and AI-powered products.",
    url: "https://niteshmrh.vercel.app",
    siteName: "Nitesh Kumar Portfolio",
    images: [
      {
        url: "/images/myPic/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nitesh Kumar — Full Stack Developer",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  icons: {
    icon: "/images/myPic/nitesh_portfolio_bg.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
        <GoogleAnalytics />
      </body>
    </html>
  );
}
