"use client";

import React from 'react';
import { LayoutDashboard, Target, FileText, Mail } from 'lucide-react';

export const Navbar = () => {
  return (
    <nav className="bg-black border-b border-green-600 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="text-green-500 font-black text-lg uppercase tracking-[0.2em] drop-shadow-[0_0_8px_rgba(34,197,94,0.6)]">
          STOWARZYSZENIE AMATORSKICH AKTYWNOŚCI SPORTOWYCH
        </div>

        <div className="flex gap-8">
          {[
            { name: 'START', href: '/' },
            { name: 'PROJEKTY', href: '/projekty' },
            { name: 'STATUT', href: '/dokumentacja' },
            { name: 'KONTAKT', href: '/kontakt' }
          ].map((item) => (
            <a key={item.name} href={item.href} className="text-white hover:text-green-400 font-mono text-[10px] uppercase tracking-widest transition-all">
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};