import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ShieldCheck,
  Award,
  Users,
  Building2,
  ArrowRight,
  Sparkles,
  Quote,
  CheckCircle2,
  PhoneCall,
  Mail,
  MapPin,
} from 'lucide-react';

export const metadata = {
  title: 'À Propos & Direction Générale | Yasaph Construction Kinshasa',
  description:
    'Découvrez l\'histoire, les engagements et la direction générale de Yasaph Construction, dirigée par l\'Ingénieur Fabrice Amos Tshingambu, acteur de référence en génie civil et architecture en RDC.',
};

export default function AboutPage() {
  return (
    <div className="py-12 space-y-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-[#0F2744]">
      {/* HEADER BANNER */}
      <div className="space-y-4 pt-4 pb-8 border-b border-slate-200">
        <p className="text-xs font-black tracking-widest uppercase text-[#0090D0]">
          Histoire, Valeurs & Leadership
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0F2744] tracking-tight leading-tight max-w-4xl">
          L'ingénierie congolaise portée par l'exigence et <span className="yasaph-gradient-text">l'intégrité technique</span>
        </h1>
        <p className="text-slate-700 text-base sm:text-lg font-medium leading-relaxed max-w-3xl">
          Fondée avec la volonté de transformer les standards du BTP en République Démocratique du Congo, Yasaph Construction conjugue rigueur géotechnique, conception architecturale contemporaine et gestion de projet transparente.
        </p>
      </div>

      {/* SECTION 1: HISTOIRE & EXPERTISE */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-6 space-y-6">
          <div className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-[#0090D0]">
            <span className="text-sm font-black">01</span>
            <span className="h-px w-8 bg-[#0090D0]/40" />
            <span>Notre Vision & Notre Ancrage</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-[#0F2744] tracking-tight leading-snug">
            Des fondations solides pour les projets immobiliers majeurs en RDC
          </h2>

          <p className="text-slate-700 text-base font-normal leading-relaxed">
            Basée à Kinshasa (Gombe), <strong>Yasaph Construction</strong> est une entreprise générale de bâtiment et travaux publics (BTP). Nous apportons des solutions concrètes et éprouvées aux particuliers, promoteurs immobiliers et investisseurs de la diaspora souhaitant bâtir sans aléas.
          </p>

          <p className="text-slate-700 text-base font-normal leading-relaxed">
            Notre force réside dans la coordination étroite entre nos architectes, nos ingénieurs en structures et nos maîtres de chantier. Chaque étape — des études de sol à la livraison finale — fait l'objet de calculs validés, de métrés vérifiables et d'un contrôle rigoureux des matériaux (bétons et aciers).
          </p>

          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="p-5 rounded-2xl bg-slate-100/70 border border-slate-200">
              <span className="text-2xl sm:text-3xl font-black text-[#0090D0]">Kinshasa</span>
              <p className="text-xs text-slate-600 font-semibold mt-1">Siège social & supervision opérationnelle à la Gombe</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-100/70 border border-slate-200">
              <span className="text-2xl sm:text-3xl font-black text-[#0F2744]">Sous-Région</span>
              <p className="text-xs text-slate-600 font-semibold mt-1">Interventions en RDC et Afrique Centrale</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 relative h-80 sm:h-96 lg:h-[440px] rounded-3xl overflow-hidden shadow-xl border border-slate-200">
          <Image
            src="/images/hero_construction.jpg"
            alt="Chantier et Ingénierie Yasaph Construction Kinshasa"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F2744]/75 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <p className="text-xs font-bold text-[#38BDF8] uppercase tracking-wider">Engagement Qualité</p>
            <p className="text-sm sm:text-base font-extrabold">Supervision directe sur chaque chantier</p>
          </div>
        </div>
      </div>

      {/* SECTION 2: PRÉSENTATION DU DIRECTEUR GÉNÉRAL (INGÉNIEUR FABRICE AMOS TSHINGAMBU) */}
      <div className="bg-[#0F2744] text-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden border border-sky-500/20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#0090D0]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Executive Visual & Identity Pod */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative h-96 sm:h-[420px] rounded-2xl overflow-hidden border border-white/15 shadow-xl bg-slate-900">
              <Image
                src="/images/architecture_plan.jpg"
                alt="Ingénieur Fabrice Amos Tshingambu - Directeur Général Yasaph Construction"
                fill
                className="object-cover brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F2744] via-[#0F2744]/40 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 space-y-1 text-white">
                <p className="text-xs font-black uppercase tracking-widest text-[#38BDF8]">
                  Direction Générale
                </p>
                <h3 className="text-2xl font-black text-white leading-tight">
                  Ing. Fabrice Amos Tshingambu
                </h3>
                <p className="text-xs text-slate-300 font-semibold">
                  Directeur Général & Ingénieur Civil des Structures
                </p>
              </div>
            </div>

            {/* Direct Contact info for Executive Office */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 space-y-2">
              <div className="flex items-center gap-2 font-medium">
                <MapPin className="w-4 h-4 text-[#38BDF8] shrink-0" />
                <span>Siège : Av. De la Justice, Gombe, Kinshasa</span>
              </div>
              <div className="flex items-center gap-2 font-medium">
                <Mail className="w-4 h-4 text-[#F59E0B] shrink-0" />
                <span>direction@yasaph-construction.cd</span>
              </div>
            </div>
          </div>

          {/* Executive Vision & Biography */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-[#38BDF8]">
              <span className="text-sm font-black">02</span>
              <span className="h-px w-8 bg-[#38BDF8]/40" />
              <span>Mot de la Direction Générale</span>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-snug">
                « Construire en RDC exige une rigueur technique sans compromis et une transparence totale. »
              </h2>
              
              <div className="p-5 rounded-2xl bg-white/5 border-l-4 border-[#F59E0B] space-y-2">
                <Quote className="w-6 h-6 text-[#F59E0B]/60" />
                <p className="text-sm sm:text-base text-slate-200 italic font-medium leading-relaxed">
                  « Chaque édifice que nous concevons et érigeons porte une responsabilité humaine et économique majeure. Notre mission à la tête de Yasaph Construction est d'offrir à nos clients en RDC et à la diaspora un niveau de conformité, de sécurité parasismique et de fiabilité budgétaire digne des plus hauts standards internationaux. »
                </p>
                <p className="text-xs font-bold text-[#F59E0B] pt-1">
                  — Ing. Fabrice Amos Tshingambu, Directeur Général
                </p>
              </div>
            </div>

            <div className="space-y-3 text-sm text-slate-300 font-normal leading-relaxed">
              <p>
                Sous la direction de l'<strong>Ingénieur Fabrice Amos Tshingambu</strong>, Yasaph Construction a développé une méthodologie rigoureuse combinant études géotechniques approfondies, modélisation 3D photoréaliste et suivi digitalisé des travaux en direct.
              </p>
              <p>
                Engagé pour l'excellence et la modernisation des infrastructures à Kinshasa, il veille personnellement à l'intégrité des calculs de charge, au respect des délais d'exécution et à l'accompagnement sur-mesure de chaque investisseur.
              </p>
            </div>

            {/* Key Leadership Commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-xs text-slate-200 font-bold bg-white/5 p-3 rounded-xl border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0" />
                <span>Supervision continue des chantiers</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-200 font-bold bg-white/5 p-3 rounded-xl border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-[#F59E0B] shrink-0" />
                <span>Transparence absolue des coûts</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 3: NOS 4 PILIERS DE VALEUR */}
      <div className="space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <p className="text-xs font-black tracking-widest uppercase text-[#0090D0]">
            Charte d'Excellence
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0F2744] tracking-tight">
            Les 4 engagements cardinaux de Yasaph
          </h2>
          <p className="text-slate-600 text-base font-medium">
            Des principes immuables qui guident chacune de nos réalisations à Kinshasa et dans la sous-région.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Value 1 */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 hover:shadow-md transition-shadow group">
            <div className="flex items-center justify-between">
              <div className="w-11 h-11 rounded-xl bg-sky-100 text-[#0090D0] flex items-center justify-center font-black group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-5 h-5 stroke-[2.5]" />
              </div>
              <span className="text-xs font-black text-slate-400">01</span>
            </div>
            <h3 className="text-lg font-extrabold text-[#0F2744]">Rigueur Technique</h3>
            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
              Respect strict des normes parasismiques, dosage certifié des bétons et validation systématique des armatures par nos ingénieurs.
            </p>
          </div>

          {/* Value 2 */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 hover:shadow-md transition-shadow group">
            <div className="flex items-center justify-between">
              <div className="w-11 h-11 rounded-xl bg-amber-100 text-[#D97706] flex items-center justify-center font-black group-hover:scale-110 transition-transform">
                <Award className="w-5 h-5 stroke-[2.5]" />
              </div>
              <span className="text-xs font-black text-slate-400">02</span>
            </div>
            <h3 className="text-lg font-extrabold text-[#0F2744]">Intégrité Budgétaire</h3>
            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
              Devis quantitatifs détaillés (DQE) poste par poste. Aucune surfacturation ou frais cachés en cours de chantier.
            </p>
          </div>

          {/* Value 3 */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 hover:shadow-md transition-shadow group">
            <div className="flex items-center justify-between">
              <div className="w-11 h-11 rounded-xl bg-sky-100 text-[#0090D0] flex items-center justify-center font-black group-hover:scale-110 transition-transform">
                <Users className="w-5 h-5 stroke-[2.5]" />
              </div>
              <span className="text-xs font-black text-slate-400">03</span>
            </div>
            <h3 className="text-lg font-extrabold text-[#0F2744]">Compagnonnage Qualifié</h3>
            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
              Ferrailleurs, coffreurs, maçons et techniciens hautement qualifiés encadrés en permanence sur site.
            </p>
          </div>

          {/* Value 4 */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 hover:shadow-md transition-shadow group">
            <div className="flex items-center justify-between">
              <div className="w-11 h-11 rounded-xl bg-amber-100 text-[#D97706] flex items-center justify-center font-black group-hover:scale-110 transition-transform">
                <Building2 className="w-5 h-5 stroke-[2.5]" />
              </div>
              <span className="text-xs font-black text-slate-400">04</span>
            </div>
            <h3 className="text-lg font-extrabold text-[#0F2744]">Suivi Diaspora & Distance</h3>
            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
              Rapports hebdomadaires vidéos et points d'étape détaillés pour piloter votre investissement à distance en toute confiance.
            </p>
          </div>
        </div>
      </div>

      {/* BOTTOM ACTION BANNER */}
      <div className="bg-slate-100 rounded-3xl p-10 sm:p-14 text-center space-y-6 border border-slate-200">
        <div className="max-w-2xl mx-auto space-y-3">
          <p className="text-xs font-black tracking-widest uppercase text-[#0090D0]">
            Prendre Contact
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0F2744]">
            Envie d'échanger sur votre futur projet avec notre direction ?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-medium">
            Rencontrez nos ingénieurs dans nos bureaux à la Gombe ou sollicitez une première évaluation technique à distance.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/contact"
            className="gold-button px-8 py-4 rounded-xl text-sm font-black shadow-md hover:scale-105 transition-all text-center flex items-center justify-center gap-2"
          >
            <span>Prendre Rendez-vous / Demander un Devis</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </Link>
          <a
            href="https://wa.me/243810000000"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0F2744] hover:bg-[#1B365D] text-white font-bold px-8 py-4 rounded-xl text-sm shadow-md transition-all flex items-center justify-center gap-2"
          >
            <PhoneCall className="w-4 h-4 text-[#F59E0B]" />
            <span>Ligne Directe (+243 810 000 000)</span>
          </a>
        </div>
      </div>
    </div>
  );
}
