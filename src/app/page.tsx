'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Building2,
  Compass,
  Hammer,
  ShieldCheck,
  Award,
  Users,
  CheckCircle2,
  ArrowRight,
  PhoneCall,
  MapPin,
  Clock,
  Sparkles,
  MessageSquare,
} from 'lucide-react';

export default function HomePage() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'gros-oeuvres' | 'architecture' | 'renovation'>('all');

  const services = [
    {
      id: 'gros-oeuvres',
      title: 'Gros Œuvres & Structure',
      icon: Building2,
      tagline: 'Solidité, Fondations & Béton Armé',
      description:
        'Conception et réalisation de fondations profondes, ossatures métalliques et structures en béton armé conformes aux normes parasismiques.',
      highlights: [
        'Fondations spéciales & fondations profondes',
        'Structures béton armé R+0 à R+12',
        'Charpentes & Maçonnerie de structure',
      ],
      image: '/images/hero_construction.jpg',
      link: '/services#gros-oeuvres',
    },
    {
      id: 'architecture',
      title: 'Plan & Architecture 2D/3D',
      icon: Compass,
      tagline: 'Conception Modeste & Projets d\'Envergure',
      description:
        'Élaboration de plans de masse, maquettes virtuelles 3D ultra-détaillées, études d\'impact et constitution de dossiers de permis de bâtir en RDC.',
      highlights: [
        'Plans architecturaux 2D & Modélisation 3D',
        'Calculs de structure & Métrés détaillés',
        'Assistance obtention Permis de Bâtir',
      ],
      image: '/images/architecture_plan.jpg',
      link: '/services#architecture',
    },
    {
      id: 'renovation',
      title: 'Rénovation & Réhabilitation',
      icon: Hammer,
      tagline: 'Modernisation & Restauration',
      description:
        'Transformation et rénovation lourde ou légère d\'immeubles, villas, espaces commerciaux et entrepôts à Kinshasa.',
      highlights: [
        'Étanchéité toiture & Réfection de façades',
        'Aménagement intérieur & Finitions premium',
        'Mise aux normes électriques et plomberie',
      ],
      image: '/images/renovation_luxury.jpg',
      link: '/services#renovation',
    },
  ];

  const projects = [
    {
      id: 1,
      title: 'Immeuble Résidentiel La Perle',
      category: 'gros-oeuvres',
      categoryLabel: 'Gros Œuvres & Structure',
      location: 'Kinshasa - Gombe',
      scope: 'Structure R+8 Béton Armé',
      surface: '4 200 m²',
      description: 'Fondations profondes sur pieux, coulage des dalles et ossature antisismique en plein cœur de la Gombe.',
      image: '/images/hero_construction.jpg',
      stats: '14 mois de chantier',
    },
    {
      id: 2,
      title: 'Villa Contemporaine Mont-Fleury',
      category: 'architecture',
      categoryLabel: 'Plan & Modélisation 3D',
      location: 'Kinshasa - Ngaliema',
      scope: 'Conception 3D & Permis',
      surface: '750 m²',
      description: 'Conception bioclimatique sur-mesure, modélisation 3D photoréaliste et obtention du permis de bâtir.',
      image: '/images/architecture_plan.jpg',
      stats: 'Rendus 3D & Suivi',
    },
    {
      id: 3,
      title: 'Réhabilitation Complexe d\'Affaires',
      category: 'renovation',
      categoryLabel: 'Rénovation & Finitions',
      location: 'Kinshasa - Limete',
      scope: 'Rénovation Lourde & Façades',
      surface: '1 800 m²',
      description: 'Rénovation structurelle intégrale, étanchéité toiture multicouche et aménagement intérieur contemporain.',
      image: '/images/renovation_luxury.jpg',
      stats: 'Livré en 4 mois',
    },
  ];

  const filteredProjects =
    activeFilter === 'all' ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="pb-24 bg-slate-50 text-[#0F2744]">
      {/* MODERN HERO SECTION WITH BACKGROUND IMAGE */}
      <section className="relative min-h-[88vh] lg:min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#0F2744]">
        {/* Background Chantier Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_construction.jpg"
            alt="Chantier Yasaph Construction Kinshasa"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-90"
          />
          {/* Multi-layered cinematic gradient overlays for optimal text contrast and depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F2744]/95 via-[#0F2744]/85 to-[#0F2744]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F2744] via-transparent to-[#0F2744]/50" />
        </div>

        {/* Hero Content aligned left */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-36 sm:pb-44 lg:pb-48 w-full">
          <div className="max-w-3xl space-y-7 text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12]">
              Bâtir l'avenir de la RDC avec <span className="text-[#38BDF8]">Rigueur</span> & <span className="text-[#F59E0B]">Excellence</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-slate-200 font-medium leading-relaxed max-w-2xl">
              Entreprise générale de référence en République Démocratique du Congo : <span className="text-white font-bold">Gros œuvres certifiés</span>, <span className="text-[#38BDF8] font-bold">Plans architecturaux 2D/3D</span> et <span className="text-[#FBBF24] font-bold">Rénovations d'exception</span> à Kinshasa et en Afrique Centrale.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="gold-button px-8 py-4 rounded-xl text-base font-extrabold shadow-xl flex items-center justify-center gap-3 hover:scale-105 transition-all"
              >
                <span>Obtenir un Devis Gratuit</span>
                <ArrowRight className="w-5 h-5 stroke-[2.5]" />
              </Link>
              <Link
                href="/services"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md px-7 py-4 rounded-xl text-base font-bold shadow-md flex items-center justify-center gap-2 transition-all hover:border-white/50"
              >
                <span>Explorer Nos Expertises</span>
              </Link>
            </div>

            {/* Guarantees & Accreditations Floating Bar */}
            <div className="pt-8 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm">
              <div className="flex items-center gap-2.5 font-bold text-slate-100 bg-white/5 backdrop-blur-sm p-3 rounded-xl border border-white/10">
                <ShieldCheck className="w-5 h-5 text-[#38BDF8] shrink-0" />
                <span>Normes Parasismiques</span>
              </div>
              <div className="flex items-center gap-2.5 font-bold text-slate-100 bg-white/5 backdrop-blur-sm p-3 rounded-xl border border-white/10">
                <Clock className="w-5 h-5 text-[#F59E0B] shrink-0" />
                <span>Délais & Coûts Garantis</span>
              </div>
              <div className="flex items-center gap-2.5 font-bold text-slate-100 bg-white/5 backdrop-blur-sm p-3 rounded-xl border border-white/10">
                <Award className="w-5 h-5 text-[#38BDF8] shrink-0" />
                <span>Supervision Ingénieurs Civils</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OVERLAPPING FLOATING STATS SECTION (EXACTLY 50% ON HERO, 50% BELOW) */}
      <section className="relative z-20 -mt-24 sm:-mt-28 lg:-mt-32 mb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-2xl shadow-slate-950/20 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 ring-1 ring-black/5">
          <div className="flex flex-col items-center text-center p-3 sm:p-4 group">
            <div className="w-12 h-12 rounded-2xl bg-sky-100/80 text-[#0090D0] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-xs">
              <Clock className="w-6 h-6 stroke-[2.5]" />
            </div>
            <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0090D0] tracking-tight">15+</p>
            <p className="text-xs sm:text-sm text-slate-800 mt-1.5 font-bold uppercase tracking-wider">Années d'Expérience</p>
            <span className="text-[11px] text-slate-500 font-medium hidden sm:inline-block mt-0.5">Savoir-faire éprouvé en RDC</span>
          </div>

          <div className="flex flex-col items-center text-center p-3 sm:p-4 pt-6 sm:pt-4 group">
            <div className="w-12 h-12 rounded-2xl bg-[#0F2744]/10 text-[#0F2744] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-xs">
              <Building2 className="w-6 h-6 stroke-[2.5]" />
            </div>
            <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F2744] tracking-tight">85+</p>
            <p className="text-xs sm:text-sm text-slate-800 mt-1.5 font-bold uppercase tracking-wider">Chantiers Réalisés</p>
            <span className="text-[11px] text-slate-500 font-medium hidden sm:inline-block mt-0.5">Kinshasa & Sous-Région</span>
          </div>

          <div className="flex flex-col items-center text-center p-3 sm:p-4 pt-6 sm:pt-4 group">
            <div className="w-12 h-12 rounded-2xl bg-amber-100/80 text-[#D97706] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-xs">
              <ShieldCheck className="w-6 h-6 stroke-[2.5]" />
            </div>
            <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#F59E0B] tracking-tight">100%</p>
            <p className="text-xs sm:text-sm text-slate-800 mt-1.5 font-bold uppercase tracking-wider">Ingénieurs Agréés</p>
            <span className="text-[11px] text-slate-500 font-medium hidden sm:inline-block mt-0.5">Supervision certifiée BTP</span>
          </div>

          <div className="flex flex-col items-center text-center p-3 sm:p-4 pt-6 sm:pt-4 group">
            <div className="w-12 h-12 rounded-2xl bg-sky-100/80 text-[#0090D0] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-xs">
              <Award className="w-6 h-6 stroke-[2.5]" />
            </div>
            <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0090D0] tracking-tight">3</p>
            <p className="text-xs sm:text-sm text-slate-800 mt-1.5 font-bold uppercase tracking-wider">Pôles d'Excellence</p>
            <span className="text-[11px] text-slate-500 font-medium hidden sm:inline-block mt-0.5">Gros Œuvres, 3D & Rénovations</span>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT SECTIONS */}
      <div className="space-y-24">
        {/* SERVICES SECTION - 3 ALTERNATING EXPERTISE PILLARS */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 lg:space-y-32">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <p className="text-xs font-black tracking-widest uppercase text-[#0090D0]">
              Nos Pôles d'Excellence
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F2744] tracking-tight">
              Les 3 piliers d'expertise de <span className="yasaph-gradient-text">Yasaph Construction</span>
            </h2>
            <p className="text-slate-700 text-base sm:text-lg font-medium">
              Une chaîne de compétences complète et intégrée pour concrétiser vos ambitions immobilières à Kinshasa et en Afrique Centrale.
            </p>
          </div>

          {/* PILIER 1 : GROS ŒUVRES (CONTENT GAUCHE - IMAGE DROITE) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center group">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-[#0090D0]">
                <span className="text-sm font-black">01</span>
                <span className="h-px w-8 bg-[#0090D0]/40" />
                <span>Structure & Fondations</span>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0F2744] tracking-tight">
                  Gros Œuvres & Structure Béton Armé
                </h3>
                <p className="text-xs sm:text-sm font-extrabold text-[#0090D0] uppercase tracking-wide">
                  Solidité, Fondations Profondes & Normes Parasismiques
                </p>
              </div>

              <p className="text-slate-700 text-base font-normal leading-relaxed">
                Le gros œuvre constitue l'épine dorsale de toute construction pérenne. Nos ingénieurs civils calculent et réalisent des fondations profondes, des radiers renforcés et des structures en béton armé conformes aux charges et exigences parasismiques en RDC.
              </p>

              {/* Highlights list */}
              <div className="space-y-3 pt-2">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-800 font-semibold">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0090D0] shrink-0 mt-0.5" />
                    <span>Fondations spéciales, pieux & radiers</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0090D0] shrink-0 mt-0.5" />
                    <span>Structures béton armé R+0 à R+12</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0090D0] shrink-0 mt-0.5" />
                    <span>Charpentes métalliques & maçonnerie</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0090D0] shrink-0 mt-0.5" />
                    <span>Contrôle qualité agrégats & bétons</span>
                  </li>
                </ul>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 border-t border-slate-200">
                <Link
                  href="/contact?service=gros-oeuvres"
                  className="gold-button px-7 py-3.5 rounded-xl text-sm font-extrabold shadow-md flex items-center justify-center gap-2 hover:scale-105 transition-all text-center"
                >
                  <span>Demander un Devis Gros Œuvres</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </Link>
                <Link
                  href="/services#gros-oeuvres"
                  className="inline-flex items-center justify-center gap-2 text-sm font-bold text-slate-700 hover:text-[#0090D0] transition-colors py-2"
                >
                  <span>Consulter le détail technique</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Image with floating badge */}
            <div className="lg:col-span-6 relative h-72 sm:h-96 lg:h-[420px] rounded-3xl overflow-hidden shadow-xl border border-slate-200">
              <Image
                src="/images/hero_construction.jpg"
                alt="Chantier Gros Œuvres Yasaph Construction Kinshasa"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F2744]/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 sm:right-auto bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-slate-200 shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0090D0] to-[#0F2744] text-white flex items-center justify-center font-black shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[#0F2744] font-extrabold text-xs sm:text-sm">Béton Haute Résistance</p>
                  <p className="text-slate-600 text-[11px] font-medium">Contrôlé par nos ingénieurs agréés</p>
                </div>
              </div>
            </div>
          </div>

          {/* PILIER 2 : PLAN & ARCHITECTURE (IMAGE GAUCHE - CONTENT DROITE) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center group">
            {/* Left Image (order 2 on mobile, order 1 on desktop) */}
            <div className="lg:col-span-6 order-2 lg:order-1 relative h-72 sm:h-96 lg:h-[420px] rounded-3xl overflow-hidden shadow-xl border border-slate-200">
              <Image
                src="/images/architecture_plan.jpg"
                alt="Plan et Modélisation 3D Architecture Kinshasa"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F2744]/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 sm:right-auto bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-slate-200 shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0090D0] to-[#0F2744] text-white flex items-center justify-center font-black shrink-0">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[#0F2744] font-extrabold text-xs sm:text-sm">Modélisation 3D Photoréaliste</p>
                  <p className="text-slate-600 text-[11px] font-medium">Dossiers de Permis de Bâtir en RDC</p>
                </div>
              </div>
            </div>

            {/* Right Content (order 1 on mobile, order 2 on desktop) */}
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <div className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-[#0090D0]">
                <span className="text-sm font-black">02</span>
                <span className="h-px w-8 bg-[#0090D0]/40" />
                <span>Conception & Ingénierie 3D</span>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0F2744] tracking-tight">
                  Plan, Architecture 2D/3D & Permis de Bâtir
                </h3>
                <p className="text-xs sm:text-sm font-extrabold text-[#0090D0] uppercase tracking-wide">
                  Conception Moderne, Visite 3D & Études d'Impact
                </p>
              </div>

              <p className="text-slate-700 text-base font-normal leading-relaxed">
                Visualisez votre futur édifice avec un réalisme saisissant avant le premier coup de pioche. Nos architectes élaborent des plans sur-mesure combinant modernité esthétique, confort bioclimatique et conformité réglementaire locale.
              </p>

              {/* Highlights list */}
              <div className="space-y-3 pt-2">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-800 font-semibold">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0090D0] shrink-0 mt-0.5" />
                    <span>Plans de masse 2D & distribution</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0090D0] shrink-0 mt-0.5" />
                    <span>Rendus 3D & visite virtuelle vidéo</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0090D0] shrink-0 mt-0.5" />
                    <span>Dossier complet de Permis de Bâtir</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0090D0] shrink-0 mt-0.5" />
                    <span>Calculs d'ingénierie & métrés chiffrés</span>
                  </li>
                </ul>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 border-t border-slate-200">
                <Link
                  href="/contact?service=architecture"
                  className="gold-button px-7 py-3.5 rounded-xl text-sm font-extrabold shadow-md flex items-center justify-center gap-2 hover:scale-105 transition-all text-center"
                >
                  <span>Commander une Étude Architecturale</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </Link>
                <Link
                  href="/services#architecture"
                  className="inline-flex items-center justify-center gap-2 text-sm font-bold text-slate-700 hover:text-[#0090D0] transition-colors py-2"
                >
                  <span>Consulter le détail technique</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* PILIER 3 : RÉNOVATION (CONTENT GAUCHE - IMAGE DROITE) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center group">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-[#D97706]">
                <span className="text-sm font-black">03</span>
                <span className="h-px w-8 bg-[#D97706]/40" />
                <span>Rénovation & Finitions</span>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0F2744] tracking-tight">
                  Rénovation Lourde & Réhabilitation d'Exception
                </h3>
                <p className="text-xs sm:text-sm font-extrabold text-[#D97706] uppercase tracking-wide">
                  Modernisation, Étanchéité & Finitions Haut Standing
                </p>
              </div>

              <p className="text-slate-700 text-base font-normal leading-relaxed">
                Sublimez vos immeubles, résidences de luxe, espaces commerciaux et entrepôts à Kinshasa. Nous prenons en charge la réhabilitation intégrale : renforcement structurel, réfection d'étanchéité et aménagement intérieur d'excellence.
              </p>

              {/* Highlights list */}
              <div className="space-y-3 pt-2">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-800 font-semibold">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                    <span>Rénovation lourde & reprises sous œuvre</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                    <span>Étanchéité toiture & façades modernes</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                    <span>Pose carrelage, marbre & faux plafonds</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                    <span>Mise aux normes électricité & plomberie</span>
                  </li>
                </ul>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 border-t border-slate-200">
                <Link
                  href="/contact?service=renovation"
                  className="gold-button px-7 py-3.5 rounded-xl text-sm font-extrabold shadow-md flex items-center justify-center gap-2 hover:scale-105 transition-all text-center"
                >
                  <span>Estimer mes Travaux de Rénovation</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </Link>
                <Link
                  href="/services#renovation"
                  className="inline-flex items-center justify-center gap-2 text-sm font-bold text-slate-700 hover:text-[#0090D0] transition-colors py-2"
                >
                  <span>Consulter le détail technique</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Image with floating badge */}
            <div className="lg:col-span-6 relative h-72 sm:h-96 lg:h-[420px] rounded-3xl overflow-hidden shadow-xl border border-slate-200">
              <Image
                src="/images/renovation_luxury.jpg"
                alt="Rénovation Luxe & Réhabilitation Kinshasa"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F2744]/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 sm:right-auto bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-slate-200 shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F59E0B] to-[#D97706] text-[#0F2744] flex items-center justify-center font-black shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[#0F2744] font-extrabold text-xs sm:text-sm">Finitions & Matériaux Nobles</p>
                  <p className="text-slate-600 text-[11px] font-medium">Valorisation immobilière garantie</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PORTFOLIO SHOWCASE SECTION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Header & Filter Row */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-slate-200 pb-8">
            <div className="space-y-3">
              <p className="text-xs font-black tracking-widest uppercase text-[#0090D0]">
                Portfolio & Réalisations
              </p>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0F2744] tracking-tight">
                Aperçu de nos réalisations récentes
              </h2>
              <p className="text-slate-600 text-sm sm:text-base max-w-xl font-medium">
                Découvrez nos chantiers phares conduits avec rigueur technique et maîtrise architecturale à Kinshasa.
              </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-1.5 p-1.5 bg-slate-200/70 rounded-2xl">
              {[
                { id: 'all', label: 'Tous les projets' },
                { id: 'gros-oeuvres', label: 'Gros Œuvres' },
                { id: 'architecture', label: 'Architecture' },
                { id: 'renovation', label: 'Rénovation' },
              ].map((btn) => (
                <button
                  key={btn.id}
                  onClick={() => setActiveFilter(btn.id as any)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-black transition-all ${
                    activeFilter === btn.id
                      ? 'bg-[#0F2744] text-white shadow-md'
                      : 'text-slate-700 hover:text-[#0F2744] hover:bg-white/60'
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((p) => (
              <div
                key={p.id}
                className="group relative bg-[#0F2744] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col justify-end min-h-[460px] sm:min-h-[500px] border border-slate-200/80 hover:border-[#0090D0]/50"
              >
                {/* Background Image with Zoom & Dark Gradient */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 brightness-90 group-hover:brightness-75"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F2744] via-[#0F2744]/65 to-black/25" />
                </div>

                {/* Top Bar inside image */}
                <div className="absolute top-5 left-5 right-5 z-10 flex items-center justify-between">
                  <span className="text-[11px] font-black uppercase tracking-wider text-white bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20">
                    {p.categoryLabel}
                  </span>
                  <span className="text-[11px] font-bold text-amber-300 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20">
                    {p.surface}
                  </span>
                </div>

                {/* Bottom Content Area */}
                <div className="relative z-10 p-6 sm:p-8 space-y-3.5 text-white">
                  {/* Location & Duration tag */}
                  <div className="flex items-center gap-3 text-xs font-semibold text-slate-300">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#38BDF8]" />
                      <span>{p.location}</span>
                    </div>
                    <span className="text-slate-500">•</span>
                    <div className="flex items-center gap-1.5 text-[#FBBF24] font-bold">
                      <Clock className="w-3.5 h-3.5 text-[#F59E0B]" />
                      <span>{p.stats}</span>
                    </div>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-[#38BDF8] transition-colors leading-tight">
                    {p.title}
                  </h3>

                  {/* Scope description */}
                  <p className="text-xs font-black uppercase tracking-wide text-[#38BDF8]">
                    {p.scope}
                  </p>

                  {/* Description */}
                  <p className="text-slate-300 text-xs sm:text-sm font-normal leading-relaxed line-clamp-2">
                    {p.description}
                  </p>

                  {/* Action Link Footer */}
                  <div className="pt-3 flex items-center justify-between border-t border-white/15">
                    <Link
                      href={`/contact?project=${encodeURIComponent(p.title)}`}
                      className="text-xs font-black uppercase tracking-wider text-slate-200 group-hover:text-white transition-colors"
                    >
                      Projet Similaire ? Nous Consulter
                    </Link>
                    <div className="w-9 h-9 rounded-xl bg-white/10 backdrop-blur-md group-hover:bg-[#F59E0B] group-hover:text-[#0F2744] text-white flex items-center justify-center transition-all group-hover:scale-110">
                      <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* WHY CHOOSE YASAPH */}
        <section className="bg-white border-y border-slate-200 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <p className="text-xs font-black tracking-widest uppercase text-[#0090D0]">
                Engagement & Rigueur Technique
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F2744] tracking-tight">
                Pourquoi confier votre chantier à <span className="yasaph-gradient-text">Yasaph Construction</span> ?
              </h2>
              <p className="text-slate-600 text-base sm:text-lg font-medium">
                En RDC, la durabilité d'un édifice et la sécurité de votre capital dépendent d'une supervision sans faille et d'une intégrité absolue.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Column: 4 Engineering Trust Pillars in 2x2 Grid */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Pillar 1 */}
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow space-y-3 group">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-sky-100/80 text-[#0090D0] flex items-center justify-center font-black group-hover:scale-110 transition-transform">
                      <ShieldCheck className="w-5 h-5 stroke-[2.5]" />
                    </div>
                    <span className="text-xs font-black text-slate-400">01</span>
                  </div>
                  <h3 className="text-lg font-extrabold text-[#0F2744]">
                    Supervision Technique Rigoureuse
                  </h3>
                  <p className="text-slate-600 text-sm font-normal leading-relaxed">
                    Chaque étape du ferraillage, coulage et séchage du béton armé est rigoureusement validée par nos ingénieurs civils agréés.
                  </p>
                </div>

                {/* Pillar 2 */}
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow space-y-3 group">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-amber-100/80 text-[#D97706] flex items-center justify-center font-black group-hover:scale-110 transition-transform">
                      <Award className="w-5 h-5 stroke-[2.5]" />
                    </div>
                    <span className="text-xs font-black text-slate-400">02</span>
                  </div>
                  <h3 className="text-lg font-extrabold text-[#0F2744]">
                    Matériaux Certifiés & Laboratoire
                  </h3>
                  <p className="text-slate-600 text-sm font-normal leading-relaxed">
                    Sélection stricte des ciments, granulats et aciers haute adhérence conformes aux calculs de charge et normes parasismiques.
                  </p>
                </div>

                {/* Pillar 3 */}
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow space-y-3 group">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-sky-100/80 text-[#0090D0] flex items-center justify-center font-black group-hover:scale-110 transition-transform">
                      <Clock className="w-5 h-5 stroke-[2.5]" />
                    </div>
                    <span className="text-xs font-black text-slate-400">03</span>
                  </div>
                  <h3 className="text-lg font-extrabold text-[#0F2744]">
                    Maîtrise des Délais & Coûts
                  </h3>
                  <p className="text-slate-600 text-sm font-normal leading-relaxed">
                    Devis détaillé transparent sans mauvaises surprises et planning contractuel d'avancement scrupuleusement respecté.
                  </p>
                </div>

                {/* Pillar 4 */}
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow space-y-3 group">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-[#0F2744]/10 text-[#0F2744] flex items-center justify-center font-black group-hover:scale-110 transition-transform">
                      <Users className="w-5 h-5 stroke-[2.5]" />
                    </div>
                    <span className="text-xs font-black text-slate-400">04</span>
                  </div>
                  <h3 className="text-lg font-extrabold text-[#0F2744]">
                    Suivi Diaspora & Investisseurs
                  </h3>
                  <p className="text-slate-600 text-sm font-normal leading-relaxed">
                    Rapports vidéo hebdomadaires par drone et visio-conférences dédiées pour piloter votre investissement à distance avec sérénité.
                  </p>
                </div>
              </div>

              {/* Right Column: Premium Engineering Desk Box */}
              <div className="lg:col-span-5 bg-[#0F2744] text-white rounded-3xl p-8 sm:p-10 shadow-2xl space-y-6 relative overflow-hidden border border-sky-500/20">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#0090D0]/10 rounded-full blur-3xl pointer-events-none" />

                <div className="space-y-3 relative z-10">
                  <p className="text-xs font-black tracking-widest uppercase text-[#38BDF8] flex items-center gap-2">
                    <PhoneCall className="w-4 h-4" /> Bureau Technique Kinshasa
                  </p>
                  <h3 className="text-2xl sm:text-3xl font-black text-white leading-snug">
                    Une étude de faisabilité pour votre projet ?
                  </h3>
                  <p className="text-slate-300 text-sm font-normal leading-relaxed">
                    Nos ingénieurs et architectes basés à la Gombe étudient vos plans et vous remettent un chiffrage estimatif sous 48h.
                  </p>
                </div>

                {/* Contact Data Points */}
                <div className="space-y-3.5 text-xs sm:text-sm font-semibold text-slate-200 bg-white/5 backdrop-blur-md p-5 rounded-2xl border border-white/10 relative z-10">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                    <span>Avenue De la Justice, Gombe, Kinshasa (RDC)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <PhoneCall className="w-4 h-4 text-[#F59E0B] shrink-0" />
                    <span>Ligne directe : +243 810 000 000</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-[#38BDF8] shrink-0" />
                    <span>Disponibilité : Lundi au Samedi (8h - 18h)</span>
                  </div>
                </div>

                {/* Buttons */}
                <div className="space-y-3 pt-2 relative z-10">
                  <Link
                    href="/contact"
                    className="gold-button w-full py-4 rounded-xl text-center font-black text-sm block shadow-lg hover:scale-102 transition-all"
                  >
                    Demander votre Étude Gratuite
                  </Link>
                  <a
                    href="https://wa.me/243810000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-white/20 text-white font-bold py-3.5 px-4 rounded-xl text-xs sm:text-sm block text-center border border-white/20 transition-all flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                    <span>Échanger sur WhatsApp (+243)</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AEO / SEO FAQ SECTION (Direct Answers for AI Engines & Google Rich Snippets) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* FAQ JSON-LD Schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: [
                  {
                    '@type': 'Question',
                    name: 'Quelle est la spécialité de Yasaph Construction à Kinshasa en RDC ?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yasaph Construction est une entreprise générale de BTP à Kinshasa spécialisée dans les gros œuvres en béton armé (structures R+0 à R+12, fondations profondes), la conception de plans d\'architecte 2D/3D et la rénovation haut standing de bâtiments résidentiels et commerciaux.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Comment fonctionne le suivi de chantier à distance pour la diaspora congolaise ?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yasaph Construction propose un dispositif digitalisé pour les investisseurs et la diaspora : rapports vidéos hebdomadaires par drone, points d\'étape réguliers en visio-conférence, facturation transparente par tranches validées et accès direct à l\'ingénieur en chef.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Quelles sont les normes techniques appliquées sur vos chantiers de béton armé ?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Tous nos chantiers respectent les normes parasismiques et les règles de calcul BAEL/Eurocode. Les bétons sont systématiquement dosés à 350-400 kg/m³ et testés en laboratoire avec écrasement d\'éprouvettes à 7 et 28 jours.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Quel est le délai pour obtenir un devis de construction ou une étude de faisabilité ?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Nos ingénieurs et architectes basés à la Gombe remettent un devis quantitatif et estimatif détaillé (DQE) sous 24 à 48 heures ouvrées après réception des plans ou visite du terrain.',
                    },
                  },
                ],
              }),
            }}
          />

          <div className="text-center max-w-3xl mx-auto space-y-3">
            <p className="text-xs font-black tracking-widest uppercase text-[#0090D0]">
              Questions Fréquentes & Renseignements
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F2744] tracking-tight">
              Tout ce que vous devez savoir pour bâtir sereinement
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-medium">
              Des réponses claires à vos questions techniques, administratives et budgétaires en RDC.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <h3 className="text-base font-extrabold text-[#0F2744]">
                Quelle est la spécialité de Yasaph Construction à Kinshasa ?
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
                Yasaph Construction est une entreprise générale de BTP à Kinshasa spécialisée dans les <strong>gros œuvres en béton armé</strong> (structures R+0 à R+12, fondations profondes), la conception de plans 2D/3D et la rénovation lourde de bâtiments résidentiels et tertiaires.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <h3 className="text-base font-extrabold text-[#0F2744]">
                Comment fonctionne le suivi de chantier pour la diaspora ?
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
                Nous mettons à disposition un espace de suivi digitalisé : <strong>rapports vidéos hebdomadaires par drone</strong>, visio-conférences régulières, déblocage des fonds par tranches d'avancement vérifiées et contact direct avec l'ingénieur référent.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <h3 className="text-base font-extrabold text-[#0F2744]">
                Quelles sont les normes appliquées sur le béton et les structures ?
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
                Tous nos ouvrages respectent les règles parasismiques et les normes BAEL. Les bétons sont dosés à 350-400 kg/m³ avec <strong>tests d'écrasement en laboratoire</strong> et vérification rigoureuse du ferraillage FeE500 avant tout coulage.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <h3 className="text-base font-extrabold text-[#0F2744]">
                Quel est le délai pour obtenir un devis ou une étude ?
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
                Après recueil de votre cahier des charges ou étude de vos plans, notre bureau technique à la Gombe vous remet un <strong>chiffrage quantitatif estimatif (DQE) sous 24 à 48 heures ouvrées</strong> sans engagement.
              </p>
            </div>
          </div>
        </section>

        {/* FINAL CALL TO ACTION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden bg-[#0F2744] p-10 sm:p-16 text-center text-white shadow-2xl border border-sky-500/20 space-y-6">
            <span className="text-xs uppercase tracking-widest font-black text-[#38BDF8]">
              PASSEZ À L'ACTION
            </span>
            <h2 className="text-3xl sm:text-5xl font-black max-w-3xl mx-auto leading-tight text-white">
              Prêt à concrétiser votre projet de construction en RDC ?
            </h2>
            <p className="text-slate-300 text-base max-w-xl mx-auto font-medium">
              Confiez vos plans, vos gros œuvres et vos rénovations à des ingénieurs civils chevronnés basés à Kinshasa.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="gold-button px-8 py-4 rounded-xl text-base font-black shadow-md hover:scale-105 transition-all text-center"
              >
                Envoyer une Demande de Devis
              </Link>
              <a
                href="https://wa.me/243810000000"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-black px-8 py-4 rounded-xl text-base shadow-md transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Discuter sur WhatsApp (+243)</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
