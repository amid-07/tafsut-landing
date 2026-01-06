"use client";

import { Mail, ArrowUpRight, Lock, ShieldCheck, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-[#2F3A4A] pt-24 pb-12 px-6 border-t border-[#EAE6DA]/10 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 mb-20">
          
          {/* Section Marque */}
          <div className="md:col-span-6 space-y-6">
            <div className="flex items-center gap-4 cursor-pointer" onClick={scrollToTop}>
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#EAE6DA] p-2 flex items-center justify-center shadow-lg">
                <img src="/logo.png" alt="Tafsut" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-2xl font-black tracking-tighter text-[#EAE6DA]">TAFSUT</h3>
            </div>
            <p className="text-lg md:text-xl text-[#EAE6DA]/50 leading-relaxed font-light max-w-md">
              La renaissance commence par le respect de votre vie privée. Une plateforme bâtie sur l'anonymat et la bienveillance.
            </p>
            <div className="flex items-center gap-3 text-[#EAE6DA]/30 text-[10px] font-bold uppercase tracking-[0.2em]">
              <Lock size={14} /> <span>Anonymat & Confidentialité Totale</span>
            </div>
          </div>

          {/* Section Navigation & Contact */}
          <div className="md:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h4 className="font-bold text-[#EAE6DA] uppercase text-[10px] tracking-[0.3em] opacity-40">Navigation</h4>
              <ul className="space-y-4">
                {['Notre Méthode', 'Confidentialité', 'Support IA'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-[#EAE6DA]/60 hover:text-[#EAE6DA] flex items-center gap-2 transition-colors text-sm">
                      {link} <ArrowUpRight size={14} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 md:p-8 rounded-[2rem] bg-[#59647A]/20 border border-[#EAE6DA]/10 backdrop-blur-sm">
              <h4 className="font-bold text-[#EAE6DA] mb-4 text-sm flex items-center gap-2">
                 <ShieldCheck size={18} /> Besoin d'aide ?
              </h4>
              <a href="mailto:contact@tafsut.io" className="flex items-center gap-3 text-[#EAE6DA] font-bold hover:underline text-sm truncate">
                <Mail size={18} /> contact@tafsut.io
              </a>
            </div>
          </div>
        </div>

        {/* Barre de copyright */}
        <div className="pt-10 border-t border-[#EAE6DA]/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[#EAE6DA]/20 text-[10px] uppercase tracking-[0.2em] text-center md:text-left">
            © 2026 TAFSUT — CONFIDENTIALITÉ & ANONYMAT GARANTIS
          </p>
          <p className="flex items-center gap-1 text-[#EAE6DA]/20 text-[10px] uppercase tracking-widest font-bold">
            Fait avec <Heart size={10} className="text-red-400/30" /> pour votre liberté
          </p>
        </div>
      </div>
    </footer>
  );
}