"use client";

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Phone, Mail, MapPin, Send, MessageSquare, Clock } from 'lucide-react';

const ContactCard = ({ icon, title, value, subValue }: { icon: React.ReactNode, title: string, value: string, subValue?: string }) => (
  <div className="bg-black border border-green-900/50 p-8 hover:border-green-500 transition-all group">
    <div className="text-green-500 mb-4 group-hover:scale-110 transition-transform">{icon}</div>
    <h3 className="text-green-600 font-mono text-[10px] uppercase tracking-[0.3em] mb-2">{title}</h3>
    <p className="text-white font-bold text-lg">{value}</p>
    {subValue && <p className="text-gray-500 text-xs mt-1 font-mono">{subValue}</p>}
  </div>
);

export default function KontaktPage() {
  return (
    <div className="min-h-screen bg-black text-white bg-[radial-gradient(#14532d_0.5px,transparent_0.5px)] [background-size:25px_25px]">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-6 py-24">
        {/* NAGŁÓWEK */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
            CENTRUM <span className="text-green-500">KONTAKTOWE</span>
          </h1>
          <p className="text-gray-500 font-mono text-xs mt-4 uppercase tracking-[0.4em]">Inicjuj połączenie z zarządem SAAS</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* KARTY KONTAKTOWE */}
          <ContactCard 
            icon={<Phone size={24} />} 
            title="Telefon" 
            value="+48 000 000 000" 
            subValue="Pn-Pt: 09:00 - 17:00"
          />
          <ContactCard 
            icon={<Mail size={24} />} 
            title="E-mail" 
            value="biuro@saas-gorzow.pl" 
            subValue="Odpowiadamy w 24h"
          />
          <ContactCard 
            icon={<MapPin size={24} />} 
            title="Adres Siedziby" 
            value="Plac Słoneczny 11 / 11" 
            subValue="66-400 Gorzów Wielkopolski, Polska"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* FORMULARZ */}
          <div className="bg-black border border-green-900/50 p-8 md:p-12 relative">
            <div className="absolute top-0 left-0 w-1 h-full bg-green-600"></div>
            <h2 className="text-2xl font-black uppercase mb-8 flex items-center gap-3">
              <MessageSquare className="text-green-500" /> Wyślij wiadomość
            </h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-green-700 uppercase tracking-widest">Identyfikator / Imię</label>
                  <input type="text" className="w-full bg-green-950/10 border border-green-900 p-4 text-white focus:border-green-500 outline-none transition-all" placeholder="Jan Kowalski" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-green-700 uppercase tracking-widest">Kanał Zwrotny / E-mail</label>
                  <input type="email" className="w-full bg-green-950/10 border border-green-900 p-4 text-white focus:border-green-500 outline-none transition-all" placeholder="twoj@email.pl" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-mono text-green-700 uppercase tracking-widest">Temat Operacji</label>
                <select className="w-full bg-green-950/10 border border-green-900 p-4 text-white focus:border-green-500 outline-none transition-all appearance-none">
                  <option>Zapytanie o ligę</option>
                  <option>Współpraca / Sponsoring</option>
                  <option>Błąd w systemie</option>
                  <option>Inne</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-mono text-green-700 uppercase tracking-widest">Treść Raportu</label>
                <textarea className="w-full bg-green-950/10 border border-green-900 p-4 text-white h-40 focus:border-green-500 outline-none transition-all" placeholder="Wpisz treść wiadomości..."></textarea>
              </div>

              <button className="w-full bg-green-600 text-black font-black py-5 uppercase tracking-[0.3em] hover:bg-green-400 transition-all flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(34,197,94,0.2)]">
                <Send size={18} /> Wyślij Transmisję
              </button>
            </form>
          </div>

          {/* MAPA / INFO DODATKOWE */}
          <div className="space-y-8">
            <div className="aspect-video w-full bg-green-950/10 border border-green-900 relative overflow-hidden group">
              {/* Tutaj docelowo mapa, teraz placeholder */}
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-30 group-hover:opacity-50 transition-opacity">
                <MapPin size={48} className="text-green-500 mb-4" />
                <p className="font-mono text-xs uppercase">Map_Data_Loading...</p>
              </div>
              <div className="absolute inset-0 border-[20px] border-black/80 pointer-events-none"></div>
            </div>

            <div className="border border-green-900/50 p-8 bg-black/40 backdrop-blur-sm">
              <h3 className="text-green-500 font-bold uppercase text-xs tracking-widest mb-4 flex items-center gap-2">
                <Clock size={14} /> Godziny Operacyjne
              </h3>
              <div className="space-y-2 font-mono text-sm text-gray-400">
                <div className="flex justify-between border-b border-green-900/20 pb-2">
                  <span>Poniedziałek - Piątek</span>
                  <span className="text-white text-right">16:00 - 18:00</span>
                </div>
                <div className="flex justify-between border-b border-green-900/20 pb-2">
                  <span>Sobota</span>
                  <span className="text-white text-right">16:00 - 20:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Niedziela</span>
                  <span className="text-red-900 text-right uppercase">Offline</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}