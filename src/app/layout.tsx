import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BioChicken - Poulet Bio de Qualité",
  description: "Découvrez notre sélection de poulet bio, élevé dans le respect de l'environnement et du bien-être animal. Livraison rapide à Paris et en Île-de-France.",
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml', sizes: 'any' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/favicon.svg', type: 'image/svg+xml', sizes: 'any' }
    ],
  },
  manifest: '/site.webmanifest',
  other: {
    'theme-color': '#10B981',
    'msapplication-TileColor': '#10B981',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.className} antialiased min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
