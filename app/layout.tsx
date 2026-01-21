import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://neeshenterprise.com/";
const googleSiteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
const metadataBase =
  (() => {
    try {
      return new URL(siteUrl);
    } catch {
      return new URL("https://neeshenterprise.com/");
    }
  })();
const canonicalUrl = metadataBase.toString().replace(/\/$/, "") + "/";
const siteOrigin = canonicalUrl.replace(/\/$/, "");
const title =
  "Neesh Enterprise Strategies | Contract Software Engineering in Ireland";
const description =
  "Contract-led full-stack engineering for Ireland and the EU: React/Angular, Spring Boot, Node.js, AWS, and delivery you can rely on.";

export const metadata: Metadata = {
  metadataBase,
  title,
  description,
  applicationName: "Neesh Enterprise Strategies",
  authors: [{ name: "Neesh Enterprise Strategies Limited" }],
  creator: "Neesh Enterprise Strategies Limited",
  keywords: [
    "contract software engineer Ireland",
    "full stack engineer Ireland",
    "React contractor Ireland",
    "Angular contractor Ireland",
    "Spring Boot contractor",
    "Node.js contractor",
    "AWS consultant Ireland",
    "enterprise software delivery",
  ],
  category: "technology",
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title,
    description,
    url: canonicalUrl,
    siteName: "Neesh Enterprise Strategies",
    locale: "en_IE",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Neesh Enterprise Strategies — contract-led full-stack engineering in Ireland",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/logo.ico",
  },
  ...(googleSiteVerification
    ? { verification: { google: googleSiteVerification } }
    : {}),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const contactUrl = `${siteOrigin}#contact`;
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Neesh Enterprise Strategies Limited",
    url: canonicalUrl,
    description,
    logo: new URL("/logo.ico", canonicalUrl).toString(),
    areaServed: ["IE", "EU"],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: process.env.NEXT_PUBLIC_CONTACT_TO_EMAIL,
        areaServed: ["IE", "EU"],
      },
    ],
    serviceType: [
      "Full-stack engineering",
      "React development",
      "Angular development",
      "Spring Boot services",
      "Node.js services",
      "AWS consulting",
    ],
    offers: {
      "@type": "Offer",
      category: "Contract software engineering",
      availability: "https://schema.org/InStock",
      areaServed: ["IE", "EU"],
      url: contactUrl,
    },
    potentialAction: {
      "@type": "ContactAction",
      target: contactUrl,
      description: "Check availability or book an introductory call.",
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
