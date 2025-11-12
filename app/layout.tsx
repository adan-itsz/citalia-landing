import type { Metadata } from "next";
import { Inter } from "next/font/google";
import CursorText from "./components/CursorText";
import Footer from "./components/Footer";
import StructuredData from "./components/StructuredData";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://citalia.ai';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "CitaLía - Tu asistente médico inteligente",
    template: "%s | CitaLía"
  },
  description: "CitaLía agenda, confirma y organiza tus citas por WhatsApp. Sin llamadas, sin apps nuevas. Automatiza la gestión de citas médicas con inteligencia artificial.",
  keywords: [
    "asistente médico",
    "agenda médica",
    "WhatsApp médico",
    "automatización citas médicas",
    "gestión consultorio",
    "agenda automática",
    "recordatorios médicos",
    "sistema de citas",
    "consultorio médico",
    "telemedicina",
    "IA médica",
    "asistente virtual médico"
  ],
  authors: [{ name: "Andromind" }],
  creator: "Andromind",
  publisher: "Andromind LLC",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: siteUrl,
    siteName: "CitaLía",
    title: "CitaLía - Tu asistente médico inteligente",
    description: "CitaLía agenda, confirma y organiza tus citas por WhatsApp. Sin llamadas, sin apps nuevas.",
    images: [
      {
        url: `${siteUrl}/images/citalia.png`,
        width: 993,
        height: 323,
        alt: "CitaLía - Asistente médico inteligente",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CitaLía - Tu asistente médico inteligente",
    description: "CitaLía agenda, confirma y organiza tus citas por WhatsApp. Sin llamadas, sin apps nuevas.",
    images: [`${siteUrl}/images/citalia.png`],
    creator: "@citalia",
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "healthcare technology",
  classification: "Medical Software",
  icons: {
    icon: [
      { url: '/images/icono.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/icono.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/images/icono.png',
    shortcut: '/images/icono.png',
  },
  manifest: '/manifest.json',
  other: {
    "contact:phone_number": "+52 33 2254 1366",
    "theme-color": "#14B8A6",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} antialiased`}
      >
        <StructuredData />
        <CursorText />
        {children}
        <Footer />
      </body>
    </html>
  );
}
