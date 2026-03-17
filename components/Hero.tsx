"use client";

import React from 'react';
import { Target, Activity, BarChart3, User, Mail, Send } from 'lucide-react';

const Stats = () => {
  const data = [
    { label: 'AKTYWNYCH CZŁONKÓW', value: '300+', icon: <Activity size={24} /> },
    { label: 'PROJEKTÓW', value: '1', icon: <Target size={24} /> },
    { label: 'LOKALIZACJI', value: '1', icon: <BarChart3 size={24} /> },
  ];

  return (
    <div className="flex justify-center items-center gap-12 md:gap-24 py-12 border-y border-green-900/30 my-12 bg-black/40">
      {data.map((s, i) => (
        <div key={i} className="text-center flex flex-col items-center">
          <div className="text-green-500 mb-3">{s.icon}</div>
          <div className="text-3xl font-black text-white">{s.value}</div>
          <div className="text-[9px] text-green-600 font-mono tracking-[0.2em] mt-2 uppercase">{s.label}</div>
        </div>
      ))}
    </div>
  );
};

const ProjectCard = ({ title, desc, tag }: { title: string, desc: string, tag: string }) => (
  <div className="relative p-6 bg-black border border-green-800/30 hover:border-green-500 transition-all duration-500 hover:-translate-y-2">
    <div className="absolute top-0 right-0 p-4 opacity-10"><Target size={40} className="text-green-500" /></div>
    <span className="text-[9px] font-mono text-green-500 bg-green-950 px-2 py-1 uppercase">{tag}</span>
    <h3 className="text-lg font-bold text-white mt-4">{title}</h3>
    <p className="text-[11px] text-gray-400 mt-3 leading-relaxed h-12">{desc}</p>
    <button className="mt-6 w-full py-2 border border-green-600 text-[10px] font-bold uppercase tracking-widest text-white hover:bg-green-600 hover:text-black transition-all">
      Więcej informacji
    </button>
  </div>
);

const ZarzadCard = ({ role, name }: { role: string, name: string }) => (
  <div className="bg-black border border-green-900/50 p-6 flex flex-col items-center gap-4 text-center hover:border-green-500 transition-all">
    <div className="w-16 h-16 bg-green-950 rounded-full flex items-center justify-center">
      <User className="text-green-500" size={32} />
    </div>
    <div>
      <div className="text-green-500 text-[10px] uppercase font-bold tracking-widest">{role}</div>
      <div className="text-white font-bold">{name}</div>
    </div>
  </div>
);

export const Hero = () => {
  return (
    /* Tło z kropkami (dot-grid) */
    <section className="bg-black text-white px-6 py-20 bg-[radial-gradient(#14532d_0.5px,transparent_0.5px)] [background-size:20px_20px]">
      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* HEADER */}
        <div className="max-w-4xl space-y-8">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter drop-shadow-[0_0_15px_rgba(34,197,94,0.3)]">
            STOWARZYSZENIE AMATORSKICH <br/><span className="text-green-500">AKTYWNOŚCI SPORTOWYCH</span>
          </h1>
          <p className="font-mono text-gray-400 border-l-2 border-green-600 pl-6 text-sm leading-relaxed max-w-2xl bg-black/60 p-4">
            Stowarzyszenie powstało z potrzeby stworzenia nowego standardu w amatorskiej rywalizacji. 
            Nasza historia to nie tylko statystyki, to przede wszystkim ludzie, którzy po godzinach pracy 
            zmieniają boiska w strefę najwyższej wydajności.
          </p>
          <button className="bg-green-600 text-black font-black px-8 py-4 uppercase tracking-widest hover:bg-green-400 transition-all">
            Inicjuj połączenie
          </button>
        </div>

        <Stats />

        {/* PROJEKTY */}
        <div className="space-y-12">
          <h2 className="text-2xl font-black uppercase text-green-500 border-b border-green-900 pb-4">Operacyjne Projekty</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProjectCard title="GORZOWSKA LIGA OSIEDLOWA" desc="Największa amatorska liga szóstek w regionie." tag="Rozgrywki" />
            {/* <ProjectCard title="AKADEMIA TECHNIKI" desc="Program szkoleniowy oparty na analizie wideo i danych telemetrycznych." tag="Szkolenie" />
            <ProjectCard title="SPORTOWE MIASTO" desc="Inicjatywa rewitalizacji boisk osiedlowych i budowa infrastruktury." tag="Infrastruktura" /> */}
          </div>
        </div>

        {/* ZARZĄD */}
        <div className="space-y-12">
           <h2 className="text-2xl font-black uppercase text-green-500 border-b border-green-900 pb-4">Zarząd</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ZarzadCard role="Prezes" name="Jan Michalak" />
            <ZarzadCard role="Wice" name="Magdalena Michalak" />
            <ZarzadCard role="Sekretarz" name="Jakub Mądry" />
          </div>
        </div>

        {/* FORMULARZ */}
        <div className="border border-green-900 p-8 space-y-6 bg-black">
          <h3 className="text-white font-bold uppercase flex items-center gap-2"><Mail size={18}/> Wyślij zapytanie</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <input className="bg-black border border-green-900 p-3 w-full text-white placeholder-green-800" placeholder="Twoje Imię" />
            <input className="bg-black border border-green-900 p-3 w-full text-white placeholder-green-800" placeholder="Email" />
          </div>
          <textarea className="bg-black border border-green-900 p-3 w-full h-32 text-white placeholder-green-800" placeholder="Wiadomość..." />
          <button className="bg-green-600 px-8 py-3 text-black font-bold uppercase hover:bg-green-400 flex items-center gap-2">
            Wyślij <Send size={14} />
          </button>
        </div>

      </div>
    </section>
  );
};