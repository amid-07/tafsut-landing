"use client";

import { motion } from 'framer-motion';
import EmailForm from './EmailForm';
import { Sparkles, Lock } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-8 pb-24 px-4 md:px-6 overflow-hidden min-h-[90vh] flex flex-col justify-center">
      {/* Glow de fond */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full md:w-[1000px] h-[600px] bg-[#EAE6DA]/5 blur-[120px] rounded-full pointer-events-none" />

      {/* HEADER ANIME */}
      <motion.header 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl w-full mx-auto flex justify-between items-center mb-16 md:mb-24 px-4 md:px-8 py-4 rounded-3xl bg-[#59647A]/10 border border-[#EAE6DA]/5 backdrop-blur-xl relative z-20 shadow-2xl"
      >
        <div className="flex items-center gap-3 md:gap-4 group cursor-pointer">
          <motion.div 
            whileHover={{ rotate: 15, scale: 1.1 }}
            className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#EAE6DA] p-2 shadow-lg"
          >
            <img src="/logo.png" alt="Tafsut" className="w-full h-full object-contain" />
          </motion.div>
          <span className="text-[#EAE6DA] font-black tracking-tighter text-xl md:text-2xl uppercase">TAFSUT</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EAE6DA]/5 border border-[#EAE6DA]/20 text-[#EAE6DA] text-[10px] font-bold uppercase tracking-widest">
          <Lock size={12} /> 100% Anonyme
        </div>
      </motion.header> {/* <-- CORRIGÉ : bien fermer avec motion.header */}

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* BADGE ANIME */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#59647A]/30 border border-[#EAE6DA]/10 mb-8 md:mb-10"
        >
          <Sparkles size={16} className="text-[#EAE6DA] animate-pulse" />
          <span className="text-[9px] md:text-[10px] font-black tracking-[0.3em] uppercase text-[#EAE6DA] opacity-80">
            Confidentialité Totale • Renaissance 2026
          </span>
        </motion.div>

        {/* TITRE ANIME */}
        <motion.h1 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-9xl font-black mb-6 md:mb-8 leading-[1] md:leading-[0.85] tracking-tighter text-[#EAE6DA]"
        >
          Reprenez le <br/> 
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#EAE6DA] via-[#EAE6DA] to-[#59647A]/50">Contrôle.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-base md:text-2xl mb-10 md:mb-14 max-w-3xl mx-auto leading-relaxed font-light text-[#EAE6DA] px-2"
        >
          <b>Tafsut</b> unit l'expertise des <b>Psychologues</b>, le soutien d'un <b>Coach IA</b> 
          et l'analyse de votre <b>Journal</b> pour une libération sans jugement.
        </motion.p>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex justify-center w-full"
        >
          <EmailForm />
        </motion.div>
      </div>
    </section>
  );
}