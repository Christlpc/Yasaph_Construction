'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, PhoneCall, ShieldCheck } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'Nos Services', href: '/services' },
    { name: 'À Propos', href: '/a-propos' },
    { name: 'Demande de Devis', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      {/* Top micro bar */}
      <div className="bg-[#0F2744] text-xs py-2 px-4 hidden md:block text-slate-200 font-medium border-b border-[#1B365D]">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 text-[#F59E0B] font-bold">
              <ShieldCheck className="w-4 h-4" /> Entreprise agréée BTP à Kinshasa, RDC & Afrique Centrale
            </span>
            <span className="text-slate-300">📍 Gombe, Av. De la Justice, Kinshasa</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="tel:+243810000000" className="hover:text-[#0090D0] transition-colors flex items-center gap-1 font-bold text-white">
              <PhoneCall className="w-3.5 h-3.5 text-[#F59E0B]" /> +243 810 000 000
            </a>
            <span className="text-slate-600">|</span>
            <a href="mailto:contact@yasaph-construction.cd" className="hover:text-[#0090D0] transition-colors text-white font-semibold">
              contact@yasaph-construction.cd
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Official Brand Logo */}
          <Link href="/" className="flex items-center py-2 group">
            <div className="relative h-14 w-auto flex items-center">
              <Image
                src="/images/Logo Yasaph 1.png"
                alt="Yasaph Construction - Logo Officiel"
                width={210}
                height={60}
                className="h-12 sm:h-14 w-auto object-contain transition-transform group-hover:scale-102"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                    isActive
                      ? 'text-[#0090D0] bg-sky-50 border border-sky-200 shadow-xs'
                      : 'text-slate-800 hover:text-[#0090D0] hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Call to Action Button */}
          <div className="hidden md:flex items-center space-x-3">
            <Link
              href="/contact"
              className="gold-button px-5 py-2.5 rounded-xl text-sm font-extrabold shadow-md hover:scale-105 transition-all"
            >
              <span>Demander un Devis</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-800 hover:text-slate-950 hover:bg-slate-100"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-2 shadow-lg">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2.5 rounded-lg text-base font-bold ${
                  isActive
                    ? 'text-amber-900 bg-amber-100 border border-amber-300'
                    : 'text-slate-800 hover:text-slate-950 hover:bg-slate-100'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-2">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="gold-button w-full py-3 rounded-lg text-center block text-sm font-extrabold shadow-md"
            >
              Demander un Devis Gratuit
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
