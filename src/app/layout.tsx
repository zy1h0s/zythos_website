import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zytheq - Raw Potential. Refined Power.",
  description:
    "We build teams that build products. Zytheq is the fusion of elite consulting & staffing with custom software development.",
  icons: { icon: '/logo.png' },
  keywords: [
    "staffing",
    "consulting",
    "software development",
    "staff augmentation",
    "custom software",
    "AI development",
    "cloud architecture",
    "team scaling",
  ],
  openGraph: {
    title: "Zytheq - Raw Potential. Refined Power.",
    description:
      "We build teams that build products. The fusion of elite talent and technical mastery.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="bg-bg-primary text-text-primary font-body antialiased">
        {children}
      </body>
    </html>
  );
}
