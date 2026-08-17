import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Yasaph Construction | Gros Œuvres, Plan & Architecture, Rénovation à Kinshasa RDC',
  description: 'Société de référence en construction gros œuvres, étude architecturale 2D/3D et rénovation de bâtiments à Kinshasa et en Afrique Centrale. Demandez un devis rapide.',
  keywords: ['Construction Kinshasa', 'Gros oeuvres RDC', 'Architecte Kinshasa', 'Rénovation bâtiment RDC', 'Yasaph Construction', 'BTP Afrique Centrale'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="light">
      <body className="antialiased bg-slate-50 text-slate-900 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
