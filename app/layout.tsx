import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Orion Tech | Websites, IA e Soluções Digitais",
    template: "%s | Orion Tech",
  },

  description:
    "A Orion Tech desenvolve websites modernos, aplicações web, landing pages e soluções com Inteligência Artificial para empresas e empreendedores.",

  keywords: [
    "Orion Tech",
    "Web Design",
    "Desenvolvimento Web",
    "Inteligência Artificial",
    "Landing Pages",
    "Chatbots",
    "Websites",
    "Mozambique",
    "Moçambique",
    "Digital Solutions",
  ],

  authors: [
    {
      name: "Orion Tech",
    },
  ],

  creator: "Orion Tech",

  publisher: "Orion Tech",

  metadataBase: new URL("https://oriontech.co.mz"),

  openGraph: {
    title: "Orion Tech",
    description:
      "Transformamos ideias em soluções digitais modernas.",

    url: "https://oriontech.co.mz",

    siteName: "Orion Tech",

    locale: "pt_PT",

    type: "website",

    images: [
      {
        url: "/orion-logo.png",
        width: 1200,
        height: 630,
        alt: "Orion Tech",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Orion Tech",
    description:
      "Websites modernos, aplicações e soluções com Inteligência Artificial.",

    images: ["/orion-logo.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Orion Tech",
  url: "https://oriontech.co.mz",
  logo: "https://oriontech.co.mz/orion-logo.png",
  description:
    "A Orion Tech desenvolve websites modernos, aplicações web, soluções de Inteligência Artificial e consultoria tecnológica.",

  email: "oriontech072@gmail.com",

  telephone: "+258847973689",

  address: {
    "@type": "PostalAddress",
    addressCountry: "MZ",
  },

  sameAs: [],
};
  return (
    <html lang="pt">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(organizationSchema),
  }}
/>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}