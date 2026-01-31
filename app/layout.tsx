import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Portfolio | Full-Stack Developer",
  description: "Portfolio website showcasing innovative projects in UI/UX Design, Full-Stack Development, and Data Analytics",
  keywords: ["Full-Stack Developer", "UI/UX Designer", "Data Analytics", "React", "Next.js", "Portfolio"],
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  icons: {
    icon: ["/favicon.ico", "/favicon.png"],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Portfolio | Full-Stack Developer",
    description: "Portfolio website showcasing innovative projects in UI/UX Design, Full-Stack Development, and Data Analytics",
    images: [
      {
        url: "/favicon.png",
        width: 1200,
        height: 630,
        alt: "Portfolio - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Full-Stack Developer",
    description: "Portfolio website showcasing innovative projects in UI/UX Design, Full-Stack Development, and Data Analytics",
    images: ["/favicon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="antialiased"
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
