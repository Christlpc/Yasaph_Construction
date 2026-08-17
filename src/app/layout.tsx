import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://yasaph-construction.cd');

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Yasaph Construction | Entreprise BTP à Kinshasa',
    template: '%s | Yasaph Construction',
  },
  description:
    'Société BTP de référence à Kinshasa : Gros œuvres béton armé, conception de plans 3D, permis de bâtir et rénovations haut standing en RDC.',
  keywords: [
    'Entreprise de construction Kinshasa',
    'Société BTP RDC',
    'Gros œuvres béton armé Kinshasa',
    'Architecte Kinshasa',
    'Plan de maison 3D RDC',
    'Permis de bâtir Kinshasa',
    'Rénovation bâtiment Gombe Kinshasa',
    'Ingénieur civil Kinshasa',
    'Fabrice Amos Tshingambu',
    'Yasaph Construction',
    'Suivi de chantier diaspora RDC',
    'Génie civil Afrique Centrale',
    'Devis construction Kinshasa',
  ],
  authors: [{ name: 'Yasaph Construction SARL' }, { name: 'Ing. Fabrice Amos Tshingambu' }],
  creator: 'Yasaph Construction SARL',
  publisher: 'Yasaph Construction SARL',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
    shortcut: ['/favicon.ico'],
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: siteUrl,
    siteName: 'Yasaph Construction',
    title: 'Yasaph Construction | BTP & Architecture RDC',
    description:
      'Génie civil, gros œuvres béton armé, plans 3D et rénovations de prestige à Kinshasa.',
    images: [
      {
        url: '/images/og-preview.jpg',
        width: 1200,
        height: 630,
        alt: 'Yasaph Construction - BTP & Architecture à Kinshasa RDC',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yasaph Construction | BTP & Architecture RDC',
    description:
      'Génie civil, gros œuvres béton armé, plans 3D et rénovations de prestige à Kinshasa.',
    images: ['/images/og-preview.jpg'],
  },
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
  alternates: {
    canonical: siteUrl,
  },
  other: {
    'geo.region': 'CD-KN',
    'geo.placename': 'Kinshasa, Gombe',
    'geo.position': '-4.3039;15.3082',
    'ICBM': '-4.3039, 15.3082',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Organization', 'GeneralContractor', 'HomeAndConstructionBusiness'],
        '@id': `${siteUrl}/#organization`,
        name: 'Yasaph Construction SARL',
        url: siteUrl,
        logo: `${siteUrl}/images/Logo%20Yasaph%201.png`,
        image: `${siteUrl}/images/og-preview.jpg`,
        description:
          'Entreprise générale de BTP, génie civil, gros œuvres en béton armé, architecture 2D/3D et rénovations de standing à Kinshasa, RDC et en Afrique Centrale.',
        founder: {
          '@type': 'Person',
          name: 'Fabrice Amos Tshingambu',
          jobTitle: 'Directeur Général & Ingénieur Civil',
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Avenue de la Justice',
          addressLocality: 'Gombe, Kinshasa',
          addressRegion: 'Kinshasa',
          addressCountry: 'CD',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: -4.3039,
          longitude: 15.3082,
        },
        telephone: '+243810000000',
        email: 'contact@yasaph-construction.cd',
        priceRange: '$$$',
        areaServed: [
          { '@type': 'City', name: 'Kinshasa' },
          { '@type': 'City', name: 'Lubumbashi' },
          { '@type': 'City', name: 'Goma' },
          { '@type': 'Country', name: 'République Démocratique du Congo' },
          { '@type': 'Place', name: 'Afrique Centrale' },
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Services BTP & Ingénierie Yasaph Construction',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Gros Œuvres & Structure Béton Armé',
                description: 'Fondations profondes, pieux, radiers, élévation de structures poteaux/poutres parasismiques.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Conception Architecturale 2D/3D & Permis de Bâtir',
                description: 'Plans de masse, modélisation 3D, calculs de structures et constitution de dossier de permis de bâtir.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Rénovation Lourde & Finitions Nobles',
                description: 'Réhabilitation intégrale, étanchéité de toitures, revêtements de sols, staff et électricité.',
              },
            },
          ],
        },
      },
    ],
  };

  return (
    <html lang="fr" className="light">
      <head>
        {/* Favicon & Apple Touch Icons */}
        <link rel="icon" href="/favicon.ico?v=3" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=3" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon-192.png?v=3" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=3" />
        <link rel="shortcut icon" href="/favicon.ico?v=3" />

        {/* OpenGraph & Social Media Link Preview */}
        <meta property="og:image" content={`${siteUrl}/images/og-preview.jpg`} />
        <meta property="og:image:secure_url" content={`${siteUrl}/images/og-preview.jpg`} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Yasaph Construction - BTP & Architecture à Kinshasa RDC" />
        <meta name="twitter:image" content={`${siteUrl}/images/og-preview.jpg`} />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-slate-50 text-slate-900 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
