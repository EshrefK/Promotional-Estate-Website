import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Al-Khatib Emlak - En İyi Emlak Çözümleri",
  description: "Modern ve güvenilir emlak hizmetleri ile hayalinizdeki yaşam alanına ulaşın",
  keywords: ["emlak", "gayrimenkul", "ev", "daire", "kira", "satılık"],
  authors: [{ name: "AlKhateep Emlak" }],
  openGraph: {
    title: "Al-Khatib Emlak - En İyi Emlak Çözümleri",
    description: "Modern ve güvenilir emlak hizmetleri",
    type: "website",
  },
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
        {modal}
      </body>
    </html>
  );
}
