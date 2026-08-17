import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Building2,
  Compass,
  Hammer,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  FileText,
  Clock,
  MessageSquare,
  Sparkles,
  Layers,
} from 'lucide-react';

export const metadata = {
  title: 'Nos Services & Expertises BTP | Yasaph Construction Kinshasa',
  description:
    'Solutions complètes en génie civil et architecture en RDC : Gros œuvres béton armé, conception de plans 2D/3D, calculs de structure, permis de bâtir et rénovations haut standing.',
};

export default function ServicesPage() {
  return (
    <div className="py-12 space-y-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-[#0F2744]">
      {/* HEADER HERO BANNER */}
      <div className="space-y-6 pt-4 pb-8 border-b border-slate-200">
        <div className="max-w-3xl space-y-3">
          <p className="text-xs font-black tracking-widest uppercase text-[#0090D0]">
            Expertises Techniques & Ingénierie
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0F2744] tracking-tight leading-tight">
            L'excellence technique au service de vos <span className="yasaph-gradient-text">ambitions en RDC</span>
          </h1>
          <p className="text-slate-700 text-base sm:text-lg font-medium leading-relaxed">
            De l'étude de sol préliminaire et la modélisation architecturale 3D jusqu'au coulage des dalles en béton armé et aux finitions de prestige, nous mobilisons des équipes d'ingénieurs qualifiés pour garantir la pérennité de vos ouvrages à Kinshasa et dans la sous-région.
          </p>
        </div>

        {/* Quick Section Jump Navigation */}
        <div className="flex flex-wrap gap-2 pt-2">
          <a
            href="#gros-oeuvres"
            className="text-xs font-black uppercase tracking-wider px-4 py-2.5 rounded-xl bg-slate-100 text-slate-800 hover:bg-[#0090D0] hover:text-white transition-all"
          >
            01. Gros Œuvres & Structure
          </a>
          <a
            href="#architecture"
            className="text-xs font-black uppercase tracking-wider px-4 py-2.5 rounded-xl bg-slate-100 text-slate-800 hover:bg-[#0090D0] hover:text-white transition-all"
          >
            02. Plan & Architecture 3D
          </a>
          <a
            href="#renovation"
            className="text-xs font-black uppercase tracking-wider px-4 py-2.5 rounded-xl bg-slate-100 text-slate-800 hover:bg-[#0090D0] hover:text-white transition-all"
          >
            03. Rénovation & Finitions
          </a>
          <a
            href="#methodologie"
            className="text-xs font-black uppercase tracking-wider px-4 py-2.5 rounded-xl bg-slate-100 text-slate-800 hover:bg-[#0090D0] hover:text-white transition-all"
          >
            04. Méthode d'Exécution
          </a>
        </div>
      </div>

      {/* SERVICE 1: GROS ŒUVRES & INGÉNIERIE STRUCTURELLE */}
      <section id="gros-oeuvres" className="scroll-mt-28 space-y-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left: Deep Technical Description & Deliverables */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-[#0090D0]">
              <span className="text-sm font-black">01</span>
              <span className="h-px w-8 bg-[#0090D0]/40" />
              <span>Génie Civil & Fondations Spéciales</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-[#0F2744] tracking-tight">
              Gros Œuvres, Fondations Profondes & Structure Béton Armé
            </h2>

            <p className="text-slate-700 text-base font-normal leading-relaxed">
              La résistance mécanique et la longévité d'un bâtiment reposent entièrement sur la qualité de son ossature. Nous réalisons l'ensemble des études géotechniques et calculs de béton armé pour construire des structures adaptées à la topographie et aux sols de Kinshasa (sables, argiles et zones alluvionnaires).
            </p>

            {/* Technical Sub-Blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="p-5 rounded-2xl bg-slate-100/70 space-y-2.5">
                <p className="text-xs font-black uppercase tracking-wider text-[#0090D0]">
                  Infrastructures & Fondations
                </p>
                <ul className="space-y-2 text-xs text-slate-800 font-semibold">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0090D0] shrink-0 mt-0.5" />
                    <span>Pieux forés, micro-pieux & puits de fondation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0090D0] shrink-0 mt-0.5" />
                    <span>Radiers généraux nervurés et semelles isolées</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0090D0] shrink-0 mt-0.5" />
                    <span>Murs de soutènement & cuvelages étanches</span>
                  </li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-slate-100/70 space-y-2.5">
                <p className="text-xs font-black uppercase tracking-wider text-[#0090D0]">
                  Superstructures & Ossatures
                </p>
                <ul className="space-y-2 text-xs text-slate-800 font-semibold">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0090D0] shrink-0 mt-0.5" />
                    <span>Poteaux, poutres & voiles béton banché (R+0 à R+12)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0090D0] shrink-0 mt-0.5" />
                    <span>Dalles pleines & planchers corps creux</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0090D0] shrink-0 mt-0.5" />
                    <span>Charpentes métalliques lourdes & hangars</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Quality Commitment Specs */}
            <div className="border-l-2 border-[#0090D0] pl-4 py-1 space-y-1">
              <p className="text-xs font-black uppercase tracking-wider text-[#0F2744]">
                Spécifications Techniques & Contrôles :
              </p>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                Bétons dosés à 350-400 kg/m³ certifiés par éprouvettes d'écrasement à 7 et 28 jours. Aciers haute adhérence FeE500 conformes aux règles parasismiques.
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <Link
                href="/contact?service=gros-oeuvres"
                className="gold-button px-7 py-3.5 rounded-xl text-sm font-black shadow-md hover:scale-105 transition-all text-center flex items-center justify-center gap-2"
              >
                <span>Demander une Étude de Gros Œuvres</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </Link>
            </div>
          </div>

          {/* Right: Immersive Visual & Key Fact Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative h-80 sm:h-96 w-full rounded-3xl overflow-hidden shadow-xl border border-slate-200">
              <Image
                src="/images/hero_construction.jpg"
                alt="Chantier Gros Œuvres et Béton Armé Kinshasa"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F2744]/75 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <p className="text-xs font-bold text-[#38BDF8] uppercase tracking-wider">Chantiers d'Envergure</p>
                <p className="text-sm font-extrabold">Supervision quotidienne par nos ingénieurs civils agréés</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <p className="text-xs font-black uppercase tracking-wider text-[#0F2744] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#0090D0]" /> Garantie Décennale & Respect des Délais
              </p>
              <p className="text-xs text-slate-600 font-medium">
                Contrats transparents avec calendrier d'exécution jalonné et pénalités de retard applicables.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE 2: PLAN, ARCHITECTURE 2D/3D & PERMIS DE BÂTIR */}
      <section id="architecture" className="scroll-mt-28 space-y-10 pt-8 border-t border-slate-200">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left (Desktop): Immersive Visual & Deliverable list */}
          <div className="lg:col-span-5 order-2 lg:order-1 space-y-4">
            <div className="relative h-80 sm:h-96 w-full rounded-3xl overflow-hidden shadow-xl border border-slate-200">
              <Image
                src="/images/architecture_plan.jpg"
                alt="Plan architectural et Rendu 3D Kinshasa"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F2744]/75 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <p className="text-xs font-bold text-[#38BDF8] uppercase tracking-wider">Rendus Photoréalistes</p>
                <p className="text-sm font-extrabold">Visualisation 3D extérieure et visite virtuelle vidéo</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <p className="text-xs font-black uppercase tracking-wider text-[#0F2744] flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#0090D0]" /> Dossier Complet Permis de Bâtir
              </p>
              <p className="text-xs text-slate-600 font-medium">
                Prise en charge administrative et technique complète auprès des autorités urbaines de Kinshasa.
              </p>
            </div>
          </div>

          {/* Right: Architectural Workflow & Content */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-[#0090D0]">
              <span className="text-sm font-black">02</span>
              <span className="h-px w-8 bg-[#0090D0]/40" />
              <span>Conception Architecturale & Permis</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-[#0F2744] tracking-tight">
              Plans 2D, Modélisation 3D & Démarches Règlementaires
            </h2>

            <p className="text-slate-700 text-base font-normal leading-relaxed">
              Une conception réussie est le fruit d'un équilibre subtil entre élégance esthétique, optimisation des flux intérieurs et respect des contraintes climatiques tropicales de Kinshasa (orientation solaire, ventilation naturelle et gestion des eaux pluviales).
            </p>

            {/* Technical Sub-Blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="p-5 rounded-2xl bg-slate-100/70 space-y-2.5">
                <p className="text-xs font-black uppercase tracking-wider text-[#0090D0]">
                  Livrables Graphiques & 3D
                </p>
                <ul className="space-y-2 text-xs text-slate-800 font-semibold">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0090D0] shrink-0 mt-0.5" />
                    <span>Plans de masse, façades, coupes et élévations 2D</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0090D0] shrink-0 mt-0.5" />
                    <span>Rendus photoréalistes 3D haute définition</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0090D0] shrink-0 mt-0.5" />
                    <span>Animation vidéo & visite virtuelle immersive</span>
                  </li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-slate-100/70 space-y-2.5">
                <p className="text-xs font-black uppercase tracking-wider text-[#0090D0]">
                  Ingénierie & Conformité
                </p>
                <ul className="space-y-2 text-xs text-slate-800 font-semibold">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0090D0] shrink-0 mt-0.5" />
                    <span>Plans d'exécution de structure & ferraillage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0090D0] shrink-0 mt-0.5" />
                    <span>Schémas techniques électricité, plomberie & CVC</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0090D0] shrink-0 mt-0.5" />
                    <span>Devis quantitatif et estimatif détaillé (DQE)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Architectural Philosophy Note */}
            <div className="border-l-2 border-[#0090D0] pl-4 py-1 space-y-1">
              <p className="text-xs font-black uppercase tracking-wider text-[#0F2744]">
                Architecture Bioclimatique & Espaces Optimisés :
              </p>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                Chaque mètre carré est judicieusement valorisé pour maximiser la lumière naturelle et réduire les coûts énergétiques de climatisation.
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <Link
                href="/contact?service=architecture"
                className="gold-button px-7 py-3.5 rounded-xl text-sm font-black shadow-md hover:scale-105 transition-all text-center flex items-center justify-center gap-2"
              >
                <span>Commander une Étude Architecturale</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE 3: RÉNOVATION LOURDE & RÉHABILITATION */}
      <section id="renovation" className="scroll-mt-28 space-y-10 pt-8 border-t border-slate-200">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left: Renovation Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-[#D97706]">
              <span className="text-sm font-black">03</span>
              <span className="h-px w-8 bg-[#D97706]/40" />
              <span>Restauration, Étanchéité & Modernisation</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-[#0F2744] tracking-tight">
              Rénovation Lourde, Réhabilitation & Finitions de Prestige
            </h2>

            <p className="text-slate-700 text-base font-normal leading-relaxed">
              Donnez une valeur patrimoniale et un cachet contemporain à vos biens immobiliers. Nous prenons en charge la réhabilitation intégrale d'immeubles résidentiels, de bureaux d'affaires, de villas de standing et de complexes commerciaux à Kinshasa.
            </p>

            {/* Technical Sub-Blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="p-5 rounded-2xl bg-slate-100/70 space-y-2.5">
                <p className="text-xs font-black uppercase tracking-wider text-[#D97706]">
                  Gros Travaux & Enveloppe
                </p>
                <ul className="space-y-2 text-xs text-slate-800 font-semibold">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                    <span>Renforcement structurel & reprises en sous-œuvre</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                    <span>Réfection complète de toitures et étanchéité multicouche</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                    <span>Rénovation de façades (enduits hydrofuges, baies vitrées)</span>
                  </li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-slate-100/70 space-y-2.5">
                <p className="text-xs font-black uppercase tracking-wider text-[#D97706]">
                  Aménagement Intérieur & Finitions
                </p>
                <ul className="space-y-2 text-xs text-slate-800 font-semibold">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                    <span>Pose de carrelages grand format, marbres et granits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                    <span>Faux plafonds suspendus en staff et éclairage LED</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                    <span>Mise aux normes des circuits électriques & plomberie</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Turnkey Assurance */}
            <div className="border-l-2 border-[#D97706] pl-4 py-1 space-y-1">
              <p className="text-xs font-black uppercase tracking-wider text-[#0F2744]">
                Diagnostic Préalable & Clé en Main :
              </p>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                Nos ingénieurs réalisent un audit de l'existant avant travaux pour détecter les faiblesses d'étanchéité et optimiser le budget de transformation.
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <Link
                href="/contact?service=renovation"
                className="gold-button px-7 py-3.5 rounded-xl text-sm font-black shadow-md hover:scale-105 transition-all text-center flex items-center justify-center gap-2"
              >
                <span>Demander un Chiffrage Rénovation</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </Link>
            </div>
          </div>

          {/* Right: Visual Showcase */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative h-80 sm:h-96 w-full rounded-3xl overflow-hidden shadow-xl border border-slate-200">
              <Image
                src="/images/renovation_luxury.jpg"
                alt="Rénovation Haut Standing Kinshasa"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F2744]/75 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <p className="text-xs font-bold text-[#FBBF24] uppercase tracking-wider">Matériaux Nobles</p>
                <p className="text-sm font-extrabold">Valorisation immobilière et finitions contemporaines</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <p className="text-xs font-black uppercase tracking-wider text-[#0F2744] flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#D97706]" /> Délais de Livraison Maîtrisés
              </p>
              <p className="text-xs text-slate-600 font-medium">
                Coordination rigoureuse de tous les corps d'état pour minimiser l'immobilisation de vos locaux.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE 4: NOTRE PROCESSUS D'EXÉCUTION EN 4 ÉTAPES */}
      <section id="methodologie" className="scroll-mt-28 space-y-12 pt-8 border-t border-slate-200">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <p className="text-xs font-black tracking-widest uppercase text-[#0090D0]">
            Méthodologie de Chantier
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0F2744] tracking-tight">
            Notre démarche d'exécution en 4 étapes
          </h2>
          <p className="text-slate-600 text-base font-medium">
            Une méthode éprouvée pour piloter votre projet de construction avec sérénité, précision et transparence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Step 1 */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 relative group">
            <span className="text-3xl font-black text-[#0090D0]/30 group-hover:text-[#0090D0] transition-colors">
              01
            </span>
            <h3 className="text-lg font-extrabold text-[#0F2744]">
              Étude & Diagnostic
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
              Visite de site à Kinshasa, étude de sol géotechnique, analyse de faisabilité et recueil précis de votre cahier des charges.
            </p>
          </div>

          {/* Step 2 */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 relative group">
            <span className="text-3xl font-black text-[#0090D0]/30 group-hover:text-[#0090D0] transition-colors">
              02
            </span>
            <h3 className="text-lg font-extrabold text-[#0F2744]">
              Plans 3D & Devis DQE
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
              Modélisation 3D, calculs de structure, dossier de permis de bâtir et chiffrage quantitatif transparent poste par poste.
            </p>
          </div>

          {/* Step 3 */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 relative group">
            <span className="text-3xl font-black text-[#0090D0]/30 group-hover:text-[#0090D0] transition-colors">
              03
            </span>
            <h3 className="text-lg font-extrabold text-[#0F2744]">
              Exécution & Contrôle
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
              Déploiement des équipes d'ingénieurs sur site, tests de laboratoire des bétons et rapports vidéo hebdomadaires réguliers.
            </p>
          </div>

          {/* Step 4 */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 relative group">
            <span className="text-3xl font-black text-[#0090D0]/30 group-hover:text-[#0090D0] transition-colors">
              04
            </span>
            <h3 className="text-lg font-extrabold text-[#0F2744]">
              Réception & Livraison
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
              Levée rigoureuse des réserves, contrôle de conformité parasismique finale et remise officielle des clés de votre ouvrage.
            </p>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA BANNER */}
      <section className="bg-[#0F2744] text-white rounded-3xl p-10 sm:p-14 text-center space-y-6 relative overflow-hidden shadow-2xl border border-sky-500/20">
        <div className="max-w-3xl mx-auto space-y-3 relative z-10">
          <p className="text-xs font-black tracking-widest uppercase text-[#38BDF8]">
            Démarrer votre Projet
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-white">
            Prêt à lancer vos études ou votre chantier en RDC ?
          </h2>
          <p className="text-slate-300 text-base max-w-2xl mx-auto font-medium">
            Contactez notre bureau technique à Kinshasa pour une première étude de faisabilité et un devis estimatif sans engagement.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row justify-center gap-4 relative z-10">
          <Link
            href="/contact"
            className="gold-button px-8 py-4 rounded-xl text-sm font-black shadow-lg hover:scale-105 transition-all text-center"
          >
            Demander un Devis en Ligne
          </Link>
          <a
            href="https://wa.me/243810000000"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-black px-8 py-4 rounded-xl text-sm shadow-lg transition-all flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Discuter sur WhatsApp (+243)</span>
          </a>
        </div>
      </section>
    </div>
  );
}
