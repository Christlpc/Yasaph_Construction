import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yasaph-construction.cd';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Yasaph Construction SARL | Entreprise BTP, Gros Œuvres & Architecture à Kinshasa RDC',
    template: '%s | Yasaph Construction Kinshasa',
  },
  description:
    'Société de référence en BTP et génie civil en RDC, dirigée par l\'Ingénieur Fabrice Amos Tshingambu. Spécialiste des gros œuvres béton armé, études architecturales 3D, permis de bâtir et rénovations haut standing à Kinshasa et Afrique Centrale.',
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
      { url: '/icon.png', type: 'image/png' },
      { url: '/images/Logo Yasaph 1.png', type: 'image/png' },
    ],
    apple: [{ url: '/images/Logo Yasaph 1.png' }],
    shortcut: ['/icon.png'],
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: siteUrl,
    siteName: 'Yasaph Construction',
    title: 'Yasaph Construction | Référence BTP, Gros Œuvres & Architecture à Kinshasa RDC',
    description:
      'Gros œuvres béton armé, conception architecturale 3D et rénovations de prestige à Kinshasa. Découvrez nos réalisations et demandez une étude technique sans engagement.',
    images: [
      {
        url: '/images/hero_construction.jpg',
        width: 1200,
        height: 630,
        alt: 'Chantiers et Réalisations Yasaph Construction à Kinshasa RDC',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yasaph Construction | Entreprise BTP & Architecture à Kinshasa RDC',
    description:
      'Gros œuvres béton armé, conception architecturale 3D et rénovations d\'exception en République Démocratique du Congo.',
    images: ['/images/hero_construction.jpg'],
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
        image: `${siteUrl}/images/hero_construction.jpg`,
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
