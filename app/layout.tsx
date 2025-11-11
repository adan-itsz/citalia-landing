import type { Metadata } from "next";
import { Inter } from "next/font/google";
import CursorText from "./components/CursorText";
import Footer from "./components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CitaLía - Tu asistente médico inteligente",
  description: "CitaLía agenda, confirma y organiza tus citas por WhatsApp. Sin llamadas, sin apps nuevas.",
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
        <CursorText />
        {children}
        <Footer />
      </body>
    </html>
  );
}
