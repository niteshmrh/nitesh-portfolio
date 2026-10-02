import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { GoogleAnalytics } from "@/components/google-analytics";

export const metadata: Metadata = {
  metadataBase: new URL("https://niteshmrh.vercel.app"),

  title: {
    default: "Nitesh Kumar | Full Stack Developer",
    template: "%s | Nitesh Kumar Portfolio",
  },

  // description: "Portfolio of Nitesh Kumar, Full Stack Developer building scalable web applications and AI-powered products.",
  description:
    "Nitesh Kumar is a Full Stack Developer specializing in React, Next.js, Node.js, Express.js, MongoDB, REST APIs, and building scalable web applications and AI-powered products.. Available for freelance projects and collaborations.",

  applicationName: "Nitesh Kumar Portfolio",
  authors: [{ name: "Nitesh Kumar" }],
  creator: "Nitesh Kumar",
  publisher: "Nitesh Kumar",

  keywords: [
    "Nitesh Kumar",
    "Full Stack Developer",
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Express.js Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "Software Engineer",
    "Web Application Development",
    "AI-powered Products",
    "Scalable Web Applications",
    "Freelance Developer",
    "Open Source Contributor",
    "Portfolio Website",
    "Nitesh Kumar Portfolio",
    "Nitesh Kumar Resume",
    "Nitesh Kumar Projects",
    "Nitesh Kumar Skills",
    "Nitesh Kumar Experience",
    "Nitesh Kumar Certifications",
    "Nitesh Kumar Contact",
    "MERN Stack Development",
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "REST APIs",
    "Full Stack Development",
    "Web Development",
    "Software Development",
    "Open Source Projects",
    "Freelance Web Developer",
    "Remote Developer",
    "Web Application Design",
    "Web Application Architecture",
    "Web Application Performance Optimization",
    "Web Application Security",
    "Web Application Testing",
    "Web Application Deployment",
    "Web Application Maintenance",
    "Web Application Scalability",
    "Web Application Reliability",
    "Web Application Usability",
    "Web Application Accessibility",
    "Web Application SEO Optimization",
    "Freelance Web Developer",
    "REST API Development",
    "MongoDB",
    "Gurugram Developer",
    "Coder Ka Caravan",
  ],

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  openGraph: {
    title: "Nitesh Kumar — Full Stack Developer",
    // description: "Full Stack Developer building scalable web applications and AI-powered products.",
    description:
      "Full Stack Developer, Building modern web applications and AI-powered products, scalable APIs, and performant digital experiences using React, Next.js, and Node.js.",

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

  twitter: {
    card: "summary_large_image",
    title: "Nitesh Kumar | Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, Node.js, and scalable web applications.",
    images: ["/images/myPic/og-image.png"],
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
