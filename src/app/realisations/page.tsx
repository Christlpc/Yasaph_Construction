'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Plus,
  X,
  MapPin,
  Clock,
  Building2,
  Layers,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Sparkles,
  PhoneCall,
  MessageSquare,
} from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: 'batiment' | 'gros-oeuvres' | 'architecture' | 'renovation';
  categoryLabel: string;
  location: string;
  year: string;
  surface: string;
  scope: string;
  description: string;
  image: string;
  client: string;
  features: string[];
}

const projectsData: Project[] = [
  {
    id: 1,
    title: 'Tour Résidentielle La Renaissance',
    category: 'batiment',
    categoryLabel: 'Bâtiment Résidentiel R+14',
    location: 'Kinshasa - Gombe (Front de Fleuve)',
    year: '2025',
    surface: '9 400 m²',
    scope: 'Gros Œuvres, Structure Béton Armé & Façades Vitrées',
    description:
      'Construction complète d\'un immeuble résidentiel de grand standing comprenant 24 appartements de luxe, un niveau de penthouse et des fondations profondes sur pieux forés.',
    image: '/images/tower_gombe.jpg',
    client: 'Groupe Immobilier Privé',
    features: [
      'Fondations profondes sur 38 pieux forés à 18m',
      'Structure antisismique aux normes Eurocode/BAEL',
      'Façade rideau double vitrage acoustique et thermique',
      'Béton haute performance C35/45 dosé à 400 kg/m³',
    ],
  },
  {
    id: 2,
    title: 'Kinshasa Tower & Commercial Plaza',
    category: 'batiment',
    categoryLabel: 'Complexe Tertiaire & Bureaux',
    location: 'Kinshasa - Boulevard du 30 Juin',
    year: '2024',
    surface: '14 200 m²',
    scope: 'Gros Œuvres, Espaces Commerciaux & Aménagement',
    description:
      'Érection d\'un complexe d\'affaires moderne intégrant un socle commercial, 3 niveaux de parking souterrain étanche et des plateaux de bureaux modulables.',
    image: '/images/plaza_kinshasa.jpg',
    client: 'Investisseurs Institutionnels',
    features: [
      'Cuvelage étanche pour les 3 sous-sols en nappe phréatique',
      'Dalles post-contraintes pour grandes portées sans poteaux intermédiaires',
      'Aménagement paysager extérieur et parvis piétonnier en granit',
      'Livraison dans le respect strict des jalons contractuels',
    ],
  },
  {
    id: 3,
    title: 'Immeuble Résidentiel La Perle',
    category: 'gros-oeuvres',
    categoryLabel: 'Gros Œuvres & Structure',
    location: 'Kinshasa - Gombe',
    year: '2024',
    surface: '4 200 m²',
    scope: 'Structure R+8 Béton Armé & Maçonnerie',
    description:
      'Réalisation intégrale du squelette structurel en béton armé d\'un ensemble résidentiel. Contrôle continu des armatures et résistance des dalles.',
    image: '/images/hero_construction.jpg',
    client: 'Promoteur Immobilier Local',
    features: [
      'Élévation de 8 niveaux en 14 mois de chantier',
      'Essais de compression des éprouvettes béton à 7 et 28 jours',
      'Armatures FeE500 haute adhérence certifiées conformes',
      'Charpente de toiture et étanchéité multicouche',
    ],
  },
  {
    id: 4,
    title: 'Villa Contemporaine Mont-Fleury',
    category: 'architecture',
    categoryLabel: 'Architecture & Modélisation 3D',
    location: 'Kinshasa - Ngaliema (Mont-Fleury)',
    year: '2025',
    surface: '750 m²',
    scope: 'Conception 3D, Études Techniques & Permis',
    description:
      'Conception bioclimatique intégrale d\'une villa d\'architecte avec piscine à débordement, modélisation 3D photoréaliste et gestion du permis de bâtir.',
    image: '/images/architecture_plan.jpg',
    client: 'Client Privé Diaspora',
    features: [
      'Visite virtuelle 3D immersive et rendus 4K',
      'Plans d\'exécution électricité, plomberie et CVC détaillés',
      'Orientation optimisée pour la ventilation naturelle tropicale',
      'Dossier technique homologué pour le Permis de Bâtir',
    ],
  },
  {
    id: 5,
    title: 'Réhabilitation Complexe d\'Affaires Limete',
    category: 'renovation',
    categoryLabel: 'Rénovation & Finitions de Prestige',
    location: 'Kinshasa - Limete Industriel',
    year: '2024',
    surface: '1 800 m²',
    scope: 'Rénovation Lourde, Façades & Espaces Intérieurs',
    description:
      'Transformation complète d\'un bâtiment historique en bureaux modernes : renforcement structurel, réfection d\'étanchéité, pose de marbres et luminaires LED encastrés.',
    image: '/images/renovation_luxury.jpg',
    client: 'Société Commerciale',
    features: [
      'Reprises en sous-œuvre et consolidation des piliers',
      'Remplacement intégral des réseaux électriques et sanitaires',
      'Pose de carrelages grands formats et faux-plafonds staff',
      'Chantier conduit sans interruption de l\'activité administrative',
    ],
  },
  {
    id: 6,
    title: 'Résidence Privée Les Palmiers',
    category: 'architecture',
    categoryLabel: 'Architecture & Suivi de Chantier',
    location: 'Kinshasa - Macampagne',
    year: '2023',
    surface: '620 m²',
    scope: 'Plans 2D/3D & Supervision Ingénierie',
    description:
      'Projet résidentiel familial clé en main alliant volumes généreux, baies vitrées coulissantes et finitions épurées.',
    image: '/images/hero_construction.jpg',
    client: 'Particulier',
    features: [
      'Suivi technique hebdomadaire par drone pour le propriétaire',
      'Gestion rigoureuse du devis sans dépassement budgétaire',
      'Matériaux haut de gamme sélectionnés et testés',
      'Livraison des clés avec certificat de conformité',
    ],
  },
];

