import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import Script from "next/script";

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

  metadataBase: new URL("https://orio-tech-website-wtgc.vercel.app"),

  openGraph: {
    title: "Orion Tech",
    description:
      "Transformamos ideias em soluções digitais modernas.",

    url: "https://orio-tech-website-wtgc.vercel.app",

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
  verification: {
  google: "kiRI7AVEXJ8uTNHm46r6qauWm0cqKz9XRSFdNxFU9PY",
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
  url: "https://orio-tech-website-wtgc.vercel.app",
  logo: "https://orio-tech-website-wtgc.vercel.app/orion-logo.png",
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
        <Script
  src="https://www.googletagmanager.com/gtag/js?id=G-SL9JY87GVF"
  strategy="afterInteractive"
/>

<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-SL9JY87GVF');
  `}
</Script>
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