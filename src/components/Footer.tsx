import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, ShieldCheck, ArrowRight, MessageSquare } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0F2744] border-t border-[#1B365D] text-slate-300 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Col 1: About */}
          <div className="space-y-4">
            <Link href="/" className="inline-block bg-white p-2.5 rounded-xl shadow-md group hover:opacity-95 transition-opacity">
              <Image
                src="/images/Logo Yasaph 1.png"
                alt="Yasaph Construction"
                width={170}
                height={50}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-slate-300 text-sm leading-relaxed">
              L'excellence de la construction moderne en République Démocratique du Congo et en Afrique Centrale. Spécialiste des gros œuvres, plans architecturaux et rénovations d'exception.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#F59E0B] font-bold">
              <ShieldCheck className="w-4 h-4" /> Qualité, Rigueur & Respect des Délais
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 tracking-wide border-l-2 border-[#0090D0] pl-3">
              Nos Expertises
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/services#gros-oeuvres" className="hover:text-[#0090D0] transition-colors flex items-center gap-2">
                  <ArrowRight className="w-3.5 h-3.5 text-[#0090D0]" /> Gros Œuvres & Structures
                </Link>
              </li>
              <li>
                <Link href="/services#architecture" className="hover:text-[#0090D0] transition-colors flex items-center gap-2">
                  <ArrowRight className="w-3.5 h-3.5 text-[#0090D0]" /> Plan 2D/3D & Architecture
                </Link>
              </li>
              <li>
                <Link href="/services#renovation" className="hover:text-[#0090D0] transition-colors flex items-center gap-2">
                  <ArrowRight className="w-3.5 h-3.5 text-[#0090D0]" /> Rénovation & Réhabilitation
                </Link>
              </li>
              <li>
                <Link href="/services#suivi" className="hover:text-[#0090D0] transition-colors flex items-center gap-2">
                  <ArrowRight className="w-3.5 h-3.5 text-[#0090D0]" /> Gestion & Suivi de Chantier
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Kinshasa */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 tracking-wide border-l-2 border-[#0090D0] pl-3">
              Contact Kinshasa
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#0090D0] shrink-0 mt-0.5" />
                <span>Avenue de la Justice, Commune de la Gombe, Kinshasa, RDC</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#0090D0] shrink-0" />
                <span>+243 810 000 000 / +243 990 000 000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#0090D0] shrink-0" />
                <span>contact@yasaph-construction.cd</span>
              </li>
              <li className="pt-2">
                <a
                  href="https://wa.me/243810000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-600/20 text-emerald-300 border border-emerald-500/30 px-3.5 py-1.5 rounded-lg text-xs font-bold hover:bg-emerald-600 hover:text-white transition-all"
                >
                  <MessageSquare className="w-3.5 h-3.5" /> Direct WhatsApp Kinshasa
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Zones d'Intervention & Admin */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 tracking-wide border-l-2 border-[#0090D0] pl-3">
              Zones d'Intervention
            </h3>
            <p className="text-xs text-slate-400 mb-3">
              Nos équipes d'ingénieurs et d'architectes interviennent à :
            </p>
            <div className="flex flex-wrap gap-1.5 text-xs">
              <span className="bg-[#1B365D] border border-sky-900 px-2.5 py-1 rounded text-[#38BDF8] font-semibold">Kinshasa</span>
              <span className="bg-[#1B365D] border border-sky-900 px-2.5 py-1 rounded text-slate-200">Lubumbashi</span>
              <span className="bg-[#1B365D] border border-sky-900 px-2.5 py-1 rounded text-slate-200">Goma</span>
              <span className="bg-[#1B365D] border border-sky-900 px-2.5 py-1 rounded text-slate-200">Brazzaville</span>
              <span className="bg-[#1B365D] border border-sky-900 px-2.5 py-1 rounded text-slate-200">Afrique Centrale</span>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="border-t border-[#1B365D] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Yasaph Construction SARL. Tous droits réservés.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/contact" className="hover:text-white transition-colors">Demander un Devis</Link>
            <Link href="/a-propos" className="hover:text-white transition-colors">Mentions Légales</Link>
            <Link href="/services" className="hover:text-white transition-colors">Nos Services</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
