import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Adore via Décor by Suhani | Handcrafted Decor & Personalised Gifts",
    template: "%s | Adore via Décor",
  },
  description:
    "Handcrafted resin art, personalised name plates, wedding gifts, festive décor, and DIY kits by Suhani. Premium artisanal gifting from Mumbai. Order on WhatsApp.",
  keywords: [
    "personalised gifts India",
    "handmade gifts Mumbai",
    "resin art Mumbai",
    "custom name plates India",
    "personalised home decor",
    "wedding gifting India",
    "resin art gifting",
    "DIY craft kits India",
    "corporate gifting Mumbai",
    "festive gifts India",
    "handcrafted decor Mumbai",
    "Adore via Decor",
  ],
  authors: [{ name: "Suhani", url: "https://instagram.com/adore.viadecor" }],
  creator: "Adore via Décor by Suhani",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://adoreviadecor.com",
    siteName: "Adore via Décor by Suhani",
    title: "Adore via Décor by Suhani | Handcrafted Decor & Personalised Gifts",
    description:
      "Premium handcrafted resin art, name plates, wedding gifts, festive décor, and DIY kits. Fully customisable, made with love in Mumbai.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Adore via Décor by Suhani",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adore via Décor by Suhani",
    description: "Premium handcrafted resin art & personalised gifts from Mumbai.",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://adoreviadecor.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Adore via Décor by Suhani",
              description: "Handcrafted decor, gifting, personalization and DIY brand based in Mumbai.",
              telephone: "+91-7977726749",
              url: "https://adoreviadecor.com",
              sameAs: ["https://instagram.com/adore.viadecor"],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Mumbai",
                addressCountry: "IN",
              },
              priceRange: "₹₹",
              image: "/og-image.jpg",
            }),
          }}
        />
      </head>
      <body className="bg-ivory text-charcoal antialiased">{children}</body>
    </html>
  );
}
