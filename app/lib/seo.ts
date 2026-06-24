import type { Metadata } from "next";
import { site } from "./site";

type SeoInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
};

export function createMetadata({
  title,
  description,
  path = "/",
  keywords = [],
}: SeoInput): Metadata {
  const url = new URL(path, site.url).toString();
  const fullTitle = title.includes(site.name) ? title : `${title} | ${site.name}`;
  const allKeywords = [...site.keywords, ...keywords];

  return {
    title: fullTitle,
    description,
    keywords: allKeywords,
    alternates: {
      canonical: url,
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
    openGraph: {
      title: fullTitle,
      description,
      url,
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
      title: fullTitle,
      description,
      images: [site.logo],
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: site.name,
    slogan: site.slogan,
    url: site.url,
    logo: `${site.url}${site.logo}`,
    image: `${site.url}${site.logo}`,
    telephone: site.phone,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "B-53 Aleemabad",
      addressLocality: "Malir",
      addressRegion: "Karachi",
      addressCountry: "PK",
    },
    areaServed: ["Malir", "Karachi"],
    sameAs: [],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Computer, Web Development, MS Office and English Language Courses",
    },
  };
}
