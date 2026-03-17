"use client";

import React from 'react';
import { Target, Trophy, ArrowUpRight, ChevronRight } from 'lucide-react';

interface ProjectProps {
  title: string;
  category: string;
  description: string;
  date: string;
  members: string;
  location: string;
  progress: number;
  goals: string[];
}

export const GWLO = ({ title, category, description, date, members, location, progress, goals }: ProjectProps) => {
  return (
    <div className="bg-black/80 border border-green-900/50 p-8 md:p-12 relative group hover:border-green-500 transition-all duration-500 mb-12">
      <div className="absolute top-0 right-0 bg-green-900/20 px-4 py-2 border-b border-l border-green-900 text-green-500 font-mono text-[10px] tracking-widest uppercase">
        STATUS: AKTYWNY
      </div>

      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-6">
          <div>
            <span className="text-green-500 font-mono text-xs tracking-widest uppercase flex items-center gap-2">
              <Trophy size={14} /> {category}
            </span>
            <h2 className="text-3xl md:text-5xl font-black mt-2 tracking-tighter uppercase text-white">
              {title}
            </h2>
          </div>

          <p className="text-gray-400 leading-relaxed max-w-2xl">{description}</p>

          <div className="space-y-4 pt-4">
            <h4 className="text-green-500 font-bold text-xs uppercase tracking-widest flex items-center gap-2 text-left">
              <Target size={14} /> Główne cele:
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-300 font-mono">
              {goals.map((goal, index) => (
                <li key={index} className="flex items-start gap-2">
                  <ChevronRight size={14} className="text-green-600 mt-1" /> {goal}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-green-950/10 border border-green-900/30 p-8 space-y-8 flex flex-col justify-center">
          <div className="space-y-4">
            {[ 
              { label: "Od kiedy:", value: date },
              { label: "Liczba członków:", value: members },
              { label: "Lokalizacja:", value: location }
            ].map((d, i) => (
              <div key={i} className="border-l border-green-900 pl-4 py-1">
                <p className="text-[10px] text-green-700 font-mono uppercase tracking-widest text-left">{d.label}</p>
                <p className="text-white font-bold text-sm uppercase text-left">{d.value}</p>
              </div>
            ))}
          </div>
          
          <div className="pt-6">
            <div className="flex justify-between text-[10px] font-mono text-green-600 mb-2 uppercase">
              <span>Zapełnienie</span>
              <span>{progress}%</span>
            </div>
            <div className="w-full bg-green-900/30 h-1">
              <div className="bg-green-500 h-full shadow-[0_0_10px_#22c55e]" style={{ width: `${progress}%` }}></div>
            </div>
          </div>

          <button className="w-full bg-white text-black font-black py-4 uppercase text-xs tracking-widest hover:bg-green-500 transition-all flex items-center justify-center gap-2 group-hover:gap-4">
            Więcej informacji <ArrowUpRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};