export default function RealisationsPage() {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filters = [
    { id: 'all', label: 'Toutes' },
    { id: 'batiment', label: 'Bâtiments' },
    { id: 'gros-oeuvres', label: 'Gros Œuvres' },
    { id: 'architecture', label: 'Architecture 3D' },
    { id: 'renovation', label: 'Rénovation' },
  ];

  const filteredProjects =
    selectedFilter === 'all'
      ? projectsData
      : projectsData.filter((p) => p.category === selectedFilter);

  return (
    <div className="py-12 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-[#0F2744]">
      {/* HEADER SECTION INSPIRED BY MBTP */}
      <div className="space-y-4 pt-4">
        <div className="flex items-center gap-3">
          <span className="text-xs sm:text-sm font-black tracking-widest uppercase text-[#0090D0]">
            Made by Yasaph
          </span>
          <span className="w-12 h-0.5 bg-[#F59E0B]" />
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0F2744] tracking-tight">
          Réalisations
        </h1>

        <p className="text-slate-600 text-sm sm:text-base max-w-2xl font-medium leading-relaxed">
          Retrouvez ici nos différentes réalisations ainsi que les projets d'envergure que nous menons avec rigueur à Kinshasa et en République Démocratique du Congo.
        </p>
      </div>

      {/* CATEGORY FILTER TABS */}
      <div className="border-b border-slate-200 pb-4">
        <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-sm sm:text-base font-bold">
          {filters.map((tab) => {
            const isActive = selectedFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id)}
                className={`transition-colors relative pb-2 ${
                  isActive
                    ? 'text-[#F59E0B] font-extrabold'
                    : 'text-slate-600 hover:text-[#0F2744]'
                }`}
              >
                {tab.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#F59E0B] rounded-full" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* 3-COLUMN PROJECTS GRID (MBTP STYLE WITH PLUS BUTTON) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => setActiveModalProject(project)}
            className="group cursor-pointer space-y-3"
          >
            {/* Image Container with Signature Plus Icon */}
            <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-slate-900 shadow-sm border border-slate-200 group-hover:shadow-xl transition-all duration-500">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-95 group-hover:brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

              {/* Surface & Year Pill Top Left */}
              <div className="absolute top-4 left-4 z-10">
                <span className="text-[11px] font-bold text-white bg-black/40 backdrop-blur-md px-3 py-1 rounded-lg border border-white/20">
                  {project.surface} • {project.year}
                </span>
              </div>

              {/* MBTP-STYLE PLUS BUTTON (Bottom-Right) */}
              <div className="absolute bottom-4 right-4 z-10 w-11 h-11 rounded-xl bg-white text-[#0F2744] flex items-center justify-center shadow-lg group-hover:bg-[#0090D0] group-hover:text-white group-hover:scale-110 transition-all duration-300">
                <Plus className="w-6 h-6 stroke-[2.5] transition-transform duration-300 group-hover:rotate-90" />
              </div>
            </div>

            {/* Content Below Image */}
            <div className="space-y-1 pt-1">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                {project.categoryLabel}
              </p>
              <h3 className="text-lg sm:text-xl font-black text-[#0F2744] group-hover:text-[#0090D0] transition-colors leading-snug">
                {project.title}
              </h3>
              <p className="text-xs text-slate-600 font-medium flex items-center gap-1.5 pt-0.5">
                <MapPin className="w-3.5 h-3.5 text-[#0090D0]" />
                <span>{project.location}</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* PROJECT DETAIL MODAL / DRAWER */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div
            className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 relative animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors shadow-md"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image Banner */}
            <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-900 rounded-t-3xl">
              <Image
                src={activeModalProject.image}
                alt={activeModalProject.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F2744] via-[#0F2744]/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-xs font-black uppercase tracking-wider text-[#38BDF8]">
                  {activeModalProject.categoryLabel}
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                  {activeModalProject.title}
                </h2>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3.5 rounded-xl bg-slate-100/80 border border-slate-200">
                  <p className="text-[11px] font-bold text-slate-500 uppercase">Localisation</p>
                  <p className="text-xs font-black text-[#0F2744] mt-0.5">{activeModalProject.location}</p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-100/80 border border-slate-200">
                  <p className="text-[11px] font-bold text-slate-500 uppercase">Superficie</p>
                  <p className="text-xs font-black text-[#0F2744] mt-0.5">{activeModalProject.surface}</p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-100/80 border border-slate-200">
                  <p className="text-[11px] font-bold text-slate-500 uppercase">Année</p>
                  <p className="text-xs font-black text-[#0F2744] mt-0.5">{activeModalProject.year}</p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-100/80 border border-slate-200">
                  <p className="text-[11px] font-bold text-slate-500 uppercase">Typologie</p>
                  <p className="text-xs font-black text-[#0F2744] mt-0.5">{activeModalProject.scope.split(',')[0]}</p>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <h4 className="text-sm font-black uppercase tracking-wider text-[#0090D0]">
                  Présentation du Projet
                </h4>
                <p className="text-slate-700 text-sm font-normal leading-relaxed">
                  {activeModalProject.description}
                </p>
              </div>

              {/* Technical Features Checklist */}
              <div className="space-y-2.5">
                <h4 className="text-sm font-black uppercase tracking-wider text-[#0090D0]">
                  Points Clés d'Ingénierie & Exécution
                </h4>
                <ul className="space-y-2">
                  {activeModalProject.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-800 font-semibold">
                      <CheckCircle2 className="w-4 h-4 text-[#0090D0] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row gap-3">
                <Link
                  href={`/contact?project=${encodeURIComponent(activeModalProject.title)}`}
                  className="gold-button flex-1 py-3.5 rounded-xl text-center font-black text-xs sm:text-sm shadow-md flex items-center justify-center gap-2"
                >
                  <span>Demander un Projet Similaire</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={`https://wa.me/243810000000?text=${encodeURIComponent(
                    `Bonjour Yasaph Construction, je suis intéressé par votre réalisation : "${activeModalProject.title}". Pouvons-nous en discuter ?`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-5 rounded-xl text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Direct</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* BOTTOM BANNER */}
      <div className="bg-[#0F2744] text-white rounded-3xl p-10 sm:p-14 text-center space-y-6 shadow-2xl border border-sky-500/20">
        <div className="max-w-2xl mx-auto space-y-3">
          <p className="text-xs font-black tracking-widest uppercase text-[#38BDF8]">
            Votre Édifice en RDC
          </p>
          <h2 className="text-3xl sm:text-4xl font-black">
            Un projet immobilier ou un chantier d'envergure à réaliser ?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-medium">
            Confiez vos études, calculs de structures et travaux de gros œuvres à des ingénieurs qualifiés basés à Kinshasa.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/contact"
            className="gold-button px-8 py-4 rounded-xl text-sm font-black shadow-md hover:scale-105 transition-all text-center"
          >
            Demander une Étude & Devis
          </Link>
        </div>
      </div>
    </div>
  );
}
