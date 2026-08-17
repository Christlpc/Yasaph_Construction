'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  MessageSquare,
  ShieldCheck,
  AlertCircle,
  Clock,
  Building2,
  FileCheck2,
  ArrowRight,
} from 'lucide-react';
import { ServiceCategory } from '@/types/contact';

function ContactFormContent() {
  const searchParams = useSearchParams();
  const initialService = (searchParams.get('service') as ServiceCategory) || 'gros-oeuvres';
  const initialProject = searchParams.get('project') || '';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    service: initialService as ServiceCategory,
    budgetRange: '50 000$ - 100 000$',
    message: initialProject ? `Bonjour, je souhaite un devis / étude pour un projet similaire à : "${initialProject}". ` : '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [requestId, setRequestId] = useState('');

  useEffect(() => {
    const svc = searchParams.get('service') as ServiceCategory;
    if (svc) {
      setFormData((prev) => ({ ...prev, service: svc }));
    }
  }, [searchParams]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Erreur lors de la soumission.');
      }

      setSubmitted(true);
      setRequestId(data.data?.id || 'REQ-CONFIRMED');
    } catch (err: any) {
      setErrorMsg(err.message || 'Une erreur s\'est produite.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl shadow-slate-900/5">
      {submitted ? (
        <div className="py-12 text-center space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-800 border border-emerald-300 flex items-center justify-center mx-auto shadow-sm">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-[#0F2744]">
              Demande d'Étude Transmise avec Succès !
            </h2>
            <p className="text-xs text-slate-500 font-mono font-bold">
              RÉFÉRENCE DOSSIER : <span className="text-[#0090D0] font-black">{requestId}</span>
            </p>
          </div>
          <p className="text-slate-700 text-sm max-w-md mx-auto leading-relaxed font-medium">
            Merci <strong className="text-[#0F2744]">{formData.name}</strong>. Nos ingénieurs civils et architectes à Kinshasa ont bien reçu votre dossier technique et vous recontacteront sous 24 à 48 heures ouvrées.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  name: '',
                  email: '',
                  phone: '',
                  location: '',
                  service: 'gros-oeuvres',
                  budgetRange: '50 000$ - 100 000$',
                  message: '',
                });
              }}
              className="px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#0F2744] text-xs font-black transition-all"
            >
              Envoyer une autre demande
            </button>
            <a
              href="https://wa.me/243810000000"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Compléter sur WhatsApp (+243)</span>
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-7">
          <div className="space-y-1 border-b border-slate-200 pb-4">
            <h2 className="text-xl sm:text-2xl font-black text-[#0F2744]">
              Formulaire de Chiffrage & Étude Préalable
            </h2>
            <p className="text-xs text-slate-500 font-medium">
              Tous les champs marqués d'une étoile (*) sont requis pour l'analyse technique.
            </p>
          </div>

          {errorMsg && (
            <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-sm flex items-center gap-2 font-bold">
              <AlertCircle className="w-5 h-5 shrink-0 text-rose-600" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Name & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-xs font-black text-[#0F2744] uppercase tracking-wider">
                Nom & Prénom <span className="text-[#0090D0]">*</span>
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="ex: Jean-Marc Kabongo"
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3.5 text-sm text-[#0F2744] font-semibold placeholder-slate-400 focus:outline-none focus:border-[#0090D0] focus:bg-white transition-all shadow-xs"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-black text-[#0F2744] uppercase tracking-wider">
                Adresse Email <span className="text-[#0090D0]">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="votre.email@domaine.com"
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3.5 text-sm text-[#0F2744] font-semibold placeholder-slate-400 focus:outline-none focus:border-[#0090D0] focus:bg-white transition-all shadow-xs"
              />
            </div>
          </div>

          {/* Phone & Location */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-xs font-black text-[#0F2744] uppercase tracking-wider">
                Téléphone / WhatsApp <span className="text-[#0090D0]">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+243 81 000 0000"
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3.5 text-sm text-[#0F2744] font-semibold placeholder-slate-400 focus:outline-none focus:border-[#0090D0] focus:bg-white transition-all shadow-xs"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-black text-[#0F2744] uppercase tracking-wider">
                Commune / Ville du Projet
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="ex: Kinshasa - Gombe, Ngaliema, Limete..."
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3.5 text-sm text-[#0F2744] font-semibold placeholder-slate-400 focus:outline-none focus:border-[#0090D0] focus:bg-white transition-all shadow-xs"
              />
            </div>
          </div>

          {/* Service & Budget Range */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-xs font-black text-[#0F2744] uppercase tracking-wider">
                Pôle d'Expertise Souhaité <span className="text-[#0090D0]">*</span>
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3.5 text-sm text-[#0F2744] font-semibold focus:outline-none focus:border-[#0090D0] focus:bg-white transition-all shadow-xs"
              >
                <option value="gros-oeuvres">Gros Œuvres, Fondations & Béton Armé</option>
                <option value="architecture">Plan 2D/3D, Architecture & Permis de Bâtir</option>
                <option value="renovation">Rénovation Lourde & Finitions Nobles</option>
                <option value="autre">Projet Immobilier Complet / Autre</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-black text-[#0F2744] uppercase tracking-wider">
                Fourchette Budgétaire Estimée (USD)
              </label>
              <select
                name="budgetRange"
                value={formData.budgetRange}
                onChange={handleChange}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3.5 text-sm text-[#0F2744] font-semibold focus:outline-none focus:border-[#0090D0] focus:bg-white transition-all shadow-xs"
              >
                <option value="10 000$ - 30 000$">10 000$ - 30 000$</option>
                <option value="30 000$ - 50 000$">30 000$ - 50 000$</option>
                <option value="50 000$ - 100 000$">50 000$ - 100 000$</option>
                <option value="100 000$ - 250 000$">100 000$ - 250 000$</option>
                <option value="250 000$ +">Plus de 250 000$</option>
              </select>
            </div>
          </div>

          {/* Detailed Message */}
          <div className="space-y-2">
            <label className="block text-xs font-black text-[#0F2744] uppercase tracking-wider">
              Description de vos Attentes / Cahier des Charges <span className="text-[#0090D0]">*</span>
            </label>
            <textarea
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Précisez la superficie estimée, le nombre de niveaux (R+...), le type de terrain ou les délais souhaités..."
              className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3.5 text-sm text-[#0F2744] font-semibold placeholder-slate-400 focus:outline-none focus:border-[#0090D0] focus:bg-white transition-all resize-none shadow-xs"
            />
          </div>

          {/* Submit CTA */}
          <button
            type="submit"
            disabled={loading}
            className="gold-button w-full py-4 rounded-xl font-black text-sm sm:text-base shadow-xl flex items-center justify-center gap-3 hover:scale-[1.01] transition-transform disabled:opacity-50"
          >
            {loading ? (
              <span>Transmission en cours aux ingénieurs...</span>
            ) : (
              <>
                <span>Transmettre mon dossier pour étude</span>
                <Send className="w-5 h-5" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 text-[#0F2744]">
      {/* Header Banner */}
      <div className="space-y-4 pt-4 pb-8 border-b border-slate-200">
        <p className="text-xs font-black tracking-widest uppercase text-[#0090D0]">
          Étude Technique & Chiffrage Gratuit
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0F2744] tracking-tight leading-tight max-w-4xl">
          Parlons de votre <span className="yasaph-gradient-text">futur projet en RDC</span>
        </h1>
        <p className="text-slate-700 text-base sm:text-lg font-medium leading-relaxed max-w-3xl">
          Transmettez vos paramètres de chantier. Nos ingénieurs en génie civil et architectes étudient votre dossier et vous remettent un chiffrage quantitatif et estimatif (DQE) transparent sous 24 à 48 heures.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Form Panel */}
        <div className="lg:col-span-7">
          <Suspense
            fallback={
              <div className="bg-white rounded-3xl p-12 text-center text-slate-500 font-bold border border-slate-200">
                Chargement du formulaire...
              </div>
            }
          >
            <ContactFormContent />
          </Suspense>
        </div>

        {/* Right Info Sidebar (Luxury Corporate Desk) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Main Bureau Box */}
          <div className="bg-[#0F2744] text-white rounded-3xl p-8 sm:p-10 shadow-2xl space-y-6 relative overflow-hidden border border-sky-500/20">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0090D0]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-2 relative z-10">
              <p className="text-xs font-black tracking-widest uppercase text-[#38BDF8] flex items-center gap-2">
                <Building2 className="w-4 h-4" /> Siège Opérationnel
              </p>
              <h3 className="text-2xl font-black text-white">
                Bureau Technique Kinshasa
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Nos équipes d'ingénieurs et d'architectes vous reçoivent sur rendez-vous pour étudier vos plans et vos sols.
              </p>
            </div>

            {/* Contact Points */}
            <div className="space-y-4 text-xs sm:text-sm text-slate-200 relative z-10 pt-2 border-t border-white/10">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                <div>
                  <p className="font-extrabold text-white">Adresse</p>
                  <p className="text-slate-300 text-xs">Avenue de la Justice, Commune de la Gombe, Kinshasa, RDC</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                <div>
                  <p className="font-extrabold text-white">Ligne Directe Chantiers</p>
                  <p className="text-slate-300 text-xs">+243 810 000 000 / +243 990 000 000</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                <div>
                  <p className="font-extrabold text-white">Courrier Électronique</p>
                  <p className="text-slate-300 text-xs">contact@yasaph-construction.cd</p>
                </div>
              </div>
            </div>

            {/* WhatsApp Fast Track */}
            <div className="pt-2 relative z-10">
              <a
                href="https://wa.me/243810000000"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-black py-4 px-4 rounded-xl text-xs sm:text-sm shadow-md flex items-center justify-center gap-2.5 transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Discussion Directe WhatsApp (+243)</span>
              </a>
            </div>
          </div>

          {/* Trust Guarantees Box */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
            <p className="text-xs font-black uppercase tracking-wider text-[#0F2744] flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#0090D0]" /> Nos Engagements de Traitement
            </p>
            <ul className="space-y-2.5 text-xs text-slate-600 font-medium">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0090D0] shrink-0 mt-0.5" />
                <span>Étude de faisabilité et retour sous 24 à 48 heures.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0090D0] shrink-0 mt-0.5" />
                <span>Devis quantitatif et estimatif détaillé sans engagement.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0090D0] shrink-0 mt-0.5" />
                <span>Confidentialité absolue de vos plans et données de chantier.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
