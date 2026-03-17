"use client";

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { GWLO } from '@/components/GWLO'; // Importujesz swój nowy komponent
import { Activity } from 'lucide-react';

export default function ProjektyPage() {
  return (
    <div className="min-h-screen bg-black text-white bg-[radial-gradient(#14532d_0.5px,transparent_0.5px)] [background-size:25px_25px]">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-6 py-24">
        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
            OPERACYJNE <span className="text-green-500">PROJEKTY</span>
          </h1>
          <div className="h-1 w-24 bg-green-600 mt-4"></div>
        </div>

        {/* TUTAJ DODAJESZ KOMPONENTY PROJEKTÓW */}
        
        <GWLO 
          title="Gorzowska Liga Osiedlowa"
          category="Rozgrywki"
          description="Największa amatorska liga szóstek w regionie. System obejmuje pełną obsługę sędziowską i techniczną."
          date="Grudzień 2023"
          members="300+ Zawodników"
          location="Gorzów Wielkopolski"
          progress={95}
          goals={[
            "Aktywizacja mieszkańców Gorzowa",
            "Profesjonalizacja sportu",
            "Budowa rankingu zawodników",
            "Promocja Fair Play"
          ]}
        />

        {/* Możesz teraz łatwo dodać drugi projekt tak: */}
        {/* <GWLO title="Akademia Junior" category="Szkolenie" ... /> */}

        <div className="border border-dashed border-green-900/50 py-20 flex flex-col items-center justify-center text-gray-600">
           <Activity size={48} className="mb-4 opacity-20" />
           <p className="font-mono text-xs uppercase tracking-[0.5em]">Oczekiwanie na kolejne dane...</p>
        </div>
      </main>

      <Footer />
    </div>
  );
}