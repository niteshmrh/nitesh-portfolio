import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { GoogleAnalytics } from "@/components/google-analytics";

export const metadata: Metadata = {
  title: "Nitesh Kumar — Full Stack Developer",
  description:
    "Portfolio of Nitesh Kumar, Full Stack Developer building scalable web applications and AI-powered products.",
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
