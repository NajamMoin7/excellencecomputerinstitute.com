import type { Metadata, Viewport } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "aos/dist/aos.css";
import { AosProvider } from "./components/AosProvider";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import "./globals.css";
import { organizationJsonLd } from "./lib/seo";
import { site } from "./lib/site";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Computer, Web Development, MS Office and English Courses in Malir`,
    template: `%s | ${site.name}`,
  },
  description:
    "Excellence Computer Institute in Malir, Karachi offers practical computer, web development, MS Office, WordPress, Laravel, React JS and English language courses.",
  keywords: site.keywords,
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  alternates: {
    canonical: site.url,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: site.favicon,
    shortcut: site.favicon,
    apple: site.favicon,
  },
  openGraph: {
    title: `${site.name} | ${site.slogan}`,
    description:
      "Learn practical computer, web development, MS Office and English language skills for a better future in Malir, Karachi.",
    url: site.url,
    siteName: site.name,
    type: "website",
    locale: "en_PK",
    images: [
      {
        url: site.logo,
        width: 1200,
        height: 630,
        alt: `${site.name} logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.slogan}`,
    description:
      "Admission-focused practical computer training, English language, MS Office and web development courses in Malir, Karachi.",
    images: [site.logo],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#020617",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = organizationJsonLd();

  return (
    <html
      lang="en"
      className={`${manrope.variable} ${spaceGrotesk.variable} h-full overflow-x-hidden scroll-smooth antialiased`}
    >
      <body className="min-h-full overflow-x-hidden bg-white text-slate-950">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <AosProvider />
        <div className="flex min-h-screen w-full flex-col overflow-x-hidden">
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
          <FloatingWhatsApp />
        </div>
      </body>
    </html>
  );
}
